# Welcome to nxtend-todo 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: paranoidcoder](https://img.shields.io/twitter/follow/paranoidcoder.svg?style=social)](https://twitter.com/paranoidcoder)

> An application to demo the Nxtend Ionic plugins for Nx

## Features

- App build with Ionic React in an Nx workspace
- Storybook used to render components in isolation
- Tailwind CSS for additional styling
- Unit tests with Jest
- e2e tests with Cypress
- GitHub Actions for CI/CD
- Firebase for the backend with emulators for local development anc CI/CD

## Install

### Install application dependencies

```sh
npm install
```

### Install Nx CLI

```sh
npm install -g nx
```

### Install Firebase CLI

```sh
npm install -g firebase-tools
```

## Usage

### Local development against emulators

```sh
nx emulators-start & nx serve
```

### Production development against Firebase

```sh
nx serve:prod
```

## Run tests

### Unit tests

```sh
nx test
```

### e2e tests

```sh
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
