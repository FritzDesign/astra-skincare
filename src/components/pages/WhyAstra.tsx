import { Box, Stack, Image, Text, Icon } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useEffect } from 'react';
import { IoMdQuote } from 'react-icons/io';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';
import bethSmith from '../../assets/beth-smith.png';

const WhyAstra: React.FC = () => {
  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }, []);

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroFb}
        heading='Why Astra'
        showMenuBar={false}
      />

      <Stack
        paddingX={['2rem', '3rem', '166px']}
        direction={['column', 'row']}
        justify='center'
        align='center'
        spacing='102px'
        my='88px'
      >
        <Stack
          pos='relative'
          borderColor='UI.1'
          borderStartWidth='2px'
          borderEndWidth='2px'
          borderTopWidth='2px'
          borderBottomWidth='2px'
          width={['280px', '322px']}
          height={['280px', '322px']}
          maxWidth='100%'
        >
          <Image src={bethSmith} />
          <Icon
            as={IoMdQuote}
            pos='absolute'
            left='-20%'
            color='brand.Lavender'
            transform='rotate(180deg)'
            fontSize='96px'
          />
        </Stack>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          width='612px'
          maxWidth='100%'
          paddingX={['2rem', '3rem', '166px']}
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
              FROM THE OWNER
            </Text>
          </Stack>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='24px'
            color='UI.1'
            opacity='0.8'
            alignSelf='stretch'
          >
            Loving your skin is an act of self-love, whatever that looks like
            for you and how good you feel about it. It is personal and unique to
            each person.”
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.1'
            opacity='0.8'
            alignSelf='stretch'
          >
            Beth Smith, Founder and Liscensed Skincare Therapist
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WhyAstra;
