/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontSize: {
      'size-xs': '0.75rem',
      'size-sm': '0.875rem',
      'size-bs': '1rem',
      'size-lg': '1.125rem',
      'size-xl': '1.25rem',
      'size-2xl': '1.5rem',
      'size-3xl': '1.875rem',
      'size-4xl': '2.25rem',
      'size-5xl': '3rem',
      'size-6xl': '3.75rem',
      'size-7xl': '4.5rem',
      'size-8xl': '6rem',
      'size-9xl': '8rem',
    },
    fontWeight: {
      'weight-thin': '100',
      'weight-extralight': '200',
      'weight-light': '300',
      'weight-normal': '400',
      'weight-medium': '500',
      'weight-semibold': '600',
      'weight-bold': '700',
      'weight-extrabold': '800',
      'weight-black': '900',
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
