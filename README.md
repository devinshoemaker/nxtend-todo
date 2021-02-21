# Welcome to nxtend-todo 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: paranoidcoder](https://img.shields.io/twitter/follow/paranoidcoder.svg?style=social)](https://twitter.com/paranoidcoder)

> An application to demo the Nxtend Ionic plugins for Nx

## Features

- App build with Ionic React in an Nx workspace
- Storybook to render components in isolation
- Tailwind CSS for additional styling
- Unit tests with Jest and @testing-library/react
- e2e tests with Cypress and @testing-library/cypress
- GitHub Actions for CI/CD
- Firebase for authentication with emulators for local development and CI/CD

## Install

### Install application dependencies

```sh
npm install
```

### Install Nx CLI

While the Nx CLI is not mandatory for this project, it's highly recommended. If you do not want to install the Nx CLI globally on your system then you will need to preface all Nx commands with `npx`. e.g. `npx nx build`.

```sh
npm install -g nx
```

### Install Firebase CLI

The Firebase CLI is required for running the application against a local instance of Firebase, as well as e2e tests.

```sh
npm install -g firebase-tools
```

## Usage

### Local development against emulators

To run the application against a local Firebase instance (recommended for testing and development) you need execute two different commands in two different terminal sessions. The first command starts the Firebase emulators, and the second command starts the application development server.

```sh
nx emulators-start
nx serve
```

### Production development against Firebase

To run the application against the production instance of Firebase, execute:

```sh
nx serve:prod
```

## Run tests

### Unit tests

To run unit tests with Jest, execute:

```sh
nx test
```

### e2e tests

To run e2e tests with Cypress, execute:

```sh
nx emulators-start
nx e2e todo-e2e
```

## Author

👤 **Devin Shoemaker**

- Website: https://nxtend.dev
- Twitter: [@paranoidcoder](https://twitter.com/paranoidcoder)
- Github: [@devinshoemaker](https://github.com/devinshoemaker)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
