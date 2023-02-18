import { useEffect, useContext, useRef, useState } from 'react';
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
import { ShopContext } from '../../context/ShopContext';
import Product from '../Product';
import { Product as ProductInterface } from '../../models/API';
// import { useInView } from 'framer-motion';

import heroImage from '../../assets/Products/products-hero-img.png';
import heroFb from '../../assets/Products/products-hero-img-fb.jpg';
import ProductMenu from '../ProductsMenu';

const SkincareProducts: React.FC = () => {
  const [showMoreProducts, setShowMoreProducts] = useState(true);
  const triggerRef = useRef(null);
  // const isInView = useInView(triggerRef);
  const {
    products,
    totalProducts,
    // fetchAllProducts,
    fetchCollectionByHandle,
    // fetchNextPage,
    isLoading,
    hasMoreProducts
  } = useContext<any>(ShopContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    fetchCollectionByHandle('skincare-products');
  }, []);

  // SAVE THIS FOR LATER - IN CASE OF PAGINATION IDEAS

  // useEffect(() => {
  //   if (products.length) {
  //     fetchNextPage();
  //   }
  // }, [isInView]);

  useEffect(() => {
    if (products.length && totalProducts) {
      if (!hasMoreProducts || products.length >= totalProducts) {
        setShowMoreProducts(false);
      }
    }
  }, [hasMoreProducts, totalProducts, products]);

  return (
    <Box>
      <ProductMenu
        hero={heroImage}
        fallback={heroFb}
        heading='Skincare Products'
        categoryNames={[
          'Cleansers',
          'Exfoliants',
          'Moisturizers',
          'Serums',
          'Sunscreen',
          'Toners'
        ]}
        menuItems={[
          'Featured',
          'Newest',
          'Highest Rated',
          'Price - High',
          'Price - Low'
        ]}
        showMenuBar
      />
      <Grid p='2rem !important'>
        <Grid
          id='products-container'
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
              console.log(product);
              
              return (
                <Product
                  key={i}
                  image={product.images[0].src}
                  title={product.title}
                  handle={product.handle}
                  category={product.productType}
                  price={product.variants[0].price.amount}
                  weight={product.variants[0].weight + ' oz'}
                />
              );
            })
          ) : (
            <Box minH='1000px' />
          )}
        </Grid>
        {showMoreProducts && <Box ref={triggerRef} h='1px' />}
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
      </Grid>
    </Box>
  );
};

export default SkincareProducts;
