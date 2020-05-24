module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["airbnb-base", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'max-lines': ['error', {'max': 400, 'skipBlankLines': true, 'skipComments': true}],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'vue/no-v-html': 'off',

    "comma-dangle": ["error", "always"],

    'import/no-self-import': ['error'],
    'import/named': ['error'],
    'import/default': ['error'],
    'import/no-cycle': ['error'],
    'import/no-useless-path-segments': ['error'],
    'import/no-cycle': ['error'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any', // to be compatible with prettier
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
  },
  plugins: ['import', 'vue'],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
