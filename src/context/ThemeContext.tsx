import { extendTheme } from '@chakra-ui/react';
import { accordionTheme } from '../themes/AccordionTheme';
import { listTheme } from '../themes/ListTheme';
import { menuTheme } from '../themes/MenuTheme';

const theme = extendTheme({
  components: {
    Menu: menuTheme,
    List: listTheme,
    Accordion: accordionTheme
  },
  colors: {
    brand: {
      Peri: '#8897AA',
      Navy: '#313C4E',
      Plum: '#313C4E',
      Cream: '#F7F2EE',
      Tan: '#C4B1A8',
      Mint: '#8EC2B9',
      Lavender: '#8897AA',
      Black: '#2C2C2C',
      Charcoal: '#2C2C2C'
    },
    UI: {
      1: '#4D4B49',
      2: '#807D7A',
      3: '#B3AFAB',
      4: '#E6E0DC',
      5: '#F7F2EE',
      6: '#FFFFFF'
    }
  },
  fonts: {
    Heading: 'Marcellus',
    Body: 'Poppins',
    Alt: 'Inter'
  }
});

export default theme;
