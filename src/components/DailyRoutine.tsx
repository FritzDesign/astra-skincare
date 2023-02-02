// @ts-nocheck
import * as React from 'react';
import { Stack, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

import overlayImg from '../assets/image-with-text/astra-iwt-overlay.png';
import watermarkTR from '../assets/image-with-text/astra-wm-topright.png';
import watermarkBL from '../assets/image-with-text/astra-wm-bottomleft.png';
import placeholder from '../../assets/astra-card-ph.png';

export const DailyRoutine: React.FC = () => (
  <Stack
    direction={['column', 'column', 'column', 'column', 'row']}
    justify='space-evenly'
    align='center'
    pos='relative'
    p='4rem'
    overflow='hidden'
  >
    <Image src={watermarkTR} pos='absolute' top='0px' right='-24px' />
    <Image
      src={watermarkBL}
      pos='absolute'
      bottom={['-24px', '0px']}
      left={['0px', '-119px']}
      zIndex={-1}
    />
    <Stack
      alignItems={['flex-start', 'center']}
      maxWidth='100%'
      justify='center'
      pos='relative'
      mt='40px'
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        width={['270.4px', '494px']}
        height={['341px', '623px']}
        maxWidth='100%'
        zIndex={2}
        pos='relative'
        mb={['32px', '120px']}
      >
        <Image src={image} />
        <Stack
          borderRadius='50%'
          width={['120px', '220px']}
          height={['120px', '220px']}
          maxWidth='100%'
          boxShadow='lg'
          right={['-40px', '-40px']}
          bottom={['16px', '60px']}
          zIndex='10'
          pos='absolute'
        >
          <Image
            src={overlayImg}
            p='0'
            w={['131.3px', '240px']}
            h={['131.3px', '240px']}
            pos='absolute'
            objectPosition='center center'
            objectFit='cover'
          />
        </Stack>
      </Stack>
    </Stack>
    <Stack
      justify='flex-start'
      align='flex-start'
      spacing='32px'
      width='493px'
      maxWidth='100%'
    >
      <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
        <Text
          fontFamily='Inter'
          lineHeight='1.2'
          fontWeight='bold'
          fontSize='16px'
          letterSpacing='0.1em'
          textTransform='uppercase'
          color='brand.Peri'
          alignSelf='stretch'
          zIndex={2}
        >
          SKIN QUIZ
        </Text>
        <Text
          fontFamily='Marcellus'
          lineHeight='1.4'
          fontWeight='regular'
          fontSize='32px'
          color='brand.Black'
          alignSelf='stretch'
          zIndex={2}
        >
          {heading}
        </Text>
      </Stack>
      <Text
        fontFamily='Inter'
        lineHeight='1.5'
        fontWeight={['semibold', 'medium']}
        fontSize='18px'
        color='brand.Plum'
        opacity='0.8'
        alignSelf='stretch'
        zIndex={2}
      >
        {text}
      </Text>
      <Button
        _hover={{ opacity: 0.9 }}
        _active={{ transform: 'scale(0.98)' }}
        size='lg'
        fontSize='16px'
        color='brand.Cream'
        fontWeight='400'
        bgColor='brand.Black'
        zIndex={2}
        fontFamily='Poppins'
      >
        Find Solutions
      </Button>
    </Stack>
  </Stack>
);

export default DailyRoutine;
