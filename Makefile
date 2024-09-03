gen-clients:
	cd api && make gen-openapi-spec
	openapi-generator-cli generate -i api/data/openapi-spec.yaml -g javascript -o ./ui/ada-client
	./cleanup-gen-ui-client.sh
	rm -rf ./ui/ada-client/dist
	cd ui/ada-client && npm run build
	cd ui && npm install
	echo "UI client generated and built"

build:
	docker compose build api-deploy ui-deploy

tag:
	docker tag platform-api-deploy:latest us-central1-docker.pkg.dev/rad-containers-hmed/platform/api:latest
	docker tag platform-ui-deploy:latest us-central1-docker.pkg.dev/rad-containers-hmed/platform/ui:latest

upload:
	docker push us-central1-docker.pkg.dev/rad-containers-hmed/platform/api:latest && \
	docker push us-central1-docker.pkg.dev/rad-containers-hmed/platform/ui:latest


deploy: build tag upload
	gcloud run deploy api \
					--image=us-central1-docker.pkg.dev/rad-containers-hmed/platform/api:latest \
					--execution-environment=gen2 \
					--region=us-central1 \
					--project=rad-dev-platapi-4r64 \
					&& gcloud run services update-traffic api --to-latest --region us-central1 && \
				gcloud run deploy ui \
					--image=us-central1-docker.pkg.dev/rad-containers-hmed/platform/ui:latest \
					--execution-environment=gen2 \
					--region=us-central1 \
					--project=rad-dev-platapi-4r64 \
					&& gcloud run services update-traffic ui --to-latest --region us-central1

build-ui-cloudbuild-kaniko:
# $(eval export SHORT_SHA=$(shell git rev-parse --short HEAD))
	$(eval export SHORT_SHA=$(shell openssl rand -hex 3))
	gcloud builds submit --project=rad-containers-hmed --config=cloudbuild-ui-kaniko.yaml --substitutions=SHORT_SHA=$(SHORT_SHA) .

deploy-ui-cloudbuild-kaniko: build-ui-cloudbuild-kaniko
	gcloud run deploy ui \
		--image=us-central1-docker.pkg.dev/rad-containers-hmed/ai-platform/ui:$(SHORT_SHA) \
		--execution-environment=gen2 \
		--region=us-central1 \
		--project=rad-dev-platapi-4r64 \
		&& gcloud run services update-traffic ui --to-latest --region us-central1 --project=rad-dev-platapi-4r64

build-api-cloudbuild-kaniko:
# $(eval export SHORT_SHA=$(shell git rev-parse --short HEAD))
	$(eval export SHORT_SHA=$(shell openssl rand -hex 3))
	gcloud builds submit --project=rad-containers-hmed --config=cloudbuild-api-kaniko.yaml --substitutions=SHORT_SHA=$(SHORT_SHA) .

deploy-api-cloudbuild-kaniko: build-api-cloudbuild-kaniko
	gcloud container clusters get-credentials cluster-1 --region us-central1 --project rad-dev-platapi-4r64
	kubectl set image deployment/api api=us-central1-docker.pkg.dev/rad-containers-hmed/ai-platform/api:$(SHORT_SHA)
	kubectl rollout status deployment/api
