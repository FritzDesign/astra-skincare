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
            Refund Policy
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            We have a 30-day return policy, which means you have 30 days after
            receiving your item to request a return.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            To start a return, you can contact us at dev.cjfritz@gmail.com.
            Please note that returns will need to be sent to the following
            address: 46890 Dequindre Rd, Shelby, Michigan 48317
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            If your return is accepted, we’ll send you a return shipping label,
            as well as instructions on how and where to send your package. Items
            sent back to us without first requesting a return will not be
            accepted.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            maxWidth='100%'
          >
            You can always contact us for any return question at
            dev.cjfritz@gmail.com.
          </Text>
          <Stack justify='flex-start' align='flex-start'>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='brand.Lavender'
            >
              DAMAGES AND ISSUES
            </Text>
            <UnorderedList listStylePos='outside'>
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontSize={['14px', '14px', '16px']}
                fontFamily='Poppins'
              >
                Please inspect your order upon reception and contact us
                immediately if the item is defective, damaged or if you receive
                the wrong item, so that we can evaluate the issue and make it
                right.
              </ListItem>
            </UnorderedList>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='14px'
              color='brand.Lavender'
            >
              EXCEPTIONS & NON-RETURNABLE ITEMS
            </Text>
            <UnorderedList>
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontFamily='Poppins'
                fontSize={['14px', '14px', '16px']}
              >
                Certain types of items cannot be returned, like perishable goods
                (such as food, flowers, or plants), custom products (such as
                special orders or personalized items), and personal care goods
                (such as beauty products).
              </ListItem>
              <ListItem
                ml='1.5rem'
                color='UI.2'
                fontFamily='Poppins'
                fontSize={['14px', '14px', '16px']}
              >
                We do not accept returns for hazardous materials, flammable
                liquids, or gases. Please get in touch if you have questions or
                concerns about your specific item.
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
            Privacy Policy
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information about an identifiable individual (including
            the information below) as “Personal Information”. See the list below
            for more information about what Personal Information we collect and
            why.
          </Text>
          <UnorderedList>
            <ListItem
              ml='1.5rem'
              color='UI.2'
              fontFamily='Poppins'
              fontSize={['14px', '14px', '16px']}
            >
              Purpose of collection: to load the Site accurately for you, and to
              perform analytics on Site usage to optimize our Site.
            </ListItem>
            <ListItem
              ml='1.5rem'
              color='UI.2'
              fontFamily='Poppins'
              fontSize={['14px', '14px', '16px']}
            >
              Source of collection: Collected automatically when you access our
              Site using cookies, log files, web beacons, tags, or pixels.
            </ListItem>
            <ListItem
              ml='1.5rem'
              color='UI.2'
              fontFamily='Poppins'
              fontSize={['14px', '14px', '16px']}
            >
              Disclosure for a business purpose: shared with our processor
              Shopify.
            </ListItem>
            <ListItem
              ml='1.5rem'
              color='UI.2'
              fontFamily='Poppins'
              fontSize={['14px', '14px', '16px']}
            >
              Personal Information collected: version of web browser, IP
              address, time zone, cookie information, what sites or products you
              view, search terms, and how you interact with the Site.
            </ListItem>
          </UnorderedList>
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
            Terms of Service
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='bold'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            This website was created for demonstration purposes only. None of
            the products on this Site are available for purchase or able to be
            purchased.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='14px'
            color='brand.Lavender'
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
            This website is operated by ASTRA Skincare Demo. Throughout the
            site, the terms “we”, “us” and “our” refer to ASTRA Skincare Demo.
            ASTRA Skincare Demo offers this website, including all information,
            tools and Services available from this site to you, the user,
            conditioned upon your acceptance of all terms, conditions, policies
            and notices stated here.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any Services. If these Terms of Service
            are considered an offer, acceptance is expressly limited to these
            Terms of Service.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            Any new features or tools which are added to the current store shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those
            changes.Any new features or tools which are added to the current
            store shall also be subject to the Terms of Service. You can review
            the most current version of the Terms of Service at any time on this
            page. We reserve the right to update, change or replace any part of
            these Terms of Service by posting updates and/or changes to our
            website. It is your responsibility to check this page periodically
            for changes. Your continued use of or access to the website
            following the posting of any changes constitutes acceptance of those
            changes.
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize={['14px', '14px', '16px']}
            color='UI.2'
            maxWidth='100%'
          >
            Our store is hosted on Shopify Inc. They provide us with the online
            e-commerce platform that allows us to sell our products and Services
            to you.
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
            turpis.
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
