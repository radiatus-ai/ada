gen-clients:
	openapi-generator-cli generate -i data/openai-spec.yaml -g javascript -o ./ui/ada-client

#  && \
# openapi-generator-cli generate -i data/openai-spec.yaml -g go -o ../go-client

upload:
	docker-compose build api-deploy ui-deploy && \
        docker tag platform-api-api-deploy:latest us-west2-docker.pkg.dev/ada-test-1234/ada/platform-api:latest && \
				docker tag platform-api-ui-deploy:latest us-west2-docker.pkg.dev/ada-test-1234/ada/platform-ui:latest && \
				docker push us-west2-docker.pkg.dev/ada-test-1234/ada/platform-api:latest && \
				docker push us-west2-docker.pkg.dev/ada-test-1234/ada/platform-ui:latest && \
				gcloud run deploy platform-api \
					--image=us-west2-docker.pkg.dev/ada-test-1234/ada/platform-api:latest \
					--execution-environment=gen2 \
					--region=us-west2 \
					--project=ada-test-1234 \
					&& gcloud run services update-traffic platform-api --to-latest --region us-west2 && \
				gcloud run deploy platform-ui \
					--image=us-west2-docker.pkg.dev/ada-test-1234/ada/platform-ui:latest \
					--execution-environment=gen2 \
					--region=us-west2 \
					--project=ada-test-1234 \
					&& gcloud run services update-traffic platform-ui --to-latest --region us-west2
