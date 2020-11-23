module.exports = {
    "defaultSeverity": "error",
    "extends": ["stylelint-config-standard"],
    "rules": {
        "indentation": [
            4,
            {
                "except": ["param", "value"],
                "severity": "error"
            }
        ],
        "declaration-block-single-line-max-declarations": 1,
        "color-hex-case": "upper",
        "declaration-no-important": true,
        "selector-max-id": 0,

        // Do not use a browser prefix that is already supported by autoprefixer
        "media-feature-name-no-vendor-prefix": true,
        "at-rule-no-vendor-prefix": true,
        "selector-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true
    }
};