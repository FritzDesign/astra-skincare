import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    boxShadow: '0px 2px 4px #B3AFAB',
    borderRadius: '0',
    py: '4',
    px: '26px',
    border: 'none',
    bg: 'brand.Cream'
  },
  item: {
    color: 'brand.Black',
    bg: 'transparent',
    mx: '16px',
    fontFamily: 'Poppins',
    _hover: {
      textDecor: 'underline',
    }
  },
  divider: {
    my: '20px',
    w: '100%',
    borderColor: 'UI.4',
    borderBottom: '2px solid'
  }
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
