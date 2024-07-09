const path = require("path");

module.exports = {
  webpack: {
    alias: {
      /* Domain */
      "@domain": path.resolve(__dirname, "./src/domain"),
       /* UI (User Interface */
      "@global": path.resolve(__dirname, "./src/ui/global"),
      "@modules": path.resolve(__dirname, "./src/ui/modules"),
      /* Design System*/
      "@design-system": path.resolve(__dirname, "./src/ui/design-system"),
       /* Infrastructure */
      "@pages": path.resolve(__dirname, "./src/infra/routing/pages"),
      "@state": path.resolve(__dirname, "./src/infra/state"),
       /* Static Resources */
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
