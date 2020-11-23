module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2020
    },
    rules: {
        // General.
        "max-len": ["warn", {
            "code": 120
        }],

        // Typescript.
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": ["warn", 4],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],
        "semi-spacing": ["warn", { "before": false, "after": true }],
        "semi-style": ["warn", "last"],
        "space-in-parens": ["warn", "never"],
        "block-spacing": "warn",
        "keyword-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": "warn",
        "object-curly-spacing": ["warn", "always"],

        // Vue templates.
        "vue/html-indent": ["warn", 4, {
            "attribute": 1,
            "baseIndent": 0,
            "closeBracket": 0,
            "alignAttributesVertically": true
        }],
        "vue/singleline-html-element-content-newline": "off",
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 3,
            "multiline": {
                "max": 3,
                "allowFirstLine": true
            }
        }]
    }
}
