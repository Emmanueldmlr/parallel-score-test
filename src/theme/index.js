import {
    extendTheme,
    theme as defaultTheme,
  } from '@chakra-ui/react'
  import { mode } from '@chakra-ui/theme-tools'

  
  const theme  = extendTheme({
    ...defaultTheme,
    initialColorMode: 'light',
    useSystemColorMode: true,
    components: {
      Link: {
        variants: {
          link: (props) => ({
            color: mode('brand.500', 'brand.700')(props),
          }),
        },
      }
    },
    fonts: {
      body: `Poppins,${defaultTheme.fonts.body}`,
      heading: `Poppins,${defaultTheme.fonts.heading}`,
    },
    colors: {
      ...defaultTheme.colors,
      brand: {
        50: '#ffe5f1',
        100: '#ffcce4',
        200: '#ffb3d7',
        300: '#ff99ca',
        400: '#ff80bd',
        500: '#FF5CAA',
        600: '#ff4da3',
        700: '#ff3396',
        800: '#ff1a88',
        900: '#ff007b',
      },
      primary: '#b34093',
      secondary: '#ffd6f4',
      highlight: '#b9ff5c',
      success: '#82b340',
      default: 'white',
      white: '#ffffff',
      black: '#000000',
    },
  })
  
  export default theme
  