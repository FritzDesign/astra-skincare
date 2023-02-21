import * as React from 'react';
import {
  Flex,
  Image,
  Drawer,
  Text,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack
} from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { ShopContext } from '../context/ShopContext';
import { Navigate, useNavigate } from 'react-router';

const Cart: React.FC = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    React.useContext<any>(ShopContext);

  const navigate = useNavigate();

  const handleViewProducts = () => {
    closeCart();
    navigate('/skincare-products');
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      placement='right'
      onClose={closeCart}
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent bgColor='brand.Cream'>
        <DrawerCloseButton
          color='brand.Charcoal'
          fontSize='14px'
          mt='4px'
          mr='4px'
        />
        <DrawerHeader
          color='brand.Charcoal'
          py='1rem'
          fontFamily='Poppins'
          fontSize='16px'
          fontWeight='400'
          borderBottom='1px solid'
          borderColor='UI.4'
        >
          Your Cart ({checkout?.lineItems?.length})
        </DrawerHeader>
        <DrawerBody>
          {checkout?.lineItems?.length ? (
            checkout.lineItems.map((item: any) => {
              return (
                <Flex my='1rem' maxH='80px' w='100%'>
                  <Image
                    src={item.variant.image.src}
                    minH='80px'
                    minW='80px'
                    h='80px'
                    w='80px'
                    objectFit='cover'
                  />
                  <Stack ml='1rem' w='100%'>
                    <Text
                      color='brand.Charcoal'
                      fontSize='14px'
                      fontFamily='Poppins'
                    >
                      {item.title}
                    </Text>
                    <Stack
                      mt='0px !important'
                      justifyContent='space-between'
                      h='100%'
                    >
                      <Flex justify='space-between' mt='0px !important'>
                        <Text color='UI.2' fontSize='12px'>
                          ${item.variant.price.amount}0
                        </Text>

                        <Text fontFamily='Poppins' color='UI.2' fontSize='12px'>
                          Qty:{' '}
                          {item.quantity < 10
                            ? '0' + item.quantity
                            : item.quantity < 99
                            ? '99+'
                            : item.quantity}
                        </Text>
                      </Flex>
                      <Text
                        _hover={{ bgColor: 'UI.6' }}
                        cursor='pointer'
                        color='brand.Charcoal'
                        pb='2px'
                        px='1px'
                        borderBottom='1px solid'
                        w='fit-content'
                        fontSize='12px'
                        mt='0px !important'
                        onClick={() => removeLineItem(item.id)}
                      >
                        Remove
                      </Text>
                    </Stack>
                  </Stack>
                </Flex>
              );
            })
          ) : (
            <Flex h='100%' alignItems='flex-start' justifyContent='center'>
              <Text fontFamily='Poppins' fontWeight='bold'>
                No Items In Cart
              </Text>
            </Flex>
          )}
        </DrawerBody>

        <DrawerFooter
          justifyContent='space-between'
          borderTop='1px solid'
          borderColor='UI.4'
        >
          {checkout?.totalPrice && +checkout.totalPrice.amount ? (
            <Button
              variant='brandPrimary'
              w='100%'
              onClick={() => (window.location.href = checkout.webUrl)}
            >
              Checkout
            </Button>
          ) : (
            <Button
              variant='brandPrimary'
              w='100%'
              onClick={handleViewProducts}
            >
              View Products
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
