import * as React from 'react';
import {
  Stack,
  Image,
  Icon,
  Flex,
  Link,
  Input,
  useMediaQuery,
  Text
} from '@chakra-ui/react';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import logo from '../assets/astra-logo.png';
import { useNavigate } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import FMC_Component from '../animations/defaults';
import { AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isMobile, isLessThan1280] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 1536px)'
  ]);

  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { openCart, checkout } = React.useContext<any>(ShopContext);

  const getCartItemQty = (): string => {
    console.log('render');
    let cartItemQty = 0;
    checkout.lineItems?.forEach((item: any) => {
      if (cartItemQty >= 9) return;
      cartItemQty += item.quantity;
    });
    if (cartItemQty === 9) {
      return cartItemQty.toString();
    } else if (cartItemQty > 9) {
      return '9+';
    } else {
      return cartItemQty.toString();
    }
  };

  const handleSearchToggle = (inputState: boolean) => {
    if (!isSearchOpen) {
      setTimeout(() => {
        const input = document.getElementById(
          'nav-search-input'
        )! as HTMLInputElement;
        input.focus();
      }, 500);
    }
    setIsSearchOpen(!inputState);
  };

  React.useEffect(() => {
    getCartItemQty();
  }, [checkout]);

  return (
    <Flex
      pos='relative'
      paddingX={['20px', '40px']}
      paddingY='16px'
      justifyContent='space-between'
      alignItems='center'
      background='UI.5'
      boxShadow='Shadow/Sm'
      zIndex={15}
    >
      <Image
        loading='lazy'
        src={logo}
        h='56px'
        w='156px'
        cursor='pointer'
        objectFit='cover'
        onClick={() => navigate('/')}
      />
      <Stack
        display={['none', 'none', 'none', 'none', 'none', 'flex']}
        direction='row'
        justify='space-between'
        spacing='32px'
        px='1.8rem'
      >
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Skincare Products
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Beauty Tools
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Skin Concerns
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Skincare Resources
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Help Me Choose
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
        >
          Why Astra
        </Link>
      </Stack>
      {isLessThan1280 ? (
        <Stack direction='row' justify='space-between' w='6rem' align='center'>
          <Icon
            _hover={{ transform: 'scale(1.04)' }}
            as={BsSearch}
            w='20px'
            h='20px'
            color='brand.Black'
            cursor='pointer'
            opacity={isSearchOpen ? 0.5 : 1}
            onClick={() => handleSearchToggle(isSearchOpen)}
          />
          <Stack onClick={openCart}>
            <Icon
              _hover={{ transform: 'scale(1.03)' }}
              as={IoBagOutline}
              w='24px'
              h='24px'
              color='brand.Black'
              cursor='pointer'
              onClick={openCart}
              pos='relative'
            ></Icon>
            <Text
              cursor='pointer'
              pointerEvents='none'
              pos='absolute'
              top='28.5px'
              right={isMobile ? '67px' : '87px'}
              fontSize={13}
            >
              {getCartItemQty()}
            </Text>
          </Stack>
          <Icon
            _hover={{ transform: 'scale(1.03)' }}
            as={HiOutlineMenu}
            w='24px'
            h='24px'
            color='brand.Black'
            cursor='pointer'
          />
        </Stack>
      ) : (
        <Stack direction='row' justify='space-between' w='6rem' align='center'>
          <Icon
            _hover={{ transform: 'scale(1.04)' }}
            as={BsSearch}
            w='20px'
            h='20px'
            color='brand.Black'
            cursor='pointer'
            opacity={isSearchOpen ? 0.5 : 1}
            onClick={() => handleSearchToggle(isSearchOpen)}
          />
          <Icon
            _hover={{ transform: 'scale(1.03)' }}
            as={BsPerson}
            w='28px'
            h='28px'
            color='brand.Black'
            cursor='pointer'
          ></Icon>
          <Stack>
            <Icon
              _hover={{ transform: 'scale(1.03)' }}
              as={IoBagOutline}
              w='24px'
              h='24px'
              color='brand.Black'
              cursor='pointer'
              onClick={openCart}
            />
          </Stack>
          <Text pos='absolute' top='36px' right='49px' fontSize={13}>
            {getCartItemQty()}
          </Text>
        </Stack>
      )}

      <AnimatePresence>
        {(isSearchOpen && !isMobile && (
          <FMC_Component
            animate={{
              transform: 'translateX(-24rem)'
            }}
            exit={{
              transform: 'translateX(0rem)'
            }}
            // @ts-ignore
            transition={{ duration: 0.5, ease: 'linear' }}
            pos='absolute'
            bottom='-40px'
            right='-24rem'
            borderRadius='0px'
            w='24rem'
            bgColor='brand.Cream'
          >
            <Input
              id='nav-search-input'
              animate={{
                transform: 'translateX(-24rem)'
              }}
              // @ts-ignore
              transition={{ duration: 1, ease: 'easeIn' }}
              placeholder='search'
              borderRadius='0px'
              w='24rem'
              bgColor='white'
              focusBorderColor='transparent'
            />
          </FMC_Component>
        )) ||
          (isSearchOpen && isMobile && (
            <FMC_Component
              animate={{
                transform: 'translateX(-28rem)'
              }}
              exit={{
                transform: 'translateX(0rem)'
              }}
              // @ts-ignore
              transition={{ duration: 0.5, ease: 'linear' }}
              pos='absolute'
              bottom='-40px'
              right='-28rem'
              borderRadius='0px'
              w='100%'
              bgColor='brand.Cream'
            >
              <Input
                id='nav-search-input'
                // initial={{ height: '0px' }}
                animate={{
                  transform: 'translateX(-25rem)'
                }}
                exit={{
                  transform: 'translateX(0rem)'
                }}
                // @ts-ignore
                transition={{ duration: 1, ease: 'easeIn' }}
                placeholder='search'
                borderRadius='0px'
                bgColor='white'
                focusBorderColor='transparent'
              />
            </FMC_Component>
          ))}
      </AnimatePresence>
    </Flex>
  );
};

export default Navigation;
