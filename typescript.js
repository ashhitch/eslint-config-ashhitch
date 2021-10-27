module.exports = {
    globals: {
        React: true,
        JSX: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Layer in all the JS Rules
        './.eslintrc.js',
    ],
    // then add some extra good stuff for Typescript
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    // Then we add our own custom typescript rules
    rules: {
        // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
            'warn',
            {
                ignoreDeclarationMerge: true,
            },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 2,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};
