import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Stack,
  Icon,
  Divider,
  AccordionPanel,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';

import heroImage from '../../assets/faq-hero-img.png';
import { FiMinus, FiPlus } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = React.useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  });

  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu hero={heroImage} fallback={heroImage} heading='F.A.Q.' />
      <Stack w='100%' align='center' px='2rem'>
        <Accordion allowToggle maxW='1036px' defaultIndex={0}
          mt='3rem'
          mb={['3rem','3rem','6.5rem']}
        >
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  first: !isPanelOpen.first,
                  second: false,
                  third: false,
                  fourth: false,
                  fifth: false,
                  sixth: false
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.first ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}

              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  first: false,
                  second: !isPanelOpen.second,
                  third: false,
                  fourth: false,
                  fifth: false,
                  sixth: false
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.second ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  second: false,
                  first: false,
                  third: !isPanelOpen.third,
                  fourth: false,
                  fifth: false,
                  sixth: false
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.third ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}

              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  first: false,
                  second: false,
                  third: false,
                  fourth: !isPanelOpen.fourth,
                  fifth: false,
                  sixth: false
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.fourth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}

              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  first: false,
                  second: false,
                  third: false,
                  fourth: false,
                  fifth: !isPanelOpen.fifth,
                  sixth: false
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.fifth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}

              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
          <AccordionItem>
            <AccordionButton
              fontFamily='Marcellus'
              fontSize={['24px', '24px', '32px']}
              onClick={() =>
                setIsPanelOpen({
                  first: false,
                  second: false,
                  third: false,
                  fourth: false,
                  fifth: false,
                  sixth: !isPanelOpen.sixth
                })
              }
            >
              Headline Line Item
              <Icon as={isPanelOpen.sixth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel
              py='2rem'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w={['100%', '100%', '90%']}

              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
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
            </AccordionPanel>
          </AccordionItem>
          <Divider borderColor='UI.3' />
        </Accordion>
      </Stack>
    </Box>
  );
};

export default FAQ;
