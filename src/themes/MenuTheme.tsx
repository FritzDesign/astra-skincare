import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  // button: {
  //   // this will style the MenuButton component
  //   fontWeight: 'medium',
  //   bg: 'teal.500',
  //   color: 'gray.200',
  //   _hover: {
  //     bg: 'teal.600',
  //     color: 'white',
  //   },
  // },
  list: {
    // this will style the MenuList component
    boxShadow: '0px 2px 4px #B3AFAB',
    borderRadius: '0',
    py: '4',
    px: '26px',
    border: 'none',
    bg: 'brand.Cream'
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
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
