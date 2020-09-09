# eslint-config-drupal-contrib

> This project is now deprecated. Please use [eslint-plugin-drupal-contrib](https://www.npmjs.com/package/eslint-plugin-drupal-contrib) instead.

[![Latest release](https://img.shields.io/github/v/release/coldfrontlabs/eslint-config-drupal-contrib?include_prereleases&style=for-the-badge)](https://github.com/coldfrontlabs/eslint-config-drupal-contrib/releases)
[![License](https://img.shields.io/github/license/coldfrontlabs/eslint-config-drupal-contrib?style=for-the-badge)](/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)
[![Drupal Version](https://img.shields.io/badge/Drupal-8.8.x-blue?style=for-the-badge)](https://www.drupal.org/project/drupal/releases/8.8.0)

An ESLint configuration to match the [Drupal standard](https://www.drupal.org/node/1955232) for contrib modules and themes.

Extends [eslint-config-airbnb](https://github.com/airbnb/javascript) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

For more detail on the rules implemented, see the [config itself](/index.js).

## Installation

```shell
# latest stable
npm install eslint prettier --save-dev
npm install eslint-config-drupal-contrib --save-dev
```

## Usage

Add the following to your eslint configuration file

```jsx
extends: ["eslint-config-drupal-contrib"]
```

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
