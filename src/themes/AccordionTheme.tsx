import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  root: {
    w: '100%'
  },
  container: {
    border: 'none'
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Poppins',
    pt: '2rem',
    pb: '1.5rem'
  },
  panel: {
    fontFamily: 'Poppins',
    px: '1rem'
  }
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
