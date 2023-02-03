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
      // p='64px'
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
      overflow='hidden'
      align='center'
      h={['1350px', '1400px', '1500px', '1800px', '1400px', '900px']}
    >
      <Stack
        justify={['center', 'center', 'center', 'flex-start']}
        align={['center', 'center', 'center', 'flex-start']}
        spacing='56px'
        width={['90%', '80%', '80%', '40%']}
        mb='2rem'
      >
        <Stack justify='flex-start' align='flex-start' spacing='5px'>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Stack width='53px' height='55px'>
              <Stack
                borderRadius='24px'
                width='45px'
                height='45px'
                background='brand.Cream'
              />
            </Stack>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.4'
              fontWeight='regular'
              fontSize='32px'
              color='brand.Navy'
            >
              Cleanser
            </Text>
          </Stack>
          <Stack
            paddingStart='88px'
            direction='row'
            justify='flex-start'
            align='flex-start'
            spacing='10px'
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.5'
              fontWeight='medium'
              fontSize={['14px', '16px', '18px']}
              color='UI.2'
              opacity='0.8'
              // width='408px'
              maxWidth='100%'
            >
              Cleansers come before everything else - they remove dirt, sweat,
              sebum, and leftover product, keeping the skin clean and preparing
              it for subsequent products.
            </Text>
          </Stack>
        </Stack>
        <Stack
          paddingStart='88px'
          justify='flex-start'
          align='flex-start'
          spacing='5px'
          // width='559px'
          maxWidth='100%'
        >
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Stack width='53px' height='55px'>
              <Stack
                borderRadius='24px'
                width='45px'
                height='45px'
                background='brand.Cream'
              />
            </Stack>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.4'
              fontWeight='regular'
              fontSize='32px'
              color='brand.Navy'
            >
              Actives
            </Text>
          </Stack>
          <Stack
            paddingStart='88px'
            direction='row'
            justify='flex-start'
            align='flex-start'
            spacing='10px'
            // width='438px'
            maxWidth='100%'
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.5'
              fontWeight='medium'
              fontSize={['14px', '16px', '18px']}
              color='UI.2'
              opacity='0.8'
              flex='1'
            >
              ‘Actives’ refers to specific ingredients that affect the skin such
              as BHAs, benzoyl peroxide, and retinol. Applying actives to clean,
              dry skin is the best method.
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='flex-start' spacing='5px'>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Stack width='53px' height='55px'>
              <Stack
                borderRadius='24px'
                width='45px'
                height='45px'
                background='brand.Cream'
              />
            </Stack>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.4'
              fontWeight='regular'
              fontSize='32px'
              color='brand.Navy'
            >
              Everything Else
            </Text>
          </Stack>
          <Stack
            paddingStart='88px'
            direction='row'
            justify='flex-start'
            align='flex-start'
            spacing='10px'
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.5'
              fontWeight='medium'
              fontSize={['14px', '16px', '18px']}
              color='UI.2'
              opacity='0.8'
              // width='408px'
              maxWidth='100%'
            >
              Everything else covers, well, everything else! These are the
              products that don't contain targeted ingredients, and this will
              likely make up the bulk of your routine. Toners, serums, ampoules,
              essences, lotions, or creams - it all goes here.{' '}
            </Text>
          </Stack>
        </Stack>
        <Stack
          paddingStart='88px'
          justify='flex-start'
          align='flex-start'
          spacing='5px'
          width='559px'
          maxWidth='100%'
        >
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='32px'
          >
            <Stack width='53px' height='55px'>
              <Stack
                borderRadius='24px'
                width='45px'
                height='45px'
                background='brand.Cream'
              />
            </Stack>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.4'
              fontWeight='regular'
              fontSize='32px'
              color='brand.Navy'
            >
              Sunscreens
            </Text>
          </Stack>
          <Stack
            paddingStart='88px'
            direction='row'
            justify='flex-start'
            align='flex-start'
            spacing='10px'
            // width='150%'
            // maxWidth='120%'
          >
            <Text
              fontFamily='Inter'
              lineHeight='1.5'
              fontWeight='medium'
              fontSize={['14px', '16px', '18px']}
              color='UI.2'
              opacity='0.8'
              flex='1'
            >
              This is really the only hard rule for routine order: Sunscreen
              comes last in your skincare routine. It works by forming a thick,
              even layer over the skin - you don't want to disrupt this layer
              too much with subsequent products.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        clipPath={isInView ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)'}
        ref={imageRef}
        transition='clip-path 1s ease'
        pos='relative'
        alignItems='center'
        justifyContent='center'
        p='32px'
        w={['80%', '80%', '80%', '50%', '40%']}
        // h='91%'
      >
        <Image
          src={placeholder}
          w='100%'
          h={['80%', '80%', '60%', '100%']}
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
