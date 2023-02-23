import React from 'react';
import { Stack, Text, Button, Image, Box, Flex } from '@chakra-ui/react';
import { useInView } from 'framer-motion';

import watermarkTop from '../assets/Lifestyle/daily-routine-watermark-top.png';
import watermarkBottom from '../assets/Lifestyle/daily-routine-watermark-bottom.png';
import lgImgTop from '../assets/Lifestyle/daily-routine-top-image-lg.jpg';
import smImgTop from '../assets/Lifestyle/daily-routine-top-image-sm.jpg';
import lgImgBot from '../assets/Lifestyle/daily-routine-bottom-image-lg.jpg';
import smImgBot from '../assets/Lifestyle/daily-routine-bottom-image-sm.jpg';

const DailyRoutine: React.FC = () => {
  const imageRefTop = React.useRef(null);
  const imageRefBot = React.useRef(null);
  const isInViewTop = useInView(imageRefTop, {
    once: true,
    margin: '0% 0% -30% 0%'
  });
  const isInViewBot = useInView(imageRefBot, {
    once: true,
    margin: '0% 0% -30% 0%'
  });

  return (
    <Stack
      pos='relative'
      paddingX={['40px', '40px', '80px', '80px', '120px', '240px']}
      mb={['3rem', '3rem', '5rem']}
    >
      <Image pos='absolute' top='0' right='0' src={watermarkTop} zIndex={-1} />
      <Image pos='absolute' bottom='-5rem' left='0' src={watermarkBottom} zIndex={-1} />
      <Stack
        id='container-top'
        // px={['1.5rem', '0px', '0px', '128px']}
        pb={['0px', '0px', '0px', '64px']}
        pt={['2rem', '2rem', '3rem', '7.5rem']}
        flexDir={['column', 'column', 'column', 'row']}
        justify={[
          'space-between',
          'space-between',
          'space-between',
          'space-evenly',
          'space-evenly'
        ]}
        align='center'
      >
        <Stack
          clipPath={isInViewTop ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'}
          ref={imageRefTop}
          transition='clip-path 1s ease'
          pos='relative'
          alignItems='center'
          py={['32px', '32px', '64px']}
          pr={['16px', '16px', '32px']}
          pl='0px'
          w={['300px', '500px', '600px', '800px']}
          h={['80%', '80%', '80%', '80%', '100%']}
        >
          <Image
            src={lgImgTop}
            w='100%'
            maxH='400px'
            objectPosition='top center'
            objectFit='cover'
            border='1px solid black'
          />
          <Image
            src={smImgTop}
            pos='absolute'
            bottom='0%'
            right='0%'
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
          w={['300px', '500px', '600px', '800px']}
          h='100%'
          pl={['0rem', '0rem', '0rem', '5rem']}
          pt={['0px', '0px', '0px', '56px']}
          maxWidth='100%'
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize={['32px', '40px']}
              color='UI.1'
              mt='1rem'
              alignSelf='stretch'
              textAlign={['center', 'center', 'center', 'left']}
            >
              Build A Daily Routine
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
            w='100%'
            textAlign={['center', 'center', 'center', 'left']}
          >
            It might be very tempting to rush into expanding your routine. Maybe
            you'll hope that adding more products will help improve your skin
            quicker. But make sure the foundation of your routine is strong
            before moving on to any targeted treatments!
          </Text>
        </Stack>
      </Stack>
      <Stack
        id='container-bot'
        pb={['0px', '0px', '0px', '64px']}
        pt='1rem'
        flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        justify={[
          'space-between',
          'space-between',
          'space-between',
          'space-evenly',
          'space-evenly'
        ]}
        align='center'
      >
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['300px', '500px', '600px', '800px']}
          h='100%'
          maxWidth='100%'
          pr={['0rem', '0rem', '0rem', '5rem']}
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize={['32px', '40px']}
              color='UI.1'
              mt='1rem'
              alignSelf='stretch'
              textAlign={['center', 'center', 'center', 'left']}
            >
              How to Get Started
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
            px={['1rem', '1rem', '0px']}
            w='100%'
            textAlign={['center', 'center', 'center', 'left']}
          >
            Knowing your skin type may be helpful for figuring out what products
            to add. Skin type is not an exact science, and your skin's behavior
            can change over time. You’ll figure out what your skin likes and
            dislikes as you start your skincare journey.
          </Text>
        </Stack>
        <Stack
          clipPath={isInViewBot ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'}
          ref={imageRefBot}
          transition='clip-path 1s ease'
          pos='relative'
          alignItems='center'
          pt={['32px', '32px', '64px']}
          pl={['0px', '0px', '0px', '32px']}
          pr='0px'
          w={['300px', '472px', '600px', '800px']}
          h={['80%', '80%', '80%', '80%', '100%']}
        >
          <Image
            src={lgImgBot}
            w='100%'
            minH='320px'
            maxH='400px'
            objectPosition='top center'
            objectFit='cover'
            border='1px solid black'
          />
          <Image
            src={smImgBot}
            pos='absolute'
            top='0%'
            right='10%'
            borderRadius='50%'
            h={['120px', '160px', '160px', '120px', '204px']}
            w={['120px', '160px', '160px', '120px', '204px']}
            objectFit='cover'
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DailyRoutine;
