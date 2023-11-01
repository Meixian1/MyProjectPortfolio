module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other file paths as needed
  ],
    theme: {
      extend: {
        backgroundColor: {
          'pastel-pink-100': '#FFD4D8',
          'pastel-pink-200': '#FFA4B5',
          'pastel-pink-300': '#FF6B88',
          'pastel-blue-100': '#A0E1E0',
          'pastel-blue-200': '#64C4C8',
          'pastel-blue-300': '#34A3A6',
          'pastel-green-100': '#A7E3A3',
          'pastel-green-200': '#71CA6F',
          'pastel-green-300': '#4AAB48',
          'pastel-yellow-100': '#FFF8DB',
          'pastel-yellow-200': '#FEF1B3',
          'pastel-yellow-300': '#FCE776',
          'pastel-purple-100': '#E2D0F3',
          'pastel-purple-200': '#BFA2E6',
          'pastel-purple-300': '#9C74D9',
          'pastel-teal-100': '#99E6E6',
          'pastel-teal-200': '#66CCCC',
          'pastel-teal-300': '#33B2B2',
        },
        textColor: {
          'text-red-500': '#FF0000',
          'text-blue-500': '#0000FF',
          'text-green-500': '#008000',
          'text-yellow-500': '#FFFF00',
          'text-purple-500': '#800080',
        },
        boxShadow: {
          gray: '0 4px 6px -1px rgba(128, 128, 128, 0.1), 0 2px 4px -1px rgba(128, 128, 128, 0.06)',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  