import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      "black": {
        DEFAULT: '#000',
        100: '#111111',
        300: '#0f0f0f',
        500: '#131313',
      },
      "grey": {
        DEFAULT: '#606060'
      },
      "white": {
        DEFAULT: '#ffffff',
        500: '#f8f8f8',
      }
    },
    extend: {
      boxShadow: {
        'xl': '0px 0px 1px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
export default config
