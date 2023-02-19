import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandOutline = defineStyle({
  border: '1px solid',
  borderColor: 'brand.Charcoal',
  color: 'brand.Charcoal',
  borderRadius: '2px',
  fontFamily: 'Poppins',
  fontWeight: '400',
  py: '4px',
  px: '16px'
});

const brandSolid = defineStyle({
  border: '1px solid',
  borderColor: 'brand.Charcoal',
  color: 'brand.Cream',
  borderRadius: '2px',
  fontFamily: 'Poppins',
  fontWeight: '400',
  py: '4px',
  px: '16px'
});

export const badgeTheme = defineStyleConfig({
  variants: { brandOutline, brandSolid }
});
