// postcss.config.js
export default {
  plugins: {
    autoprefixer: {
      // Ensure vendor prefixes are added for backdrop-filter
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'Safari >= 9',
        'Chrome >= 60',
        'Firefox >= 60',
        'Edge >= 79',
      ],
      // Don't remove vendor prefixes
      remove: false,
    },
  },
}
