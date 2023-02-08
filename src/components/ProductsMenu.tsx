import {
  Stack,
  Image,
  Text,
  Flex,
  Link,
  Menu,
  MenuButton,
  Icon,
  Center
} from '@chakra-ui/react';
import { ProductMenuProps } from '../models/Props';
import { BiChevronDown } from 'react-icons/bi';

import watermarkTR from '../assets/Products/products-hero-backsplash-tr.png'
import watermarkBL from '../assets/Products/products-hero-backsplash-bl.png'

const ProductMenu: React.FC<ProductMenuProps> = ({
  backdrop,
  hero,
  heading,
  categoryNames,
  menuItems
}) => {
  return (
    <>
      <Image src={backdrop} pos='absolute' w='100vw' h='190px' zIndex={-2} />
      <Stack
        pos='relative'
        p='4rem'
        h='fit-content'
        alignItems='center'
        justifyContent='center'
      >
      <Image src={watermarkTR} pos='absolute' right='0%' top='0%' zIndex={-1} />
      <Image src={watermarkBL} pos='absolute' left='0%' bottom='20%' zIndex={-1} />
        <Text
          pos='absolute'
          fontFamily='Marcellus'
          fontSize='56px'
          top='6px'
          textShadow='1px 1px 3px #C4B1A8'
          color='UI.6'
        >
          {heading}
        </Text>
        <Image pb='56px' src={hero} w='80%' />
        <Flex
          w='100vw'
          justifyContent='space-between'
          alignItems='center'
          bgColor='brand.Cream'
          fontFamily='Poppins'
        >
          <Flex justifyContent='space-between' gap='32px' py='32px' pl='160px'>
            <Text color='UI.2'>Filter By</Text>
            {categoryNames.map((_name, i) => {
              return (
                <Link color='UI.1' key={i}>
                  {_name}
                </Link>
              );
            })}
          </Flex>
          <Flex pr='160px' gap='16px' h='21px' alignItems='center'>
            <Text color='UI.2'>Sort By</Text>
            <Menu>
              <MenuButton>
                <Flex
                  border='1px solid'
                  borderColor='UI.3'
                  borderRadius='2px'
                  boxSizing='border-box'
                  alignItems='center'
                  p='2px 4px 2px 8px'
                  gap='5rem'
                >
                  {menuItems.map((item, i) => {
                    return (
                      <Text color='UI.1' fontSize='14px' key={i}>
                        {item}
                      </Text>
                    );
                  })}
                  <Center>
                    <Icon as={BiChevronDown} fontSize='24px'></Icon>
                  </Center>
                </Flex>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

export default ProductMenu;
