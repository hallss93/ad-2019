#!/bin/sh

echo "composing docker...."

docker-compose -f settings.dev.yml up -d
