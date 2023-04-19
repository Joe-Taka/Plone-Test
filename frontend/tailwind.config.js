/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.mdx',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
