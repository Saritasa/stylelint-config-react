module.exports = {
  extends: [
    'stylelint-config-saritasa-base'
  ],
  rules: {
    'selector-max-specificity': ['0,2,1', {
      ignoreSelectors: [':global']
    }],
    'selector-attribute-operator-whitelist': [],
    'selector-max-class': 1,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0
  }
};
