module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-typescript",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module",
    project: "./tsconfig.json"
  },
  "plugins": [
    "react",
    "prettier",
    "react-hooks"
  ],
  "rules": {
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "no-use-before-define": 0,
    "consistent-return": 0,
    "react/display-name": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "spaced-comment": [
      "warn",
      "always",
      {
        "exceptions": [
          "-",
          "///",
          "/",
          "4",
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "warn",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      pragma: 'React',
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    }
},
};