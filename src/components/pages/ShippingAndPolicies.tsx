import React, { useEffect } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';

import heroImage from '../../assets/faq-hero-img.png';

const ShippingAndPolicies: React.FC = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu
        hero={heroImage}
        fallback={heroImage}
        heading='Shipping & Policies'
      />
      <Stack
        justify='flex-start'
        align='center'
        spacing='72px'
        p={[
          '0rem 3rem 6rem 3rem',
          '0rem 2rem 6rem 2rem',
          '0rem 3rem 6rem 3rem',
          '2rem 4rem 6rem 4rem'
        ]}
      >
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['100%', '80%', '60%']}
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize={['28px', '32px', '40px']}
            textTransform='capitalize'
            color='UI.1'
          >
            Headline Line Item
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
          </Text>
          <Stack justify='flex-start' align='flex-start'>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='Brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='Brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
          </Stack>
        </Stack>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['100%', '80%', '60%']}
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize={['28px', '32px', '40px']}
            textTransform='capitalize'
            color='UI.1'
          >
            Headline Line Item
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat. Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.
            Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
            quam, gravida non, commodo a, sodales sit amet, nisi.
          </Text>
        </Stack>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['100%', '80%', '60%']}
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize={['28px', '32px', '40px']}
            textTransform='capitalize'
            color='UI.1'
          >
            Headline Line Item
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
          </Text>
          <Stack justify='flex-start' align='flex-start'>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='Brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='Brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['14px', '14px', '16px']}
              color='UI.2'
              maxWidth='100%'
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShippingAndPolicies;
