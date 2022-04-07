# Template ReactJS On Typescript

- The template for reactjs can reuse and write on typescript
- Folders

```shell
  .
  |-- README.MD
  |-- cypress.json
  |-- jest.config.js
  |-- package.json
  |-- template.dev.html
  |-- template.prod.html
  |-- webpack.common.js
  |-- webpack.dev.js
  |-- webpack.prod.js
  |-- tsconfig.json
  |-- public // folder store index.html, manifest and other for static web
  |   |-- index.html
  |   |-- favicon.ico
  |   |-- ...
  |-- srcipts // store all files scripts JS|SH|ETC
  |   |-- mjml-compile.js
  |   |-- ...
  |-- src
  |   |-- assets
  |       |-- css
  |       |-- images
  |       |-- theme
  |       |-- mjml
  |   |-- components // stor all components of project here
  |   |-- |-- index.ts
  |   |   |-- footer
  |   |       |-- footer.tsx
  |   |       |-- footer-styles.scss
  |   |       |-- ...
  |   |-- constants // store all enum, constants here
  |   |   |-- common.ts
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- hooks // write hooks for reuse here
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- interfaces // define types & structure object here
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- locales // define for languages here
  |   |   |-- i18n.ts
  |   |   |-- ...
  |   |-- middlewares // store all middleware file here
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- pages // list pages
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- routes // list routes
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- services // all code communicate with APIs via HTTP here
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- storages // for redux, saga and any state here
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- styles // define style in SASS/LESS
  |   |   |-- _varibles.scss
  |   |   |-- index.scss
  |   |   |-- ...
  |   |-- tests // write unittest files
  |   |   |-- App.test.tsx
  |   |   |-- ...
  |   |-- utils // for helpers
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- validations // validate input / output
  |   |   |-- index.ts
  |   |   |-- ...
  |   |-- index.tsx
  |   |-- global.d.ts
  |   |-- react-app-env.d.ts
  |   |-- serviceWorker.ts
  |   |-- setupTests.ts
  |
  |
```

## Configuration

1. Create a `.env` file from `.env.sample` and update value before start.
2. Activating and configuring ESLint
   > Setup on WebStorm

- In the `Settings/Preferences` dialog `(Ctrl+Alt+S)`, go to `Languages and Frameworks | JavaScript | Code Quality Tools | ESLint`.
- Select the `Manual ESLint configuration` option to use a custom ESLint package and configuration.
- In the `Node Interpreter` field, specify the path to Node.js. If you followed the standard installation procedure, `WebStorm` detects the path and fills in the field itself.
- In the `ESLint Package` field, specify the location of the eslint or standard package. `{project_path}/node_modules/eslint`
- In the `Configuration file` field, select this option to use a custom file and specify the file location in the Path field. `{project_path}/.eslintrc`
- Click `Apply > OK`
  > Setup on VS Code
- Configure [Visual Studio Code](https://code.visualstudio.com/)
- Please install the 3 extensions below into VS Code:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension
  - Restart VS Code

## Installation

- This use for setup
- If you use multiple databases then need change some in `bin/entity.js at Line 52`

```sh
yarn install
yarn run start
```

## Rules And References

- Some rules for write code in this template

### TypeScript Docs Refers

- [Typescript ESLint](https://typescript-eslint.io)
- [TypeScript From Scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Variables Naming

- [Naming Cheatsheet](./naming.md)

### Linter

> It is recommended to apply the known extended presets in addition to the basic rules

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with TypeScript support
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  > **Conventional Commits**: For consistent commit message
- [Conventional Commits](https://www.conventionalcommits.org)
- [Commit Lint](https://commitlint.js.org)
  > **Semantic Versioning**: For automatic versioning and changelog based on consistent commit messages
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- If you publish the project as a package, use [semantic-release](https://github.com/semantic-release/semantic-release).

### Index Exporting

```diff
# It's recommended to place index.ts in each folder and export.
# Unless it's a special case, it's import from a folder instead of directly from a file.
- import { FooComponent } from './components/foo';
+ import { FooComponent, BarComponent } from './components';
# My preferred method is to place only one fileOrFolder name at the end of the path.
- import { HttpService, OtherService } from './services';
+ import { HttpService } from './services/httpService';
```

### Circular Dependency

- [Circular Dependency](https://docs.nestjs.com/fundamentals/circular-dependency)

```diff
# Do not use a path that ends with a dot.
- import { FooService } from '.';
- import { BarService } from '..';
+ import { FooService } from './foo.service';
+ import { BarService } from '../providers';
```
