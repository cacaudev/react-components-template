const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@layout": path.resolve(__dirname, "./src/ui/components/layout"),
      "@modules": path.resolve(__dirname, "./src/ui/components/modules"),
      "@design-system": path.resolve(__dirname, "./src/ui/design-system"),
      "@pages": path.resolve(__dirname, "./src/infra/routing/pages"),
      "@state": path.resolve(__dirname, "./src/infra/state"),
      "@styles": path.resolve(__dirname, "./src/static/styles"),
      "@icons": path.resolve(__dirname, "./src/static/icons"),
      "@img": path.resolve(__dirname, "./src/static/img"),
    },
    configure: (config, { env, paths }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config;
    }
  },
};
