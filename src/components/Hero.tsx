import * as React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { HeroProps } from '../models/Props';
import FMC_Component from '../animations/defaults';
import { AnimatePresence } from 'framer-motion';

const Hero: React.FC<HeroProps> = ({ bgColor, bgImage, heading }) => {
  const navigate = useNavigate();

  return (
    <Stack
      as={FMC_Component}
      paddingX='80px'
      justify='center'
      align='flex-start'
      spacing='10px'
      overflow='hidden'
      h={['500px', '700px', '900px']}
      objectFit='cover'
      bg={`${bgColor}, url(${bgImage})`}
    >
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='32px'
        width='698px'
        maxWidth='100%'
        boxShadow='Shadow/XL'
      >
        <FMC_Component
          animate={{
            transform: ['translateX(-400px)', 'translateX(0px)']
          }}
          //@ts-ignore
          transition={{ delay: 0.25, duration: 0.75 }}
          fontFamily='Inter'
          lineHeight='1.2'
          fontWeight='bold'
          fontSize='16px'
          letterSpacing='0.1em'
          textTransform='uppercase'
          color='brand.Mint'
          alignSelf='stretch'
          pointerEvents='none'
        >
          NEW ASTRA SKIN CARE DROP
        </FMC_Component>
        <FMC_Component
          animate={{
            transform: ['translateX(-800px)', 'translateX(0px)']
          }}
          //@ts-ignore
          transition={{ delay: 1, duration: 1 }}
          fontFamily='Marcellus'
          lineHeight='1'
          fontWeight='regular'
          fontSize={['32px', '48px', '64px']}
          color='#FFFFFF'
          alignSelf='stretch'
          pointerEvents='none'
        >
          {heading}
        </FMC_Component>

        <FMC_Component
          _hover={{ filter: 'brightness(1.1)' }}
          cursor='pointer'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          //@ts-ignore
          transition={{ delay: 2, duration: 1 }}
          _active={{ transform: 'scale(0.98)' }}
          mt='32px'
          p='10.5px 24px'
          borderRadius='.375rem'
          size='lg'
          fontWeight='600'
          bgColor='brand.Cream'
          color='UI.1'
          outline='2px solid transparent'
          fontSize='1.125rem'
          onClick={() => navigate('/products')}
        >
          Shop Now
        </FMC_Component>
      </Stack>
    </Stack>
  );
};

export default Hero;
