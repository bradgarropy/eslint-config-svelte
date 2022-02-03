module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: ["./rules/svelte.js"],
    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
        },
    ],
    parserOptions: {
        ecmaFeatures: {},
        sourceType: "module",
    },
    plugins: ["svelte3"],
    parser: "@babel/eslint-parser",
    rules: {},
    settings: {},
}
