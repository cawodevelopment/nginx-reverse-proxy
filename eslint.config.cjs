module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        process: "readonly",
        module: "readonly",
        console: "readonly",
        __dirname: "readonly",
        __filename: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["warn", { "args": "none", "caughtErrors": "none" }],
      "no-undef": ["error"],
      "no-console": ["off"],
    },
  },
];
