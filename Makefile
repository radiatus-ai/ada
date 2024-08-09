gen-clients:
	openapi-generator-cli generate -i data/openai-spec.yaml -g javascript -o ./ui/platform-client

#  && \
# openapi-generator-cli generate -i data/openai-spec.yaml -g go -o ../go-client

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
