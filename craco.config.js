const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@layout": path.resolve(__dirname, "./src/ui/components/layout"),
      "@modules": path.resolve(__dirname, "./src/ui/components/modules"),
      "@design-system": path.resolve(__dirname, "./src/ui/design-system"),
      "@pages": path.resolve(__dirname, "./src/infra/routing/pages"),
      "@state": path.resolve(__dirname, "./src/infra/state"),
      "@styles": path.resolve(__dirname, "./src/ui/static/styles"),
      "@assets": path.resolve(__dirname, "./src/ui/static/assets"),
    },
  },
};
