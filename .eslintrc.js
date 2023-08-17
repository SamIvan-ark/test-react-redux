module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        jquery: true,
        jest: true,
    },
    rules: {
        'class-methods-use-this': 0,
        'import/prefer-default-export': 0,
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { code: 120 }],
        'no-alert': 0,
        'no-plusplus': 0,
        'no-console': 0,
        'no-prototype-builtins': 0,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
    ],
    plugins: [
        'import',
        'react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
    },
    globals: {},
};
