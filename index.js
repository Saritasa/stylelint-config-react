module.exports = {
  extends: [
    '@saritasa/stylelint-config-base'
  ],
  rules: {
    'selector-max-specificity': ['0,3,1', {
      ignoreSelectors: [':global']
    }],
    'selector-attribute-operator-whitelist': [],
    'selector-max-class': 2,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'selector-class-pattern': ["^[a-z]+([A-Z][a-z]+)*$", { resolveNestedSelectors: true }]
  }
};
