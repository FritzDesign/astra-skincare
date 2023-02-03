//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import Hero from '../Hero';
import ImageWithText from '../ImageWithText';
import { Gallery4x1 } from '../galleries/Gallery_4-by-1';
import RichText from '../RichText';
import Gallery3x1 from '../galleries/Gallery_3-by-1';
import Announcement from '../Announcement';

import heroImage from '../../assets/astra-hero.jpg';
import imgWithText1 from '../../assets/image-with-text/astra-iwt-1.png';
import TextWithIcons from '../TextWithIcons';
import DailyRoutineTop from '../DailyRoutineTop';
import DailyRoutineBottom from '../DailyRoutineBottom';
import WhatsNew from '../WhatsNew';
import Rewards from '../Rewards';

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
      <WhatsNew />
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
      {/* <RichText
        heading="The relaxation you've been waiting for"
        text="Settle in for a good soak with an original BathBombs invention, exploding with essential oils and tons of fizzy fun. Whether you're after a relaxing, petal-laden floral soak or an invigorating multilayered explosion of color and scent, there's a handmade bath bomb perfect for every bathing experience."
      />
      <Gallery3x1 />
      <RichText
        heading="There's no angry way to say bubbles"
        text="We're here to spread more joy by offering you a range of little delights to add to your daily ritual."
        textColor={accentColor1}
        bgColor={themeColor1}
      />
      <ImageWithText
        heading='Relax'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
      />
      <ImageWithText
        reverse={true}
        heading='Unwind'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758'
      /> */}
    </Chakra.Box>
  );
};

export default Home;
