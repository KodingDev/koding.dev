// @ts-check

import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

// biome-ignore lint/style/noDefaultExport: Config file
export default defineConfig([
  // Next.js Core Web Vitals config
  ...nextVitals,

  // Better Tailwind CSS plugin configuration
  {
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
    settings: {
      "better-tailwindcss": {
        // For Tailwind CSS v4, specify the entry point to your CSS file
        entryPoint: "src/app/globals.css",
      },
    },
    rules: {
      // Tailwind CSS rules
      "better-tailwindcss/no-duplicate-classes": "warn",
      "better-tailwindcss/no-unnecessary-whitespace": "warn",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/no-unregistered-classes": "error",
      "better-tailwindcss/no-conflicting-classes": "error",

      // Disable formatting-related rules (Biome handles formatting)
      "better-tailwindcss/enforce-consistent-class-order": "off",
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",

      // Disable all TypeScript ESLint rules (Biome handles TypeScript linting)
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable all import rules (Biome handles imports)
      "import/no-anonymous-default-export": "off",

      // Disable React stylistic rules that conflict with Biome
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",
    },
  },

  // Global ignores
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      ".velite/**",
      "next-env.d.ts",
      "postcss.config.mjs",
      "tailwind.config.js",
    ],
  },
]);
