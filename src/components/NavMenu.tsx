import * as React from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  Stack,
  MenuDivider,
  MenuGroup,
  MenuButton,
  Divider
} from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
// import { NavMenuProps } from '../models/Props';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const { isMenuOpen, closeMenu } = React.useContext<any>(ShopContext);

  const handleSelect = (path: string) => {
    navigate(path);
    if (isMenuOpen) closeMenu();
  };

  return (
    <Stack
      borderTop='2px solid'
      borderBottom='2px solid'
      borderColor='UI.4'
      mt='20px'
      bottom='-4px'
      right='0px'
      w={['100vw', '100vw', '75vw', '60vw', '48vw']}
      pos='absolute'
    >
      <Menu isOpen={isMenuOpen} isLazy>
        <MenuList
          w={['100vw', '100vw', '75vw', '60vw', '48vw']}
          display='flex'
          flexDir={['column', 'column', 'row-reverse']}
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
              onClick={() => handleSelect('/skin-concerns')}
            >
              Skin Concerns
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => navigate('/skincare-resources')}
            >
              Skincare Resources
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => navigate('/why-astra')}
            >
              Why Astra
            </MenuItem>
            <MenuItem
              alignSelf='stretch'
              onClick={() => navigate('/contact-us')}
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
            <MenuItem alignSelf='stretch'>My Account</MenuItem>
            <MenuItem alignSelf='stretch'>Order History</MenuItem>
            <MenuItem alignSelf='stretch'>Rewards</MenuItem>
          </MenuGroup>
          <Divider
            m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']}
            orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'}
            h='auto'
            w='auto'
            borderColor='UI.4'
          />
          <MenuGroup>
            <MenuItem alignSelf='stretch' onClick={() => navigate('/faq')}>
              F.A.Q.
            </MenuItem>
            <MenuItem alignSelf='stretch'>Shipping & Policies</MenuItem>
            <MenuItem alignSelf='stretch'>Disclaimer</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Stack>

    // <Chakra.Menu isLazy onOpen={() => openMenu()} onClose={() => closeMenu()}>
    //   <Chakra.MenuButton>
    //     <Chakra.Icon
    //       fill={accentColor1}
    //       w={30}
    //       h={30}
    //       cursor='pointer'
    //       as={isMenuOpen ? ReactIcons.MdMenuOpen : ReactIcons.MdMenu}
    //     />
    //   </Chakra.MenuButton>
    //   <Chakra.MenuList>
    //     <Chakra.MenuItem onClick={() => navigate('/')}>Home</Chakra.MenuItem>
    //     <Chakra.MenuItem onClick={() => navigate('/')}>
    //       Products
    //     </Chakra.MenuItem>
    //     <Chakra.MenuItem onClick={() => navigate('/')}>
    //       Featured Collection
    //     </Chakra.MenuItem>
    //     <Chakra.MenuItem onClick={() => navigate('/')}>About</Chakra.MenuItem>
    //     <Chakra.MenuItem onClick={() => navigate('/')}>Contact</Chakra.MenuItem>
    //   </Chakra.MenuList>
    // </Chakra.Menu>
  );
};

export default NavMenu;
