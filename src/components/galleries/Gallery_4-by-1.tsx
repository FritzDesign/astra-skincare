import * as React from 'react';
import { Stack, Text, Grid } from '@chakra-ui/react';
import { GalleryCard } from './GalleryCard';
import card1 from '../../assets/Cards/Card1.webp';
import card2 from '../../assets/Cards/Card2.webp';
import card3 from '../../assets/Cards/Card3.webp';
import card4 from '../../assets/Cards/Card4.webp';
import { useInView } from 'framer-motion';
import FMC_Component from '../../animations/defaults';

const Gallery4x1: React.FC = () => {
  const container = React.useRef(null);
  const cardRef = React.useRef(null);
  const isInView = useInView(container, {
    once: true
  });

  return (
    <Stack
      paddingX={['40px', '40px', '80px', '80px', '120px', '240px']}
      paddingY='64px'
      justify='flex-start'
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
        id='customer-favorites-gallery'
        as={FMC_Component}
        templateColumns='repeat(4, 1fr)'
        gap='1rem'
        justifyItems='center'
        overflowX='auto'
        pb='1rem'
        initial={{ opacity: 0 }}
        animate={
          isInView && {
            opacity: [0, 0.25, 0.5, 0.75, 1]
          }
        }
        ref={cardRef}
      >
        <GalleryCard image={card1} btnText='Cleansers' />
        <GalleryCard image={card2} btnText='Exfoliants' />
        <GalleryCard image={card3} btnText='Moisturizers' />
        <GalleryCard image={card4} btnText='Beauty Tools' />
      </Grid>
    </Stack>
  );
};

export default Gallery4x1;
