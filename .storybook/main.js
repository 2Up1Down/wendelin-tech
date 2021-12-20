// .storybook/main.js
const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook');

module.exports = {
  stories: [
    '../styles/globals.css',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ...getStoriesPaths(),
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
};
