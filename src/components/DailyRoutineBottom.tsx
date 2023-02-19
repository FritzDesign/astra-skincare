// @ts-nocheck
import * as React from 'react';
import { Stack, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

import placeholder from '../assets/astra-card-ph.png';
import { useInView } from 'framer-motion';

export const DailyRoutineBottom: React.FC = () => {
  const imageRef = React.useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: '0% 0% -20% 0%' });

  return (
    <Stack
      id='container'
      px={['0px', '0px', '0px', '128px']}
      py={['0px', '0px', '0px', '64px']}
      flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      justify={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'space-evenly'
      ]}
      align='center'
      overflow='hidden'
      // h={['1350px', '1400px', '1500px', '1800px', '1400px', '900px']}
      pos='relative'
      bgColor='white'
      mb='3rem'
    >
      <Stack
        justify={['center', 'center', 'center', 'flex-start']}
        align={['center', 'center', 'center', 'flex-start']}
        spacing='56px'
        width={['90%', '80%', '80%', '40%']}
        mt={['1rem', '1rem', '6rem']}
      >
        <Stack
          p='1rem 4rem 4rem 4rem'
          justify='flex-start'
          align='flex-start'
          spacing='5px'
          width='540px'
          maxWidth='100%'
        >
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Text
              fontFamily='Marcellus'
              lineHeight='1.4'
              fontWeight='regular'
              fontSize='32px'
              color='brand.Navy'
              pb='32px'
            >
              How to Get Started
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='flex-start'
            align='flex-start'
            spacing='10px'
            pb='3rem'
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.5'
              fontWeight='medium'
              fontSize='18px'
              color='UI.2'
              opacity='0.8'
              flex='1'
            >
              Knowing your skin type may be helpful for figuring out what
              products to add. Skin type is not an exact science, and your
              skin's behavior can change over time. You’ll figure out what your
              skin likes and dislikes as you start your skincare journey.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        clipPath={isInView ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)'}
        ref={imageRef}
        transition='clip-path 1s ease'
        pos='relative'
        align='center'
        justify='center'
        p='32px'
        w={['80%', '80%', '80%', '50%', '40%']}
      >
        <Image
          src={placeholder}
          w='100%'
          maxH='500px'
          objectFit='cover'
          border='1px solid black'
        />
        <Image
          src={placeholder}
          pos='absolute'
          top={['65%', '65%', '65%', '-10%', '-5%']}
          right={['10%', '10%', '10%', '15%']}
          borderRadius='50%'
          h={['120px', '160px', '160px', '120px', '204px']}
          w={['120px', '160px', '160px', '120px', '204px']}
          objectFit='cover'
        />
      </Stack>
    </Stack>
  );
};

export default DailyRoutineBottom;
