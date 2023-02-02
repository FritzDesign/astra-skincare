// @ts-nocheck
import * as React from 'react';
import { Stack, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

import overlayImg from '../assets/image-with-text/astra-iwt-overlay.png';
import watermarkTR from '../assets/image-with-text/astra-wm-topright.png';
import watermarkBL from '../assets/image-with-text/astra-wm-bottomleft.png';
import placeholder from '../assets/astra-card-ph.png';

export const DailyRoutine: React.FC = () => {
  return (
    <Stack
      id='container'
      my='120px'
      mx={['60px', '60px', '60px', '60px', '120px']}
      flexDir={['column', 'column', 'column', 'row']}
      justify={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'space-evenly'
      ]}
      align='center'
      h={['1200px', '1050px', '1050px', '650px']}
    >
      <Stack
        pos='relative'
        alignItems='center'
        w={['90%', '90%', '90%', '50%']}
        h='100%'
      >
        <Image
          src={placeholder}
          w={['90%', '90%', '90%', '75%']}
          h='65%'
          objectFit='cover'
          border='1px solid black'
        />
        <Image
          src={placeholder}
          pos='absolute'
          bottom='145px'
          right='50px'
          borderRadius='50%'
          h='204px'
          w='204px'
          objectFit='cover'
        />
      </Stack>
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='32px'
        width={['90%', '90%', '90%', '50%']}
        h='100%'
        p='56px'
        pt={['0px', '0px', '0px', '56px']}
        maxWidth='100%'
      >
        <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='40px'
            textTransform='capitalize'
            color='UI.1'
            alignSelf='stretch'
          >
            build a daily routine
          </Text>
        </Stack>
        <Text
          fontFamily='Poppins'
          lineHeight='1.5'
          fontWeight='regular'
          fontSize='18px'
          color='UI.2'
          opacity='0.8'
          alignSelf='stretch'
        >
          It might be very tempting to rush into expanding your routine. Maybe
          you'll hope that adding more products will help improve your skin
          quicker. But make sure the foundation of your routine is strong before
          moving on to any targeted treatments!
        </Text>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          alignSelf='stretch'
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Inter'
              lineHeight='1.2'
              fontWeight='bold'
              fontSize='16px'
              letterSpacing='0.1em'
              textTransform='uppercase'
              color='brand.Lavender'
              alignSelf='stretch'
            >
              how do i get started?
            </Text>
          </Stack>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='18px'
            color='UI.2'
            opacity='0.8'
            alignSelf='stretch'
          >
            Knowing your skin type may be helpful for figuring out what products
            to add. Skin type is not an exact science, and your skin's behavior
            can change over time. You'll figure out what your skin likes and
            dislikes as you start your skincare journey.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DailyRoutine;
