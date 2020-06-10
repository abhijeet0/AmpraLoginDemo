module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        // '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-a11y/register'
      ],
    };