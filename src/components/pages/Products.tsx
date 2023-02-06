import { useState, useEffect, useContext } from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router';
import Product from '../Product';
import { Product as ProductInterface } from '../../models/API';

const Products: React.FC = () => {
  const { products, fetchAllProducts } = useContext<any>(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log(products);

  return (
    <Chakra.Box>
      <Chakra.Grid  p='2rem !important'>
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
          {products.map((product: ProductInterface) => {
            return (
              <Product
                image={product.images[0].src}
                title={product.title}
                category={product.productType}
                price={product.variants[0].price.amount}
                weight={product.variants[0].weight + ' oz'}
              />
            );
          })}
        </Chakra.Grid>
      </Chakra.Grid>
    </Chakra.Box>
  );
};

export default Products;
