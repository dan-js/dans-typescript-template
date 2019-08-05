module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    plugins: ["jest"],
    env: {
        "jest/globals": true,
        "node": true,
        "es6": true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            modules: true
        }
    }
};
