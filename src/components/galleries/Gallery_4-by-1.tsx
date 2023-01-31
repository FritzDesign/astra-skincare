import * as React from 'react';
import { Stack, Text, Image, Button } from '@chakra-ui/react';
import { GalleryCard } from './GalleryCard';

export const Gallery4x1: React.FC = () => (
  <Stack
    paddingX={['24px', '80px']}
    paddingY='64px'
    justify='flex-start'
    align='center'
    spacing={['24px', '56px']}
    overflow='hidden'
    background='brand.Cream'
    minH='621px'
  >
    <Text
      fontFamily='Marcellus'
      lineHeight='1.4'
      fontWeight='regular'
      fontSize='32px'
      color='#000000'
      textAlign='center'
    >
      Shop Customer Favorites
    </Text>
    <Stack
      direction={['column', 'column', 'row']}
      flexWrap='wrap'
      justify='center'
      align='start'
      spacing='16px'
    >
      <GalleryCard btnText='Anti-Aging' />
      <GalleryCard btnText='Acne Solutions' />
      <GalleryCard btnText='Moisturizers' />
      <GalleryCard btnText='Sun Protection' />
    </Stack>
  </Stack>
);
