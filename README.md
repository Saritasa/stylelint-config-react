# @saritasa/stylelint-config-react

Saritasa's shareable config for [stylelint](https://github.com/stylelint/stylelint) on react projects.

1. Install peer dependencies and config itself.

```sh
$ npm install --save-dev stylelint stylelint-declaration-use-variable stylelint-no-unsupported-browser-features
$ npm install --save-dev stylelint-order @saritasa/stylelint-config-order @saritasa/stylelint-config-react
```

2. Add `"@saritasa/stylelint-config-base"` to your `"extends"` section of `.stylelintrc` file.
