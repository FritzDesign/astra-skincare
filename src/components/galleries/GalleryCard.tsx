import * as React from 'react';
import { Stack, Image, Button, Box } from '@chakra-ui/react';
import { GalleryCardProps } from '../../models/Props';

export const GalleryCard: React.FC<GalleryCardProps> = ({ btnText, image }) => (
  <Stack h={['272px', '392px']} m='16px !important'>
    <Box borderColor='brand.Black' border={['1px solid', 'none']} mb='24px'>
      <Image
        h={['200px', '320px']}
        w={['327px', '290px']}
        src={image}
        objectFit='cover'
      />
    </Box>
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
