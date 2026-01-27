// eslint.config.js or eslint.config.ts
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS/TS and JSX/TSX handling
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
]);
