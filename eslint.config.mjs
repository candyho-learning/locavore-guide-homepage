import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "simple-import-sort/imports": ["error", { groups: [[".*"]] }],
      "simple-import-sort/exports": "error",
      "import/no-cycle": "error",
      "react/jsx-closing-tag-location": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 0 }],
      "eol-last": ["error", "always"],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
