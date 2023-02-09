import * as React from 'react';
import {
  Stack,
  Image,
  Icon,
  Flex,
  Link,
  Input,
  useMediaQuery,
  Text,
  Box
} from '@chakra-ui/react';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import logo from '../assets/astra-logo.png';
import { useNavigate } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import FMC_Component from '../animations/defaults';
import { AnimatePresence } from 'framer-motion';
import NavMenu from './NavMenu';

const Navigation: React.FC = () => {
  const [isMobile, isLessThan1536] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 1536px)'
  ]);

  const navigate = useNavigate();
  const [showNav, setShowNav] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { openCart, checkout, openMenu, closeMenu, isMenuOpen } =
    React.useContext<any>(ShopContext);

  const getCartItemQty = (): string => {
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
    if (isMenuOpen) closeMenu();
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

  const handleShowNav = (mouseLeave = false): any => {
    if (mouseLeave) {
      return setShowNav(false);
    }
    const isScrollAtTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (isScrollAtTop < 150) {
      setShowNav(false);
      return 'top';
    } else {
      setShowNav(true);
    }
  };

  React.useEffect(() => {
    getCartItemQty();
  }, [checkout]);

  return (
    <Flex
      pos={showNav ? 'sticky' : 'relative'}
      w='100vw'
      left='0'
      top='0'
      paddingX={['20px', '40px']}
      paddingY='16px'
      justifyContent='space-between'
      alignItems='center'
      background='UI.5'
      boxShadow='0px 1px 2px rgba(0, 0, 0, 0.05)'
      onMouseLeave={isMenuOpen ? closeMenu : null}
      zIndex={1001}
      onMouseEnter={showNav ? () => handleShowNav() : undefined}
    >
      <Box
        pos='fixed'
        h='14px'
        w='100vw'
        left='0'
        top='0'
        onMouseEnter={() => handleShowNav()}
        pointerEvents={showNav ? 'none' : 'auto'}
      ></Box>
      <Box
        pos='fixed'
        h='22px'
        w='100vw'
        left='0'
        top='110px'
        onMouseEnter={() => handleShowNav(true)}
        pointerEvents={showNav ? 'auto' : 'none'}
      ></Box>
      <Image
        mixBlendMode='multiply'
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
          onClick={() => navigate('/skincare-products')}
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
          onClick={() => navigate('/beauty-tools')}
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
          onClick={() => navigate('/skin-concerns')}
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
          onClick={() => navigate('/skincare-resources')}
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
          onClick={() => navigate('/why-astra')}
        >
          Why Astra
        </Link>
        <Link
          _hover={{ textDecoration: 'underline' }}
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='brand.Black'
          onClick={() => navigate('/contact-us')}
        >
          Contact Us
        </Link>
      </Stack>
      {isLessThan1536 ? (
        <Stack direction='row' justify='space-between' w='6rem' align='center'>
          <Icon
            id='search-icon'
            _hover={{ transform: 'scale(1.04)' }}
            pointerEvents={isSearchOpen ? 'none' : 'auto'}
            as={BsSearch}
            w='20px'
            h='20px'
            color='brand.Black'
            cursor='pointer'
            opacity={isSearchOpen ? 0.5 : 1}
            onClick={() => handleSearchToggle(isSearchOpen)}
          />
          <Stack pos='relative' onClick={openCart}>
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
              bottom='0px'
              left='8px'
              fontSize={12}
            >
              {getCartItemQty()}
            </Text>
          </Stack>
          <Icon
            _hover={{ transform: 'scale(1.03)' }}
            as={isMenuOpen ? FiX : HiOutlineMenu}
            onClick={isMenuOpen ? closeMenu : openMenu}
            w='24px'
            h='24px'
            color='brand.Black'
            cursor='pointer'
          />
          {isMenuOpen && <NavMenu />}
        </Stack>
      ) : (
        <Stack direction='row' justify='space-between' w='6rem' align='center'>
          <Icon
            _hover={{ transform: 'scale(1.04)' }}
            as={BsSearch}
            pointerEvents={isSearchOpen ? 'none' : 'auto'}
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
          <Stack pos='relative' onClick={openCart}>
            <Icon
              _hover={{ transform: 'scale(1.03)' }}
              as={IoBagOutline}
              w='24px'
              h='24px'
              color='brand.Black'
              cursor='pointer'
              onClick={openCart}
            />
            <Text
              pos='absolute'
              pointerEvents='none'
              bottom='0px'
              left='8px'
              fontSize={12}
            >
              {getCartItemQty()}
            </Text>
          </Stack>
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
            right='-23.72rem'
            borderRadius='0px'
            w='24rem'
            bgColor='brand.Cream'
            onBlur={() => handleSearchToggle(isSearchOpen)}
          >
            <Input
              id='nav-search-input'
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
              initial={{
                transform: 'translateY(2rem)',
                opacity: 0
              }}
              animate={{
                transform: 'translateY(4rem)',
                opacity: 1
              }}
              exit={{
                transform: 'translateY(2rem)',
                opacity: 0
              }}
              // @ts-ignore
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              pos='absolute'
              left='0rem'
              borderRadius='0px'
              w='100%'
              bgColor='brand.Cream'
              onBlur={() => handleSearchToggle(isSearchOpen)}
            >
              <Input
                id='nav-search-input'
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
