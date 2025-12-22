.PHONY: run build help

run: ## Запуск любого .js файла, путь к .js передается через "make run filename="
	docker run --rm -it -v "$(CURDIR)":/work -w /work homework $(filename)

build: ## Сборка образа
	docker build -t homework .

help: ## Список команд 	
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'