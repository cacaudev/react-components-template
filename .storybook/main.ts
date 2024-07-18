import path from "path";

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    'storybook-design-token',
    '@storybook/manager-api',
    'storybook-addon-remix-react-router'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ['../public', '../src/static'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      /* Domain */
      "@domain": path.resolve(__dirname, "../src/core/domain"),
      /* Core Navigation */
      "@navigation": path.resolve(__dirname, "../src/core/navigation"),
      /* UI (User Interface */
      "@global": path.resolve(__dirname, "../src/ui/global"),
      "@modules": path.resolve(__dirname, "../src/ui/modules"),
      /* Design System*/
      "@design-system": path.resolve(__dirname, "../src/ui/design-system"),
      /* Infrastructure */
      "@pages": path.resolve(__dirname, "../src/infra/routing/pages"),
      "@state": path.resolve(__dirname, "../src/infra/state"),
      /* Static Resources */
      "@styles": path.resolve(__dirname, "../src/static/styles"),
      "@icons": path.resolve(__dirname, "../src/static/icons"),
      "@img": path.resolve(__dirname, "../src/static/img"),
    };

    return config;
  }
};