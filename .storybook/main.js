const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
    framework: '@storybook/react',
    staticDirs: ['../public'],
    webpackFinal: (config) => {
        config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

        return config;
    },
};
