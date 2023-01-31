import * as React from 'react';
import { Stack, Image, Button } from '@chakra-ui/react';
import { GalleryCardProps } from '../../models/Props';

import placeholder from '../../assets/astra-card-ph.png';

export const GalleryCard: React.FC<GalleryCardProps> = ({ btnText }) => (
  <Stack property='Desktop' justify='flex-start' align='flex-start' px='1rem'>
    <Image h='320px' w='290px' src={placeholder} mb='1rem' />
    <Button
      _hover={{ bgColor: '#FFFFFF', opacity: 0.9 }}
      _active={{ transform: 'scale(0.98)', filter: 'brightness(1.1)' }}
      size='lg'
      variant='outline'
      colorScheme='brand.Black'
      w='100%'
    >
      {btnText}
    </Button>
  </Stack>
);
