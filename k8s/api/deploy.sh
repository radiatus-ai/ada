#!/bin/bash

cat sa.yaml | kubectl apply -f -
cat cert.yaml | kubectl apply -f -
cat service.yaml | kubectl apply -f -
cat frontend-config.yaml | kubectl apply -f -
cat ingress.yaml | kubectl apply -f -

cat secret-store.yaml | kubectl apply -f -
cat secrets.yaml | kubectl apply -f -
cat deployment.yaml | kubectl apply -f -
