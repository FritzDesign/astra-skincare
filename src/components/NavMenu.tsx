import * as React from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  Stack,
  MenuGroup,
  Icon,
  Divider,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const { isMenuOpen, closeMenu } = React.useContext<any>(ShopContext);

  const handleSelect = (path: string) => {
    navigate(path);
    if (isMenuOpen) closeMenu();
  };

  const handleSocialNav = (socialSite: string) => {
    window.open(socialSite, '_blank');
  };

  return (
    <Stack
      borderTop='2px solid'
      borderBottom='2px solid'
      borderColor='UI.4'
      mt='20px'
      bottom='-4px'
      right='0px'
      w={['100vw', '100vw', '100vw', '80vw', '64vw']}
      pos='absolute'
    >
      <Menu isOpen={isMenuOpen} isLazy>
        <MenuList
          w={['140vw', '100vw', '100vw', '80vw', '64vw']}
          display='flex'
          flexDir={['column', 'column', 'row']}
        >
          <MenuGroup>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/skincare-products')}
            >
              Skincare Products
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/beauty-tools')}
            >
              Beauty Tools
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/skincare-resources')}
            >
              Skincare Resources
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/why-astra')}
            >
              Why Astra
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/contact-us')}
            >
              Contact Us
            </MenuItem>
          </MenuGroup>
          <Divider
            m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']}
            orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'}
            h='auto'
            borderColor='UI.4'
          />
          <MenuGroup>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/login')}
            >
              My Account
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/login')}
            >
              Order History
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/login')}
            >
              Rewards
            </MenuItem>
          </MenuGroup>
          <Divider
            m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']}
            orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'}
            h='auto'
            w='auto'
            borderColor='UI.4'
          />
          <MenuGroup>
            <MenuItem alignSelf='stretch' onClick={() => handleSelect('/faq')}>
              F.A.Q.
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/policies')}
            >
              Shipping & Policies
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => handleSelect('/disclaimer')}
            >
              Disclaimer
            </MenuItem>
          </MenuGroup>
          <Divider
            m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']}
            orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'}
            h='auto'
            w='auto'
            borderColor='UI.4'
          />
          <MenuGroup>
            <MenuItem
              alignSelf='stretch'
              _active={{ textDecor: 'none' }}
              _hover={{ textDecor: 'none' }}
            >
              Follow Us
            </MenuItem>
            <MenuItem alignSelf='stretch'>
              <Flex gap='1.25rem'>
                <Icon
                  as={BsFacebook}
                  fontSize='20px'
                  onClick={() => handleSocialNav('https://www.facebook.com')}
                />
                <Icon
                  as={BsPinterest}
                  fontSize='20px'
                  onClick={() => handleSocialNav('https://www.pinterest.com')}
                />
                <Icon
                  as={BsInstagram}
                  fontSize='20px'
                  onClick={() => handleSocialNav('https://www.instagram.com')}
                />
              </Flex>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default NavMenu;
