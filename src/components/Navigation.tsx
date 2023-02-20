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
  Box,
  Center,
  Slide,
  SlideFade
} from '@chakra-ui/react';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import logo from '../assets/astra-logo.png';
import { useNavigate } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import FMC_Component from '../animations/defaults';
import { AnimatePresence, useInView } from 'framer-motion';
import NavMenu from './NavMenu';

const Navigation: React.FC = () => {
  const [isMobile, isLessThan1536] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 1536px)'
  ]);
  const topWindowRef = React.useRef(null);
  const isInView = useInView(topWindowRef);

  const navigate = useNavigate();
  const [showNav, setShowNav] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [cartItemQty, setCartItemQty] = React.useState('0');
  const [enterPress, setEnterPress] = React.useState<any>({
    display: false,
    keyCode: 0,
    keyName: ''
  });

  const {
    openCart,
    checkout,
    openMenu,
    closeMenu,
    isMenuOpen,
    fetchProductsBySearch
  } = React.useContext<any>(ShopContext);

  const getCartItemQty = (): void => {
    let cartItemQty = 0;
    checkout?.lineItems?.forEach((item: any) => {
      if (cartItemQty >= 9) return;
      cartItemQty += item.quantity;
    });
    if (cartItemQty > 9) {
      setCartItemQty('9+');
    } else {
      setCartItemQty(cartItemQty.toString());
    }
  };

  const handleUserInput = (event: React.KeyboardEvent) => {
    setEnterPress({display: true, keyName: [event.metaKey, event.detail, event.charCode, event.which, event.type]})
    const key: number = event.keyCode;
    if (key === 13 && searchInput.length) {
      fetchProductsBySearch({
        query: `title:${searchInput}*`,
        sortKey: 'TITLE'
      });
      navigate(`/search/${encodeURI(searchInput)}`);
      setSearchInput('');
      setIsSearchOpen(false);
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

  if (isInView && showNav) {
    setShowNav(false);
  }

  React.useEffect(() => {
    getCartItemQty();
  }, [checkout]);

  return (
    <Box h='88px' pos='relative'>
      <Box pos='absolute' h='1px' bottom='0' ref={topWindowRef} />
      <Flex
        pos={showNav ? 'fixed' : 'sticky'}
        w='100vw'
        left='0'
        top='0'
        paddingX={['20px', '40px']}
        paddingY='16px'
        justifyContent='space-between'
        alignItems='center'
        background='UI.5'
        boxShadow={
          showNav
            ? '0px 1px 2px rgba(0, 0, 0, .5)'
            : '0px 1px 2px rgba(0, 0, 0, .1)'
        }
        onMouseLeave={isMenuOpen ? closeMenu : null}
        zIndex={1001}
        onMouseEnter={showNav ? () => handleShowNav() : undefined}
      >
        {enterPress.display && (
          <Box id='testing' pos='absolute' bottom='0%' left='50%'>
            {enterPress.keyCode}
            {' | '}
            {enterPress.keyName}
          </Box>
        )}
        <Box
          id='show nav'
          pos='fixed'
          h='14px'
          w='100vw'
          left='0'
          top='0'
          onMouseEnter={() => handleShowNav()}
          pointerEvents={showNav ? 'none' : 'auto'}
        >
          {!showNav && !isInView && (
            <Center>
              <Icon
                as={AiOutlineCaretDown}
                pos='absolute'
                top='0'
                fontSize='20px'
                fill='brand.Cream'
              />
              <Icon
                as={AiOutlineCaretDown}
                pos='absolute'
                top='0'
                fontSize='18px'
                fill='brand.Charcoal'
              />
            </Center>
          )}
        </Box>
        <Box
          id='hide nav'
          pos='fixed'
          h='22px'
          w='100vw'
          left='0'
          top='94px'
          onMouseEnter={() => handleShowNav(true)}
          pointerEvents={showNav ? 'auto' : 'none'}
        >
          {showNav && isMobile && (
            <Center>
              <Icon
                as={AiOutlineCaretUp}
                pos='absolute'
                top='-24px'
                fontSize='20px'
                fill='brand.Cream'
                onClick={() => handleShowNav(true)}
              />
              <Icon
                as={AiOutlineCaretUp}
                pos='absolute'
                top='-24px'
                fontSize='18px'
                fill='brand.Charcoal'
                onClick={() => handleShowNav(true)}
              />
            </Center>
          )}
        </Box>
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
          <Stack
            direction='row'
            justify='space-between'
            w='6rem'
            align='center'
          >
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
                left={+cartItemQty <= 9 ? '35%' : '20%'}
                fontSize={13}
              >
                {cartItemQty}
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
          <Stack
            direction='row'
            justify='space-between'
            w='6rem'
            align='center'
          >
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
                bottom='2%'
                left={+cartItemQty <= 9 ? '35%' : '20%'}
                fontSize={13}
              >
                {cartItemQty}
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
              right='-23.5rem'
              borderRadius='0px'
              w='24rem'
              bgColor='brand.Cream'
              onBlur={() => handleSearchToggle(isSearchOpen)}
            >
              <Input
                id='nav-search-input'
                value={searchInput}
                placeholder='search'
                borderRadius='0px'
                w='24rem'
                bgColor='white'
                focusBorderColor='UI.4'
                borderStyle='inset'
                onChange={(e: React.SyntheticEvent) =>
                  setSearchInput((e.target as HTMLInputElement).value)
                }
                onKeyDown={(e: React.KeyboardEvent) => handleUserInput(e)}
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
                  value={searchInput}
                  placeholder='search'
                  borderRadius='0px'
                  bgColor='white'
                  focusBorderColor='UI.4'
                  borderStyle='inset'
                  onChange={(e: React.SyntheticEvent) =>
                    setSearchInput((e.target as HTMLInputElement).value)
                  }
                  onKeyDown={(e: React.KeyboardEvent) => handleUserInput(e)}
                />
              </FMC_Component>
            ))}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default Navigation;
