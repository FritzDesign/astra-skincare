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
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  UnorderedList,
  ListItem,
  Box,
  Center
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

  const { fetchProductByHandle, addItemToCheckout, product, resetProduct } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    resetProduct();
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);
  if (Object.keys(product).length) {
    return (
      <Stack>
        <Flex m='5rem' justifyContent='center'>
          <Stack alignItems='flex-end'>
            <Image
              src={product.images[0].src}
              w='596px'
              h='600px'
              objectFit='cover'
              objectPosition='center center'
            />
            <Flex w='596px' gap='16px' h='108px'>
              <Image
                src={placeholder}
                _hover={{ filter: 'brightness(.9)' }}
                cursor='pointer'
                h='106px'
                w='106px'
                objectFit='cover'
              />
              <Image
                src={placeholder}
                _hover={{ filter: 'brightness(.9)' }}
                cursor='pointer'
                h='106px'
                w='106px'
                objectFit='cover'
              />
              <Image
                src={placeholder}
                _hover={{ filter: 'brightness(.9)' }}
                cursor='pointer'
                h='106px'
                w='106px'
                objectFit='cover'
              />
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
            w='392px'
            mx='7.5rem'
            overflowY='auto'
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
              width='392px'
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
                  >
                    {product.productType}
                  </Text>
                </Stack>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='40px'
                  textTransform='capitalize'
                  color='UI.1'
                  width='392px'
                  maxWidth='100%'
                >
                  {product.title}
                </Text>
              </Stack>
              <Stack justify='flex-start' align='flex-start'>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='24px'
                  color='UI.1'
                  width='392px'
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
                  width='392px'
                  maxWidth='100%'
                >
                  {product.variants[0].weight
                    ? 'Size: ' + product.variants[0].weight + ' oz'
                    : ''}
                </Text>
              </Stack>
            </Stack>
            <Stack width='392px' height='48px' maxWidth='100%'>
              <Button
                _hover={{ filter: 'brightness(1.25)' }}
                _active={{ transform: 'scale(.98)' }}
                leftIcon={<Icon as={BsBag} color='brand.Cream' />}
                size='lg'
                bgColor='brand.Charcoal'
                color='brand.Cream'
                borderRadius='2px'
                width='392px'
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
              width='408px'
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
                        second: false,
                        third: false
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
                        first: false,
                        second: !isPanelOpen.second,
                        third: false
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
                        first: false,
                        second: false,
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
