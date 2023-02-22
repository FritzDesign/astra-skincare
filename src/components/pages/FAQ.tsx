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
    window.scrollTo(127, 0);
  }, []);

  return (
    <Box>
      <ProductMenu hero={heroImage} fallback={heroImage} heading='F.A.Q.' />
      <Stack w='100%' align='center' px='2rem'>
        <Accordion
          allowToggle
          maxW='1036px'
          defaultIndex={0}
          mt='3rem'
          mb={['3rem', '3rem', '6.5rem']}
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
              What are the benefits of using ASTRA skincare products?
              <Icon as={isPanelOpen.first ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  ASTRA skincare products offer many benefits to improve the
                  overall health and appearance of your skin. They provide
                  nourishment and hydration to the skin, making it healthier and
                  more radiant. Additionally, these products protect your skin
                  from environmental stressors like pollution and UV radiation.
                </Text>
                <Stack justify='flex-start' align='flex-start'>
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='14px'
                    color='brand.Lavender'
                  >
                    BENEFITS OF ASTRA SKINCARE PRODUCTS:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Nourishment and hydration for healthier-looking skin
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Protection against environmental stressors such as
                        pollution and UV radiation
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
                    100% VEGAN
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize='16px'
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Skincare products that are sourced fairly and vegan not
                        only benefit your skin, but also support ethical and
                        sustainable practices in the beauty industry.
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
              What are the best skincare tips for acne-prone skin?
              <Icon as={isPanelOpen.second ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  If you have acne-prone skin, you need to take extra care to
                  keep your skin clean and balanced. Here are some skincare tips
                  that can help you:
                </Text>
                <UnorderedList>
                  <ListItem>
                    <Text
                      fontFamily='Poppins'
                      lineHeight='1.5'
                      fontWeight='regular'
                      fontSize={['14px', '14px', '16px']}
                      color='UI.2'
                      maxWidth='100%'
                    >
                      Use a gentle, non-comedogenic cleanser to remove dirt,
                      oil, and makeup without clogging pores.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      fontFamily='Poppins'
                      lineHeight='1.5'
                      fontWeight='regular'
                      fontSize={['14px', '14px', '16px']}
                      color='UI.2'
                      maxWidth='100%'
                    >
                      Choose skincare products that contain salicylic acid,
                      benzoyl peroxide, or retinoids to help unclog pores and
                      reduce acne breakouts.
                    </Text>
                  </ListItem>
                </UnorderedList>
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  You should also avoid using harsh scrubs or picking at your
                  skin, as this can worsen acne and cause scarring. Finally,
                  maintain a healthy diet and stay hydrated to support healthy
                  skin from the inside out.
                </Text>
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
              What are the main ingredients used in ASTRA skincare products?
              <Icon as={isPanelOpen.third ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  ASTRA skincare products are formulated with natural
                  ingredients that nourish and protect your skin. Here are some
                  of the main ingredients we use:
                </Text>
                <Stack justify='flex-start' align='flex-start'>
                  <UnorderedList>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Aloe vera: A natural moisturizer that soothes and calms
                        the skin
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Vitamin C: A powerful antioxidant that brightens and
                        evens out skin tone
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Hyaluronic acid: A hydrating ingredient that retains
                        moisture, making the skin plump and supple
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Retinol: A derivative of vitamin A that stimulates
                        collagen production, reducing fine lines and wrinkles
                      </Text>
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='16px'
                    color='UI.2'
                    maxWidth='100%'
                  >
                    ASTRA skincare products are formulated with natural
                    ingredients that nourish and protect your skin. Here are
                    some of the main ingredients we use:
                  </Text>
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
              What are the most important skincare steps?
              <Icon as={isPanelOpen.fourth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  There are several important skincare steps that should be
                  incorporated into your daily routine. The most essential steps
                  are:
                </Text>
                <Stack justify='flex-start' align='flex-start'>
                  <UnorderedList>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Cleansing: Removes dirt, oil, and impurities from your
                        skin.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Toning: Balances your skin's pH level and prepares it
                        for the next step.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Moisturizing: Hydrates your skin and locks in moisture.
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Sun Protection: Protects your skin from harmful UV rays
                        that can cause sun damage and premature aging.
                      </Text>
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='16px'
                    color='UI.2'
                    maxWidth='100%'
                  >
                    There are several important skincare steps that should be
                    incorporated into your daily routine. The most essential
                    steps are:
                  </Text>
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
              What makes ASTRA skincare products different?
              <Icon as={isPanelOpen.fifth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  ASTRA skincare products are made with a unique blend of
                  natural and organic ingredients, free from harmful chemicals
                  and artificial fragrances. We use sustainable and ethical
                  sourcing practices to ensure our products are of the highest
                  quality and cruelty-free. Our formulations are developed by
                  skincare experts, combining traditional remedies with modern
                  science to provide effective and safe solutions for all skin
                  types. With ASTRA skincare, you can achieve healthy and
                  glowing skin while supporting ethical and sustainable
                  practices.
                </Text>
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
              What are the best skincare practices to keep my skin healthy?
              <Icon as={isPanelOpen.sixth ? FiMinus : FiPlus} />
            </AccordionButton>
            <AccordionPanel py='2rem'>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                w='100%'
                pr='3rem'
              >
                <Stack justify='flex-start' align='flex-start'>
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='14px'
                    color='brand.Lavender'
                  >
                    To keep your skin healthy and glowing, follow these best
                    skincare practices:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Cleanse your face twice daily to remove dirt and
                        impurities
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily='Poppins'
                        lineHeight='1.5'
                        fontWeight='regular'
                        fontSize={['14px', '14px', '16px']}
                        color='UI.2'
                        maxWidth='100%'
                      >
                        Moisturize your skin to maintain hydration and prevent
                        dryness
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </Stack>
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.2'
                  maxWidth='100%'
                >
                  Other tips include using sunscreen daily, exfoliating your
                  skin once or twice a week, and incorporating serums and masks
                  into your routine for additional nourishment. Remember to
                  choose skincare products that are suited for your skin type
                  and address your specific concerns for optimal results.
                </Text>
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
