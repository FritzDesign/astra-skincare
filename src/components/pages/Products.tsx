import { useState, useEffect, useContext, useRef } from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import Product from '../Product';
import { Product as ProductInterface } from '../../models/API';
import { useInView } from 'framer-motion';

const Products: React.FC = () => {
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef);
  const {
    products,
    totalProducts,
    fetchAllProducts,
    fetchNextPage,
    isLoading,
    hasMoreProducts
  } = useContext<any>(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (products.length) {
      fetchNextPage();
    }
  }, [isInView]);

  return (
    <Chakra.Box>
      <Chakra.Grid p='2rem !important'>
        <Chakra.Grid
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
                  category={product.productType}
                  price={product.variants[0].price.amount}
                  weight={product.variants[0].weight + ' oz'}
                />
              );
            })
          ) : (
            <Chakra.Box minH='1000px' />
          )}
        </Chakra.Grid>
        {isLoading && (
          <Chakra.Progress
            isIndeterminate
            colorScheme='telegram'
            size='lg'
            mx={['5%', '25%']}
          />
        )}
        {hasMoreProducts && <Chakra.Box ref={triggerRef} h='1px' />}
      </Chakra.Grid>
    </Chakra.Box>
  );
};

export default Products;
