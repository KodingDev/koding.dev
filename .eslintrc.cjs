module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['*.cjs'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'svelte/no-at-html-tags': 'off',
    'svelte/html-self-closing': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',

      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
