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
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';

import { Product as ProductInterface } from '../../models/API';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';
import Product from '../Product';

const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
    // fetchCollectionByHandle('skin-concerns');
  }, []);

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroFb}
        heading='Contact Us'
        menuItems={[
          'Featured',
          'Newest',
          'Highest Rated',
          'Price - High',
          'Price - Low'
        ]}
      />
      <Grid p='2rem !important'>
        {/* <Grid
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
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default ContactUs;
