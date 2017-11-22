# @appbooster/eslint-config-react

[![Greenkeeper badge](https://badges.greenkeeper.io/appbooster/eslint-config-react.svg)](https://greenkeeper.io/)

Shared eslint config for react projects in Appbooster organization

## Installation

1) Install the package:

```
yarn add --dev @appbooster/eslint-config-react
```

2) Add eslint [config](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) in the root folder and add `extends` option. I.e. using YAML format put file `.eslintrc.yml` with content:

```
extends: '@appbooster/eslint-config-react'
```

Recommened to use with [base config](https://www.npmjs.com/package/@appbooster/eslint-config-base).
