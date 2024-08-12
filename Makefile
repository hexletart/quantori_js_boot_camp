install:
	npm ci

start:
	npm start

build:
	npm run build

lint:
	npx stylelint '**/*{.css,.scss}'
	npx eslint src/
