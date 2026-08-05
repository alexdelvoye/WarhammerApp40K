const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

// Expo's flat ESLint config is extended with Prettier so style issues show in linting.
module.exports = defineConfig([
  // Base rules recommended for Expo and React Native projects.
  expoConfig,
  // Runs Prettier through ESLint for consistent formatting feedback.
  eslintPluginPrettierRecommended,
  {
    // Build output should not be linted as source code.
    ignores: ["dist/*"],
    rules: {
      // Keep line endings compatible across Windows and other environments.
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      // Warn when accidental vertical whitespace makes files harder to scan.
      "no-multiple-empty-lines": ["warn", { max: 1 }],
    },
  },
]);
