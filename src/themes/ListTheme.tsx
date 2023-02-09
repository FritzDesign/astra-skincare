import {
  defineStyle,
  createMultiStyleConfigHelpers
} from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    listStylePos: 'inside', // change listStylePos to inside
    spacing: '8px',
    pos: 'relative'
  },
  item: {
    p: 2,
    '&::marker': {
      // change color for marker
      fontSize: '12px',
    }
  }
});

export const listTheme = defineMultiStyleConfig({ baseStyle });
