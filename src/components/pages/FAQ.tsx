import React, { useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';

import heroImage from '../../assets/faq-hero-img.png';

const FAQ: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu hero={heroImage} fallback={heroImage} heading='F.A.Q.' />
      <Stack>FAQ Goes Here</Stack>
    </Box>
  );
};

export default FAQ;
