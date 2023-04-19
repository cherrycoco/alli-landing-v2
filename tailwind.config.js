// /** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Lexend", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Jomhuria", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      backgroundColor: {
        'primary-100': '#E9EFF1',
        'primary-200': 'rgba(21, 96, 115, 0.5)',
        'primary-300': '#99CAD3',
        'primary-400': '#70B3C1',
        'primary-500': '#156073', // Your primary color
        'primary-900': '#05323e',
        'accent-100': '#F7F8D1',
        'accent-200': '#EBEBC1',
        'accent-300': '#E0DEB2',
        'accent-400': '#D4D1A2',
      },
      textColor: {
        'primary-100': '#E9EFF1',
        'primary-200': 'rgba(21, 96, 115, 0.6)',
        'primary-300': '#99CAD3',
        'primary-400': '#70B3C1',
        'primary-500': '#156073', // Your primary color
        'accent-100': '#F7F8D1',
        'accent-200': '#EBEBC1',
        'accent-300': '#E0DEB2',
        'accent-400': '#D4D1A2',
      },
      borderColor: {
        'primary-100': '#E9EFF1',
        'primary-200': '#C2E0E6',
        'primary-300': '#99CAD3',
        'primary-400': '#70B3C1',
        'primary-500': '#156073', // Your primary color
        'accent-100': '#F7F8D1',
        'accent-200': '#EBEBC1',
        'accent-300': '#E0DEB2',
        'accent-400': '#D4D1A2',
      },
      // backgroundColor: {
      //   "primary": "#YourPrimaryColor",
      //   "secondary": "#YourSecondaryColor",
      // },
      // textColor: {
      //   "primary": "#YourPrimaryTextColor",
      //   "secondary": "#YourSecondaryTextColor",
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ["Lexend", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
  //       serif: ["Jomhuria", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
  //     },
  //     // backgroundColor: {
  //     //   "primary": "#YourPrimaryColor",
  //     //   "secondary": "#YourSecondaryColor",
  //     // },
  //     // textColor: {
  //     //   "primary": "#YourPrimaryTextColor",
  //     //   "secondary": "#YourSecondaryTextColor",
  //     // },
  //   },
  // },
  // variants: {
  //   extend: {},
  // },
  // plugins: [],
};
