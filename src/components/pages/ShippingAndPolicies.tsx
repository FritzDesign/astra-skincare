import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Divider,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';

import heroImage from '../../assets/faq-hero-img.png';
import { useNavigate } from 'react-router';

const ShippingAndPolicies: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 127,
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
              color='brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <UnorderedList listStylePos='outside'>
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontSize={['14px', '14px', '16px']}
                fontFamily='Poppins'
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </ListItem>
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontFamily='Poppins'
                fontSize={['14px', '14px', '16px']}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
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
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontFamily='Poppins'
                fontSize={['14px', '14px', '16px']}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </ListItem>
            </UnorderedList>
          </Stack>
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
              color='brand.Lavender'
            >
              SUBHEADER SECTION TITLE
            </Text>
            <UnorderedList>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </ListItem>
            </UnorderedList>
          </Stack>
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
            lineHeight='1.4'
            fontWeight='regular'
            fontSize='32px'
            color='#000000'
          >
            Still have a question?
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            width='1004px'
            maxWidth='100%'
          >
            Contact us lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis.{' '}
          </Text>
          <Stack justify='flex-start' align='flex-start'>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='brand.Lavender'
            >
              CONTACT HOURS
            </Text>
            <UnorderedList>
              <ListItem>Monday - Friday: 8:00am - 5:00pm MST</ListItem>
              <ListItem>Saturday - Sunday: 10:00am - 12:00pm MST</ListItem>
            </UnorderedList>
          </Stack>
          <Button
            _hover={{ filter: 'brightness(.9)' }}
            _active={{ transform: 'scale(0.98)' }}
            size='lg'
            bgColor='brand.Charcoal'
            borderRadius='0'
            onClick={() => navigate('/contact-us')}
          >
            <Text fontFamily='Poppins' fontWeight='400' color='brand.Cream'>
              Send A Message
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShippingAndPolicies;
