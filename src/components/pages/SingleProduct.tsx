import * as React from 'react';
import {
  Stack,
  Badge,
  Text,
  Button,
  Icon,
  Flex,
  Image,
  Divider,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  UnorderedList,
  ListItem,
  Box,
  useMediaQuery,
  AspectRatio
} from '@chakra-ui/react';
import { BsArrowRight, BsBag } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

import placeholder from '../../assets/astra-card-ph.png';
import ScaleableGallery from '../ScaleableGallery';

const SingleProduct: React.FC = () => {
  const { handle } = useParams();
  const [isPanelOpen, setIsPanelOpen] = React.useState({
    first: false,
    second: false,
    third: false
  });
  const [
    isLessThan480,
    isLessThan600,
    isLessThan728,
    isLessThan768,
    isGreaterThan832,
    isGreaterThan1144,
    isGreaterThan1280
  ] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 600px)',
    '(max-width: 728px)',
    '(max-width: 768px)',
    '(min-width: 832px)',
    '(min-width: 1144px)',
    '(min-width: 1280px)'
  ]);

  const {
    fetchProductByHandle,
    fetchCollectionByHandle,
    addItemToCheckout,
    product,
    resetProduct
  } = React.useContext<any>(ShopContext);

  React.useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
    resetProduct();
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);
  if (Object.keys(product).length) {
    console.log(isLessThan768, isGreaterThan1144);

    return (
      <Stack>
        <Flex
          direction={['column', 'column', 'row']}
          my={['32px', '64px', '88px', '104px']}
          mx={['2rem', '4rem', '4rem', '6rem', '8rem', '13rem']}
          justifyContent='center'
          align={['center', 'center', 'flex-start']}
          gap={['2rem', '2rem', '3rem', '4.5rem', '6rem', '7.5rem']}
        >
          <Stack alignItems='flex-end'>
            {isLessThan768 && (
              <Text
                fontFamily='Marcellus'
                lineHeight='1.2'
                fontWeight='regular'
                fontSize={['32px', '40px']}
                textTransform='capitalize'
                color='UI.1'
                textAlign='center'
                w='100%'
                my='2rem'
              >
                {product.title}
              </Text>
            )}
            <Image
              src={product.images[0].src}
              maxH='780px'
              minW={
                isGreaterThan1280 ? '596px' : !isLessThan768 ? '50%' : undefined
              }
              maxW='596px'
              h={
                isGreaterThan1280
                  ? '600px'
                  : isLessThan480
                  ? '300px'
                  : isLessThan600
                  ? '484px'
                  : isLessThan768
                  ? '594px'
                  : '384px'
              }
              w={
                isGreaterThan1280
                  ? '600px'
                  : isLessThan480
                  ? '300px'
                  : isLessThan600
                  ? '484px'
                  : isLessThan768
                  ? '594px'
                  : '384px'
              }
              objectFit='cover'
              objectPosition='center center'
            />

            <Flex w='100%' gap='16px' h='108px' justify='flex-start'>
              {(isGreaterThan1280 || (isLessThan768 && !isLessThan728)) && (
                <Image
                  src={placeholder}
                  _hover={{ filter: 'brightness(.9)' }}
                  cursor='pointer'
                  h='106px'
                  w='106px'
                  objectFit='cover'
                />
              )}
              {(isGreaterThan1144 || (isLessThan768 && !isLessThan600)) && (
                <Image
                  src={placeholder}
                  _hover={{ filter: 'brightness(.9)' }}
                  cursor='pointer'
                  h='106px'
                  w='106px'
                  objectFit='cover'
                />
              )}
              {(isGreaterThan832 || (isLessThan768 && !isLessThan480)) && (
                <Image
                  src={placeholder}
                  _hover={{ filter: 'brightness(.9)' }}
                  cursor='pointer'
                  h='106px'
                  w='106px'
                  objectFit='cover'
                />
              )}
              <Image
                src={placeholder}
                _hover={{ filter: 'brightness(.9)' }}
                cursor='pointer'
                h='106px'
                w='106px'
                objectFit='cover'
              />
              <Box pos='relative'>
                <Image
                  src={placeholder}
                  _hover={{ filter: 'brightness(.9)' }}
                  cursor='pointer'
                  h='106px'
                  w='106px'
                  objectFit='cover'
                />
                <Box
                  cursor='pointer'
                  w='56px'
                  h='56px'
                  borderRadius='50%'
                  bgColor='brand.Cream'
                  pos='absolute'
                  top='23%'
                  left='40%'
                />
                <Icon
                  as={BsArrowRight}
                  cursor='pointer'
                  pos='absolute'
                  top='38%'
                  left='55%'
                  fontSize='24px'
                />
              </Box>
            </Flex>
          </Stack>
          <Stack
            id='product-info'
            justify='flex-start'
            align='flex-start'
            spacing='44px'
            overflowY='auto'
            h={['832px', '896px']}
            w={isGreaterThan1280 ? '596px' : !isLessThan768 ? '50%' : undefined}
            borderBottom={
              isPanelOpen.first || isPanelOpen.second || isPanelOpen.third
                ? '5px solid'
                : 'none'
            }
            borderColor='#00000010'
          >
            <Stack direction='row' justify='flex-start' align='flex-start'>
              <Badge
                variant='solid'
                bgColor='brand.Charcoal'
                color='brand.Cream'
                fontWeight='400'
                fontFamily='Poppins'
                py='4px'
                px='16px'
              >
                New
              </Badge>
              <Badge
                variant='outline'
                color='brand.Charcoal'
                fontWeight='400'
                fontFamily='Poppins'
                py='4px'
                px='16px'
              >
                Free Shipping
              </Badge>
            </Stack>
            <Stack
              justify='flex-start'
              align='flex-start'
              spacing='32px'
              maxWidth='100%'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                alignSelf='stretch'
              >
                <Stack
                  direction='row'
                  justify='flex-start'
                  align='flex-start'
                  borderColor='UI.2'
                  borderBottomWidth='1px'
                >
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='14px'
                    color='UI.2'
                    onClick={() => fetchCollectionByHandle()}
                  >
                    {product.productType}
                  </Text>
                </Stack>
                {!isLessThan768 && (
                  <Text
                    fontFamily='Marcellus'
                    lineHeight='1.2'
                    fontWeight='regular'
                    fontSize={['', '', '28px', '32px', '40px', '40px']}
                    textTransform='capitalize'
                    color='UI.1'
                    maxWidth='100%'
                  >
                    {product.title}
                  </Text>
                )}
              </Stack>
              <Stack justify='flex-start' align='flex-start'>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='24px'
                  color='UI.1'
                  maxWidth='100%'
                >
                  ${product.variants[0].price.amount}0
                </Text>
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='16px'
                  color='UI.1'
                  maxWidth='100%'
                >
                  {product.variants[0].weight
                    ? 'Size: ' + product.variants[0].weight + ' oz'
                    : ''}
                </Text>
              </Stack>
            </Stack>
            <Stack height='48px' maxWidth='100%'>
              <Button
                _hover={{ filter: 'brightness(1.25)' }}
                _active={{ transform: 'scale(.98)' }}
                leftIcon={<Icon as={BsBag} color='brand.Cream' />}
                size='lg'
                bgColor='brand.Charcoal'
                color='brand.Cream'
                borderRadius='2px'
                height='48px'
                maxWidth='100%'
                fontFamily='Poppins'
                fontWeight='normal'
                onClick={() => addItemToCheckout(product.variants[0].id, 1)}
              >
                Add to Bag
              </Button>
            </Stack>
            <Stack
              justify='flex-start'
              align='flex-start'
              spacing='16px'
              maxWidth='100%'
            >
              <Text
                fontFamily='Marcellus'
                lineHeight='1.2'
                fontWeight='regular'
                fontSize='24px'
                color='UI.1'
                alignSelf='stretch'
              >
                Summary
              </Text>
              <Text
                fontFamily='Poppins'
                lineHeight='1.5'
                fontWeight='regular'
                fontSize='16px'
                color='UI.2'
                alignSelf='stretch'
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non.
              </Text>
            </Stack>
            <Stack
              id='product-info'
              justify='flex-start'
              align='flex-start'
              spacing='24px'
              alignSelf='stretch'
              h='243px'
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton
                    onClick={() =>
                      setIsPanelOpen({
                        first: !isPanelOpen.first,
                        second: isPanelOpen.second,
                        third: isPanelOpen.third
                      })
                    }
                  >
                    Details <Icon as={isPanelOpen.first ? FiMinus : FiPlus} />
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt='32px' gap='32px'>
                      <Stack>
                        <Text>Benefits</Text>
                        <UnorderedList
                          pl='1.5rem'
                          spacing='-8px'
                          listStylePos='outside'
                        >
                          <ListItem>Replenishes lost moisture</ListItem>
                          <ListItem>Maintains healthy-looking skins</ListItem>
                          <ListItem>Provides enhanced barrier support</ListItem>
                          <ListItem>PH 6.50 - 7.50</ListItem>
                          <ListItem>Cruelty-free and Vegan</ListItem>
                          <ListItem>
                            Use after Squalene Cleanser, and before Natural
                            Moisturizing Factors + HA
                          </ListItem>
                        </UnorderedList>
                      </Stack>
                      <Stack>
                        <Text>Key Ingredients</Text>
                        <UnorderedList
                          pl='1.5rem'
                          spacing='-8px'
                          listStylePos='outside'
                        >
                          <ListItem>Hyaluronic Acid</ListItem>
                          <ListItem>Hyaluronic Acid Cross-Polymer</ListItem>
                          <ListItem>Vitamin B5</ListItem>
                        </UnorderedList>
                      </Stack>
                      <Stack>
                        <Text>Formulated Without</Text>
                        <UnorderedList
                          pl='1.5rem'
                          spacing='-8px'
                          listStylePos='outside'
                        >
                          <ListItem>Fragrance</ListItem>
                          <ListItem>Alcohol</ListItem>
                          <ListItem>Gluten</ListItem>
                          <ListItem>Nuts</ListItem>
                          <ListItem>Oil</ListItem>
                          <ListItem>Silicone</ListItem>
                          <ListItem>Parabens</ListItem>
                          <ListItem>Sulfates</ListItem>
                          <ListItem>Mineral Oil</ListItem>
                          <ListItem>Methylchloroisothiazolinone</ListItem>
                          <ListItem>Methylisothiazolinone</ListItem>
                          <ListItem>Animal Oils</ListItem>
                          <ListItem>Coal Tar Dyes</ListItem>
                          <ListItem>Formaldehyde</ListItem>
                          <ListItem>Mercury</ListItem>
                          <ListItem>Oxybenzone</ListItem>
                        </UnorderedList>
                      </Stack>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
                <Divider borderColor='UI.3' />
                <AccordionItem>
                  <AccordionButton
                    onClick={() =>
                      setIsPanelOpen({
                        first: isPanelOpen.first,
                        second: !isPanelOpen.second,
                        third: isPanelOpen.third
                      })
                    }
                  >
                    Directions{' '}
                    <Icon as={isPanelOpen.second ? FiMinus : FiPlus} />
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt='32px' gap='32px'>
                      <Text fontFamily='Poppins'>
                        Smooth generously over entire body daily.
                      </Text>
                      <Text fontFamily='Poppins'>
                        Precautions: For external use only. Avoid contact with
                        eyes. Keep out of reach of children.
                      </Text>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
                <Divider borderColor='UI.3' />
                <AccordionItem>
                  <AccordionButton
                    onClick={() =>
                      setIsPanelOpen({
                        first: isPanelOpen.first,
                        second: isPanelOpen.second,
                        third: !isPanelOpen.third
                      })
                    }
                  >
                    Ingredients{' '}
                    <Icon as={isPanelOpen.third ? FiMinus : FiPlus} />
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt='32px' gap='32px'>
                      <Text>
                        Aqua/Water/Eau, Parfum/Fragrance, Macadamia Ternifolia
                        Seed Oil, Isocetyl Stearoyl Stearate, Glycerin, Olea
                        Europaea (Olive) Fruit Oil, Dimethicone, Glyceryl
                        Stearate, PEG-100 Stearate, Cetearyl Alcohol, Cetyl
                        Alcohol, Butyrospermum Parkii (Shea) Butter, Polysorbate
                        60, Stearic Acid, Phytosteryl/Octyldodecyl Lauroyl
                        Glutamate, Tocopheryl Acetate, Potassium Ascorbyl
                        Tocopheryl Phosphate, Tocopherol, Xanthan Gum, Carbomer,
                        Alpha-Isomethyl Ionone, Amyl Cinnamal, Benzyl
                        Salicylate, Butylphenyl Methylpropional, Geraniol, Hexyl
                        Cinnamal, Hydroxycitronellal, Limonene, Linalool,
                        Imidazolidinyl Urea, Triethanolamine, Methylparaben,
                        Propylparaben, Citric Acid, Tetrasodium EDTA.
                      </Text>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
                <Divider borderColor='UI.3' />
              </Accordion>
            </Stack>
          </Stack>
        </Flex>
        <ScaleableGallery
          title='Similar Products'
          product={product}
          collection={product.productType}
          length={7}
        />
      </Stack>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

export default SingleProduct;
