import * as React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { HeroProps } from '../models/Props';
import FMC_Component from '../animations/defaults';
import { useInView } from 'framer-motion';

const Hero: React.FC<HeroProps> = ({ bgColor, bgImage, heading }) => {
  const heroImage = React.useRef(null);
  const isInView = useInView(heroImage, {
    margin: '-50% 0% 0% 0%'
  });
  const navigate = useNavigate();

  return (
    <Stack
      as={FMC_Component}
      ref={heroImage}
      justify='center'
      align='flex-start'
      spacing='10px'
      h={['360px', '360px', '480px', '480px', '480px', '540px']}
      overflow='hidden'
      bg={bgColor}
    >
      <Image
        src={bgImage}
        h='100%'
        w='100%'
        bgColor={bgColor}
        objectFit='cover'
        objectPosition='center center'
        zIndex={-1}
      />
      <Stack
        paddingX={['40px', '80px']}
        justify={['center', 'flex-start']}
        align={['center', 'flex-start']}
        spacing='32px'
        width={['400px', '400px', '698px']}
        maxWidth='100%'
        boxShadow='Shadow/XL'
        pos='absolute'
      >
        <FMC_Component
          animate={
            isInView
              ? {
                  transform: ['translateX(-400px)', 'translateX(0px)']
                }
              : { transform: ['translateX(0px)', 'translateX(-400px)'] }
          }
          //@ts-ignore
          transition={{ duration: 0.5 }}
          transform='translateX(-400px)'
          fontFamily='Inter'
          lineHeight='1.2'
          fontWeight='bold'
          fontSize={['12px', '12px', '16px']}
          letterSpacing='0.1em'
          textTransform='uppercase'
          color='brand.Mint'
          alignSelf='stretch'
          pointerEvents='none'
          textAlign={['center', 'left']}
          textShadow='0px 0px 2px black'
        >
          NEW ASTRA SKIN CARE DROP
        </FMC_Component>
        <FMC_Component
          initial={{
            transform: 'translateX(-400px)'
          }}
          animate={
            isInView
              ? {
                  transform: ['translateX(-800px)', 'translateX(0px)']
                }
              : { transform: ['translateX(0px)', 'translateX(-800px)'] }
          }
          //@ts-ignore
          transition={{ duration: 0.75 }}
          transform='translateX(-800px)'
          fontFamily='Marcellus'
          lineHeight='1'
          fontWeight='regular'
          fontSize={['32px', '32px', '56px']}
          color='#FFFFFF'
          alignSelf='stretch'
          pointerEvents='none'
          textAlign={['center', 'left']}
          textShadow='0px 0px 2px black'
        >
          {heading}
        </FMC_Component>
        <FMC_Component
          _hover={{ filter: 'brightness(1.1)' }}
          cursor='pointer'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          //@ts-ignore
          transition={{ delay: 0.5, duration: 0.5 }}
          _active={{ transform: 'scale(0.98)' }}
          mt='32px'
          p={['6px 18px', '6px 18px', '10.5px 24px']}
          borderRadius='.375rem'
          size='lg'
          fontWeight={['500', '600']}
          bgColor='brand.Cream'
          color='UI.1'
          outline='2px solid transparent'
          fontSize={['1rem', '1rem', '1.125rem']}
          onClick={() => navigate('/products')}
        >
          Shop Now
        </FMC_Component>
      </Stack>
    </Stack>
  );
};

export default Hero;
