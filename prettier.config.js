// prettier.config.js
import("prettier").Config;
import("prettier-plugin-tailwindcss").PluginOptions;

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
};
