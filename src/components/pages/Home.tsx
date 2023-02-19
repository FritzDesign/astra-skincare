//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import Hero from '../Hero';
import ImageWithText from '../ImageWithText';
import Gallery4x1 from '../galleries/Gallery_4-by-1';
import RichText from '../RichText';
import Gallery3x1 from '../galleries/Gallery_3-by-1';
import Announcement from '../Announcement';

import heroImage from '../../assets/astra-hero.jpg';
import imgWithText1 from '../../assets/image-with-text/astra-iwt-1.png';
import TextWithIcons from '../TextWithIcons';
import DailyRoutineTop from '../DailyRoutineTop';
import DailyRoutineBottom from '../DailyRoutineBottom';
import ScaleableGallery from '../ScaleableGallery';
import Rewards from '../Rewards';
import Footer from '../Footer';
import { Ankle } from '../Ankle';

const Home: React.FC = () => {
  return (
    <Chakra.Box>
      <Hero
        bgColor='linear-gradient(91deg, #000000 0%, #00000000 100%)'
        bgImage={heroImage}
        heading='Unlock 24-7 Hydration with a New Clinically Proven Formula'
      />
      <Gallery4x1 />
      <DailyRoutineTop />
      <DailyRoutineBottom />
      <TextWithIcons />
      <ScaleableGallery
        title={"What's New"}
        collection='newest'
        length={10}
        link={{ text: 'SHOP ALL', navTo: 'skincare-products' }}
      />
      <Rewards />
      <ImageWithText
        heading='Build Your Ideal Skincare Routine'
        text="Whether you're dealing with stubborn acne, looking to minimize fine
        lines and wrinkles, or just wanting to upgrade your regimen, Astra has
        quality dermatologist trusted products you'll love. In just a few
        questions, we'll determine your skin type and find the right collection
        for you."
        image={imgWithText1}
      />
    </Chakra.Box>
  );
};

export default Home;
