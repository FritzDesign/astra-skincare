import * as React from 'react';
import { Stack, Text, Image, Button, Grid } from '@chakra-ui/react';
import { GalleryCard } from './GalleryCard';
import card1 from '../../assets/Cards/Card1.png';
import card2 from '../../assets/Cards/Card2.png';
import card3 from '../../assets/Cards/Card3.png';
import card4 from '../../assets/Cards/Card4.png';
import { AnimatePresence, MotionConfig, useInView } from 'framer-motion';
import FMC_Component from '../../animations/defaults';

const Gallery4x1: React.FC = () => {
  const container = React.useRef(null);
  const cardRef = React.useRef(null);
  const isInView = useInView(container, {
    // @ts-ignore
    // once: true,
    margin: '0% 0% -25% 0%'
  });

  return (
    <Stack
      paddingX={['24px', '80px']}
      paddingY='64px'
      justify='flex-start'
      align='center'
      spacing={['24px', '56px']}
      overflow='hidden'
      background='brand.Cream'
      minH='621px'
      ref={container}
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
      <Grid
        as={FMC_Component}
        templateColumns={[
          'repeat(1, 4fr)',
          'repeat(1, 4fr)',
          'repeat(2, 2fr)',
          'repeat(2, 2fr)',
          'repeat(4, 1fr)',
          'repeat(4, 1fr)'
        ]}
        initial={{ opacity: 0 }}
        animate={
          isInView && {
            opacity: [0.25, 0.5, 0.75, 1]
          }
        }
        ref={cardRef}
      >
        <GalleryCard image={card1} btnText='Anti-Aging' />
        <GalleryCard image={card2} btnText='Acne Solutions' />
        <GalleryCard image={card3} btnText='Moisturizers' />
        <GalleryCard image={card4} btnText='Sun Protection' />
      </Grid>
    </Stack>
  );
};

export default Gallery4x1;
