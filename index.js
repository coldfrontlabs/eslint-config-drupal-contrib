module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
    drupalTranslations: true,
    domready: true,
    jQuery: true,
    _: true,
    matchMedia: true,
    Backbone: true,
    Modernizr: true,
    CKEDITOR: true
  },
  rules: {
    "prettier/prettier": "error",
    "consistent-return": ["off"],
    "no-underscore-dangle": ["off"],
    "max-nested-callbacks": ["warn", 3],
    "import/no-mutable-exports": ["warn"],
    "no-plusplus": [
      "warn",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-param-reassign": ["off"],
    "no-prototype-builtins": ["off"],
    "valid-jsdoc": [
      "warn",
      {
        prefer: {
          returns: "return",
          property: "prop"
        },
        requireReturn: false
      }
    ],
    "no-unused-vars": ["warn"],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "ignore",
          ":": "ignore"
        }
      }
    ]
  }
};
