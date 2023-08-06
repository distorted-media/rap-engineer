import { Public_Sans } from 'next/font/google';
import { extendTheme } from '@mui/joy/styles';


const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
});


export default theme;
