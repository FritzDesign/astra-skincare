// @ts-nocheck
import * as React from 'react';
import { Stack, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

import placeholder from '../assets/astra-card-ph.png';

export const DailyRoutineTop: React.FC = () => {
  return (
    <Stack
      id='container'
      p='64px'
      flexDir={['column', 'column', 'column', 'row']}
      justify={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'space-evenly'
      ]}
      align='center'
      h={['1250px', '1300px', '1400px', '650px']}
    >
      <Stack
        pos='relative'
        alignItems='center'
        w={['100%', '100%', '100%', '50%']}
        h={['80%', '80%', '80%', '80%', '100%']}
      >
        <Image
          src={placeholder}
          w={['100%', '100%', '100%', '75%']}
          h={['80%', '80%']}
          objectFit='cover'
          border='1px solid black'
        />
        <Image
          src={placeholder}
          pos='absolute'
          bottom={['8%', '6%', '10%', '0%']}
          right={['10%', '10%', '10%', '15%']}
          borderRadius='50%'
          h={['120px', '160px', '200px', '160px', '204px']}
          w={['120px', '160px', '200px', '160px', '204px']}
          objectFit='cover'
        />
      </Stack>
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='32px'
        width={['90%', '90%', '90%', '50%']}
        h='100%'
        // p='56px'
        pt={['0px', '0px', '0px', '56px']}
        maxWidth='100%'
      >
        <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize={['32px', '40px']}
            textTransform='capitalize'
            color='UI.1'
            mt='1rem'
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

export default DailyRoutineTop;
