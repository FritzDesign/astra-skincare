import * as React from 'react';
import {
  Stack,
  Badge,
  Text,
  Button,
  Icon,
  Flex,
  Image
} from '@chakra-ui/react';
import { BsBag } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

import placeholder from '../../assets/astra-card-ph.png';
import ScaleableGallery from '../ScaleableGallery';

const SingleProduct: React.FC = () => {
  const { handle } = useParams();

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
        <Flex m='5rem' gap='7.5rem' justifyContent='center'>
          <Stack>
            <Image
              src={product.images[0].src}
              w='596px'
              h='600px'
              objectFit='cover'
              objectPosition='center center'
            />
            <Flex w='596px' gap='16px' h='108px'>
              <Image src={placeholder} h='106px' w='106px' />
              <Image src={placeholder} h='106px' w='106px' />
              <Image src={placeholder} h='106px' w='106px' />
              <Image src={placeholder} h='106px' w='106px' />
              <Image src={placeholder} h='106px' w='106px' />
            </Flex>
          </Stack>
          <Stack
            justify='flex-start'
            align='flex-start'
            spacing='44px'
            width='392px'
            maxWidth='100%'
          >
            <Stack direction='row' justify='flex-start' align='flex-start'>
              <Badge variant='solid'>New</Badge>
              <Badge variant='outline'>Free Shipping</Badge>
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
                  {product.variants[0].weight ? product.variants[0].weight : ''}{' '}
                  oz
                </Text>
              </Stack>
            </Stack>
            <Stack width='392px' height='48px' maxWidth='100%'>
              <Button
                leftIcon={<Icon as={BsBag} />}
                size='lg'
                colorScheme='blue'
                width='392px'
                height='48px'
                maxWidth='100%'
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
              justify='flex-start'
              align='flex-start'
              spacing='24px'
              alignSelf='stretch'
            >
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                overflow='hidden'
                alignSelf='stretch'
              >
                <Stack
                  direction='row'
                  justify='space-between'
                  align='center'
                  spacing='641px'
                  alignSelf='stretch'
                >
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='16px'
                    color='UI.1'
                    width='408px'
                    alignSelf='stretch'
                    maxWidth='100%'
                  >
                    Details
                  </Text>
                  <Icon as={FiPlus} />
                </Stack>
              </Stack>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                overflow='hidden'
                alignSelf='stretch'
              >
                <Stack
                  direction='row'
                  justify='space-between'
                  align='center'
                  spacing='641px'
                  alignSelf='stretch'
                >
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='16px'
                    color='UI.1'
                    width='408px'
                    alignSelf='stretch'
                    maxWidth='100%'
                  >
                    Directions
                  </Text>
                  <Icon as={FiPlus} />
                </Stack>
              </Stack>
              <Stack
                justify='flex-start'
                align='flex-start'
                spacing='32px'
                overflow='hidden'
                alignSelf='stretch'
              >
                <Stack
                  direction='row'
                  justify='space-between'
                  align='center'
                  spacing='641px'
                  alignSelf='stretch'
                >
                  <Text
                    fontFamily='Poppins'
                    lineHeight='1.5'
                    fontWeight='regular'
                    fontSize='16px'
                    color='UI.1'
                    width='408px'
                    alignSelf='stretch'
                    maxWidth='100%'
                  >
                    Ingredients
                  </Text>
                  <Icon as={FiPlus} />
                </Stack>
              </Stack>
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
