//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Hero from '../Hero';
import ImageWithText from '../ImageWithText';
import Gallery4x1 from '../galleries/Gallery_4-by-1';

import heroImage from '../../assets/astra-hero.webp';
import imgWithText1 from '../../assets/image-with-text/astra-iwt-1.webp';
import TextWithIcons from '../TextWithIcons';
import ScaleableGallery from '../ScaleableGallery';
import Rewards from '../Rewards';
import DailyRoutine from '../DailyRoutine';

const Home: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Chakra.Box>
      <Hero
        bgColor='linear-gradient(91deg, #000000 0%, #00000000 100%)'
        bgImage={heroImage}
        heading='Unlock 24-7 Hydration with a New Clinically Proven Formula'
      />
      <Gallery4x1 />
      <DailyRoutine />
      <TextWithIcons />
      <ScaleableGallery
        title={"What's New"}
        collection='newest'
        length={5}
        link={{ text: 'SHOP ALL', navTo: 'skincare-products' }}
        id={1}
      />
      <ImageWithText
        heading='Build Your Ideal Skincare Routine'
        text="Whether you're dealing with stubborn acne, looking to minimize fine
        lines and wrinkles, or just wanting to upgrade your regimen, Astra has
        quality dermatologist trusted products you'll love. In just a few
        questions, we'll determine your skin type and find the right collection
        for you."
        image={imgWithText1}
      />
      <Rewards />
      <ScaleableGallery
        title={'On Sale Now'}
        collection='featured'
        length={10}
        link={{ text: 'SHOP ALL', navTo: 'skincare-products' }}
        id={2}
      />
    </Chakra.Box>
  );
};

export default Home;
