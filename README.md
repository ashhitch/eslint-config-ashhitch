# Eslint and Prettier Setup

These are my settings for ESLint and Prettier

Install

```
npx install-peerdeps --dev eslint-config-ashhitch
```

Add to `.eslintrc`

```json
{
    "extends": ["ashhitch"]
}
```

### TypeScript

In your `package.json`:

```json

  "eslintConfig": {
    "extends": "eslint-config-ashhitch/typescript.js",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  },

```

```json
Then make a `tsconfig.json` file:

{
  "extends": "eslint-config-ashhitch/tsconfig.json",
  "include": [
    "**/*"
  ]
}
```

## My vs code settings.json config

```json
{
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.enable": true,
    "prettier.disableLanguages": ["javascript", "typescript", "typescriptreact", "javascriptreact"],
    "npm.packageManager": "yarn",
    "typescript.tsdk": "node_modules/typescript/lib"
}
```
