import {
  Stack,
  Image,
  Text,
  Flex,
  Link,
  Menu,
  MenuButton,
  Icon,
  Center,
  useMediaQuery,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { ProductMenuProps } from '../models/Props';
import { BiChevronDown } from 'react-icons/bi';

import watermarkTR from '../assets/Products/products-hero-backsplash-tr.png';
import watermarkBL from '../assets/Products/products-hero-backsplash-bl.png';

const ProductMenu: React.FC<ProductMenuProps> = ({
  backdrop,
  hero,
  fallback,
  heading,
  categoryNames,
  menuItems
}) => {
  const [isMobile, isLessThan1280] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 1280px)'
  ]);

  return (
    <>
      <Image
        src={backdrop}
        pos='absolute'
        w='100vw'
        h={['95px', '190px']}
        zIndex={-2}
      />
      <Stack
        pos='relative'
        p={['4rem 1rem', '4rem 1rem', '4rem 1rem', '4rem']}
        h='fit-content'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={watermarkTR}
          pos='absolute'
          w={['33%', '33%', '33%', '50%', '100%']}
          h={['33%', '33%', '33%', '50%', '100%']}
          right='0%'
          top='0%'
          zIndex={-1}
        />
        <Image
          src={watermarkBL}
          pos='absolute'
          left='0%'
          bottom='20%'
          zIndex={-1}
        />
        <Text
          pos='absolute'
          fontFamily='Marcellus'
          fontSize={['32px', '40px', '48px', '56px']}
          top={['20px', '6px']}
          textShadow='1px 1px 3px #C4B1A8'
          color='UI.6'
        >
          {heading}
        </Text>
        <Image
          pb='56px'
          fallback={<Image pb='56px' src={fallback} w='80%' minH='370px' />}
          fallbackSrc={fallback}
          src={hero}
          w={['100%', '90%', '80%']}
        />
        <Flex
          w='100vw'
          justifyContent={categoryNames ? 'space-between' : 'center'}
          alignItems={['flex-start', 'center']}
          bgColor='brand.Cream'
          fontFamily='Poppins'
          py={['16px', '32px']}
        >
          {categoryNames && (
            <Flex
              direction={['column', 'row']}
              justifyContent='space-between'
              alignItems={['flex-start', 'center']}
              gap={['16px', '32px']}
              pl={['20px', '40px', '80px', '160px']}
            >
              <Text color='UI.2'>Filter By</Text>
              {isLessThan1280 ? (
                <Menu isOpen={false}>
                  <MenuButton>
                    <Flex
                      border='1px solid'
                      borderColor='UI.3'
                      borderRadius='2px'
                      boxSizing='border-box'
                      alignItems='center'
                      p='2px 4px 2px 8px'
                      gap='3.5rem'
                    >
                      <Text color='UI.1' fontSize='14px'>
                        {categoryNames[0]}
                      </Text>
                      <MenuList>
                        {categoryNames.map((_name, i) => {
                          return (
                            <MenuItem color='UI.1' fontSize='14px' key={i}>
                              {_name}
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                      <Center>
                        <Icon as={BiChevronDown} fontSize='24px'></Icon>
                      </Center>
                    </Flex>
                  </MenuButton>
                </Menu>
              ) : (
                categoryNames.map((_name, i) => {
                  return (
                    <Link color='UI.1' key={i}>
                      {_name}
                    </Link>
                  );
                })
              )}
            </Flex>
          )}

          <Flex
            direction={['column', 'row']}
            pr={['20px', '40px', '80px', '160px']}
            gap='16px'
            h='21px'
            justifyContent='space-between'
          >
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
                  gap={['4rem', '4rem', '5rem']}
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
