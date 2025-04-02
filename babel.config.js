module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "^@app/(.+)": "./src/\\1",
            "^@assets/(.+)": "./assets/\\1",
          },
          root: ["./src"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
