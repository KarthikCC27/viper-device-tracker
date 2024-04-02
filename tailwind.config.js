/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}","./node_modules/flowbite/**/*.ts"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '10px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

