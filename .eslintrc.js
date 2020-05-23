module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  plugins: ["prettier"],
  rules: {
    "react/prop-types": 0,
    "prettier/prettier": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
