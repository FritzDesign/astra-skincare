import React, { useEffect } from 'react';
import {
  Box,
  Divider,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';

import heroImage from '../../assets/faq-hero-img.png';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu hero={heroImage} fallback={heroImage} heading='Disclaimer' />
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
            Disclaimer
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            This website is being used for demonstration purposes only and is not
            intended for commercial or personal use. Any information provided on
            this website is for demonstration purposes only and is not intended
            to be relied upon for any purpose, including, but not limited to,
            medical or legal advice. The content on this website may not be
            up-to-date or accurate, and we do not guarantee the completeness or
            accuracy of any information provided on this website. We are not
            responsible for any damages or losses arising from the use or
            inability to use this website.  
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            The information provided on the ASTRA skincare website is for
            educational and informational purposes only. It is not intended to
            diagnose, treat, or prevent any skin condition or disease. Please
            consult with a licensed healthcare professional or dermatologist for
            any medical concerns or questions you may have about your skin.
            Results may vary based on individual factors such as skin type,
            lifestyle, and environmental factors. ASTRA skincare products are
            not intended to replace professional medical advice or treatment.
            Always read product labels and instructions carefully before use.
          </Text>
        </Stack>
        <Divider w={['100%', '80%', '60%']} borderColor='UI.3' />

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
              color='brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  display='inline-block'
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize={['14px', '14px', '16px']}
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  display='inline-block'
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize={['14px', '14px', '16px']}
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  display='inline-block'
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                </Text>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
        <Divider w={['100%', '80%', '60%']} borderColor='UI.3' />
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['100%', '100%', '60%']}
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='40px'
            textTransform='capitalize'
            color='UI.1'
          >
            Headline Line Item
          </Text>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='24px'
            color='#000000'
          >
            Subhead Line Item
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
            Morbi in sem quis dui placerat ornare.
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
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat. Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.
            Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
            quam, gravida non, commodo a, sodales sit amet, nisi.
          </Text>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='24px'
            color='#000000'
          >
            Subhead Line Item
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
        </Stack>
        <Divider w={['100%', '80%', '60%']} borderColor='UI.3' />

        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          w={['100%', '100%', '60%']}
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='40px'
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
            porttitor mauris sit amet orci.
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
      </Stack>
    </Box>
  );
};

export default Disclaimer;
