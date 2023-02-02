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
  const { closeMenu, isMenuOpen } = React.useContext<any>(ShopContext);

  // menu button and menu seperate, control state from outside component

  return (
    <Stack
      borderTop='2px solid'
      borderBottom='2px solid'
      borderColor='UI.4'
      mt='20px'
      bottom='-4px'
      right='0px'
      w={['100vw','100vw', '75vw','60vw', '48vw']}
      pos='absolute'
    >
      <Menu isOpen={isMenuOpen} isLazy>
        <MenuList w={['100vw','100vw', '75vw','60vw', '48vw']} display='flex' flexDir={['column', 'column', 'row-reverse']}>
          <MenuGroup>
            <MenuItem alignSelf='stretch'>Skincare Products</MenuItem>
            <MenuItem alignSelf='stretch'>Beauty Tools</MenuItem>
            <MenuItem alignSelf='stretch'>Skin Concerns</MenuItem>
            <MenuItem alignSelf='stretch'>Skincare Resources</MenuItem>
            <MenuItem alignSelf='stretch'>Help Me Choose</MenuItem>
            <MenuItem alignSelf='stretch'>Why Astra</MenuItem>
          </MenuGroup>
          <Divider m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']} orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'} h='auto' borderColor='UI.4'  />
          <MenuGroup>
            <MenuItem alignSelf='stretch'>My Account</MenuItem>
            <MenuItem alignSelf='stretch'>Order History</MenuItem>
            <MenuItem alignSelf='stretch'>Rewards</MenuItem>
          </MenuGroup>
          <Divider m={['20px 0px', '20px 0px', '0px 20px', '0px 20px']} orientation={window.innerWidth > 768 ? 'vertical' : 'horizontal'} h='auto' w='auto' borderColor='UI.4'  />
          <MenuGroup>
            <MenuItem alignSelf='stretch'>About Astra</MenuItem>
            <MenuItem alignSelf='stretch'>Terms of Service</MenuItem>
            <MenuItem alignSelf='stretch'>Customer Service</MenuItem>
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
