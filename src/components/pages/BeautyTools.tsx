import {
  Box,
  Grid,
  Stack,
  Image,
  Text,
  Divider,
  Skeleton,
  SkeletonText
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useContext, useEffect} from 'react';
import { ShopContext } from '../../context/ShopContext';

import { Product as ProductInterface } from '../../models/API';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/beauty-tools-hero.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';
import Product from '../Product';

const BeautyTools: React.FC = () => {
  const { products, fetchCollectionByHandle, isLoading } =
    useContext<any>(ShopContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    fetchCollectionByHandle('beauty-tools');
  }, []);

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroFb}
        heading='Beauty Tools'
        menuItems={[
          'Featured',
          'Newest',
          'Highest Rated',
          'Price - High',
          'Price - Low'
        ]}
        showMenuBar
      />
      <Grid
        id='products-container'
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '8rem']}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)'
        ]}
        justifyItems='center'
      >
        {products.length ? (
          products.map((product: ProductInterface, i: number) => {
            return (
              <Product
                key={i}
                image={product.images[0].src}
                title={product.title}
                handle={product.handle}
                price={product.variants[0].price.amount}
              />
            );
          })
        ) : (
          <Box minH='1000px' />
        )}
      </Grid>
      {isLoading && (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)'
          ]}
          justifyItems='center'
        >
          <Stack
            justify='center'
            pos='relative'
            align='center'
            spacing='16px'
            w={['300px', '376px']}
            h='451px'
            my='2rem'
          >
            <Skeleton>
              <Image minW={['300px', '376px']} minH={['275px', '345px']} />
            </Skeleton>
            <SkeletonText>
              <Stack justify='flex-start' align='center' spacing='0px'>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='24px'
                  color='brand.Navy'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Lorem
                </Text>
                <Text
                  fontFamily='Inter'
                  lineHeight='1.5'
                  fontWeight='medium'
                  fontSize='14px'
                  color='UI.2'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Ipsum
                </Text>
              </Stack>
            </SkeletonText>
            <Skeleton>
              <Stack
                direction='row'
                justify='flex-start'
                align='center'
                spacing='16px'
                width='290px'
                maxWidth='100%'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                >
                  $0
                </Text>
                <Divider borderColor='UI.2' />
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                  minWidth='46px'
                >
                  1
                </Text>
              </Stack>
            </Skeleton>
          </Stack>
          <Stack
            justify='center'
            pos='relative'
            align='center'
            spacing='16px'
            w={['300px', '376px']}
            h='451px'
            my='2rem'
          >
            <Skeleton>
              <Image minW={['300px', '376px']} minH={['275px', '345px']} />
            </Skeleton>
            <SkeletonText>
              <Stack justify='flex-start' align='center' spacing='0px'>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='24px'
                  color='brand.Navy'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Lorem
                </Text>
                <Text
                  fontFamily='Inter'
                  lineHeight='1.5'
                  fontWeight='medium'
                  fontSize='14px'
                  color='UI.2'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Ipsum
                </Text>
              </Stack>
            </SkeletonText>
            <Skeleton>
              <Stack
                direction='row'
                justify='flex-start'
                align='center'
                spacing='16px'
                width='290px'
                maxWidth='100%'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                >
                  $0
                </Text>
                <Divider borderColor='UI.2' />
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                  minWidth='46px'
                >
                  1
                </Text>
              </Stack>
            </Skeleton>
          </Stack>
          <Stack
            justify='center'
            pos='relative'
            align='center'
            spacing='16px'
            w={['300px', '376px']}
            h='451px'
            my='2rem'
          >
            <Skeleton>
              <Image minW={['300px', '376px']} minH={['275px', '345px']} />
            </Skeleton>
            <SkeletonText>
              <Stack justify='flex-start' align='center' spacing='0px'>
                <Text
                  fontFamily='Marcellus'
                  lineHeight='1.2'
                  fontWeight='regular'
                  fontSize='24px'
                  color='brand.Navy'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Lorem
                </Text>
                <Text
                  fontFamily='Inter'
                  lineHeight='1.5'
                  fontWeight='medium'
                  fontSize='14px'
                  color='UI.2'
                  width='290px'
                  maxWidth='100%'
                  textAlign='center'
                >
                  Ipsum
                </Text>
              </Stack>
            </SkeletonText>
            <Skeleton>
              <Stack
                direction='row'
                justify='flex-start'
                align='center'
                spacing='16px'
                width='290px'
                maxWidth='100%'
              >
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                >
                  $0
                </Text>
                <Divider borderColor='UI.2' />
                <Text
                  fontFamily='Poppins'
                  lineHeight='1.5'
                  fontWeight='regular'
                  fontSize='18px'
                  color='UI.1'
                  textAlign='center'
                  minWidth='46px'
                >
                  1
                </Text>
              </Stack>
            </Skeleton>
          </Stack>
        </Grid>
      )}
    </Box>
  );
};

export default BeautyTools;
