// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
    rules: {
        "@stylistic/indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],

        "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
        "vue/html-quotes": ["error", "double"],

        "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "vue/brace-style": ["error", "1tbs", { allowSingleLine: true }],

        "vue/block-order": ["error", {
            order: ["template", "script", "style"],
        }],

        "nuxt/nuxt-config-keys-order": "off",

        "vue/multi-word-component-names": "off", // TODO: Currently this does not respect the new folder structure of Nuxt 4 -> disable for now
    },
})
