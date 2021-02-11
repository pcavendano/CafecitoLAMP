SHELL := /bin/bash 

.PHONY: help
help:  ## Use `make help` to see this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: up
upall:
	cd docker && docker-compose up -d workspace nginx phpmyadmin mysql typescript

.PHONY:exec	
execw: ## execute workspace
	cd docker && docker-compose exec workspace bash

.PHONY:stop
stop:
	cd docker && docker-compose stop

.PHONY:restart
restart all:
	cd docker && docker-compose stop
	cd docker && docker-compose build -d workspace nginx phpmyadmin mysql typescript

.PHONY:ps
ps:
	cd docker && docker-compose ps

.PHONY:buildall
buildall:
	cd docker && docker-compose build workspace nginx phpmyadmin mysql typescript

.PHONY:buildts
buildts:
	cd docker && docker-compose build typescript

.PHONY:upts
upts:
	cd docker && docker-compose up -d typescript

.PHONY:exects
exects:
	cd docker && docker-compose exec typescript sh
