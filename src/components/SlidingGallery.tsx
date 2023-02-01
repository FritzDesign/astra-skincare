import { Stack, Text, Icon } from '@chakra-ui/react';
import FMC_Component from '../animations/defaults';
import { AnimatePresence } from 'framer-motion';
import { BsEmojiHeartEyes, BsBoxSeam } from 'react-icons/bs';
import { MdOutlineCrueltyFree, MdOutlineWaterDrop } from 'react-icons/md';
import { useEffect, useState } from 'react';

interface GallerySlideProps {
  delay: number;
  animationProperties: {
    startPoint: number;
    endPoint: number;
    duration: number;
  };
}

const GallerySlide: React.FC<GallerySlideProps> = ({
  delay,
  animationProperties
}) => {
  if (animationProperties.duration) {
    return (
      <FMC_Component
        display='flex'
        initial={{
          transform: `translateX(${animationProperties.startPoint}px)`
        }}
        animate={{ transform: `translateX(${animationProperties.endPoint}px)` }}
        exit={{ transform: `translateX(${animationProperties.startPoint}px)` }}
        // @ts-ignore
        transition={{
          duration: animationProperties.duration,
          delay: delay,
          ease: 'linear',
          repeat: Infinity
        }}
        h='148px'
        mt='56px !important'
        // left={animation.startPoint + 'px'}
        // align='flex-start'
        // spacing='104px'
        pos='absolute'
      >
        <Stack mx='2rem' w='152px' justify='center' align='center'>
          <Stack
            padding='14px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon
              as={MdOutlineWaterDrop}
              h='20px'
              w='20px'
              color='brand.Cream'
            />
          </Stack>
          <Text
            fontFamily='Poppins'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            INNOVATIVE INGREDIENTS
          </Text>
        </Stack>
        <Stack mx='2rem' w='152px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            DERMATOLOGIST TRUSTED
          </Text>
        </Stack>
        <Stack mx='2rem' w='152px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={BsBoxSeam} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            ECO-CONCIOUS PACKAGING
          </Text>
        </Stack>
        <Stack mx='2rem' w='152px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            CRUELTY FREE ALWAYS
          </Text>
        </Stack>
      </FMC_Component>
    );
  } else {
    return (
      <Stack
        direction={['column', 'column', 'row']}
        justify='center'
        align='center'
        spacing='32px'
      >
        <Stack w='200px' justify='center' align='center'>
          <Stack
            padding='14px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon
              as={MdOutlineWaterDrop}
              h='20px'
              w='20px'
              color='brand.Cream'
            />
          </Stack>
          <Text
            fontFamily='Poppins'
            mx='8px'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            INNOVATIVE INGREDIENTS
          </Text>
        </Stack>
        <Stack w='200px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            mx='8px'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            DERMATOLOGIST TRUSTED
          </Text>
        </Stack>
        <Stack w='200px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={BsBoxSeam} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            mx='8px'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            ECO-CONCIOUS PACKAGING
          </Text>
        </Stack>
        <Stack w='200px' justify='center' align='center'>
          <Stack
            padding='16px'
            borderRadius='64px'
            direction='row'
            justify='center'
            align='center'
            spacing='10px'
            w='50px'
            borderColor='brand.Peri'
            mb='3rem'
            borderStartWidth='1px'
            borderEndWidth='1px'
            borderTopWidth='1px'
            borderBottomWidth='1px'
          >
            <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
          </Stack>
          <Text
            fontFamily='Poppins'
            mx='8px'
            fontWeight='bold'
            fontSize='14px'
            letterSpacing='0.24em'
            color='brand.Mint'
            textAlign='center'
          >
            CRUELTY FREE ALWAYS
          </Text>
        </Stack>
      </Stack>
    );
  }
};

export default GallerySlide;
