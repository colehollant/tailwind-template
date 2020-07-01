const minMax = {
  min: 'min-content',
  max: 'max-content',
}
module.exports = {
  purge: {
    enabled: false,
    content: [
      './public/**/*.html',
      './public/**/*.vue',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      width: minMax,
      height: minMax,
    },
  },
  variants: {},
  plugins: [],
}
