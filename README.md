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


## My vs code settings.json config
``` json
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
