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
  MenuList,
  Tabs,
  Tab
} from '@chakra-ui/react';
import { ProductMenuProps } from '../models/Props';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import watermarkTR from '../assets/Products/products-hero-backsplash-tr.png';
import watermarkBL from '../assets/Products/products-hero-backsplash-bl.png';
import { useState } from 'react';

const ProductMenu: React.FC<ProductMenuProps> = ({
  backdrop,
  hero,
  fallback,
  heading,
  categoryNames,
  menuItems
}) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isLessThan1280] = useMediaQuery(['(max-width: 1280px)']);
  const [dynamicMenuItems, setDynamicMenuItems] = useState(menuItems.sort());

  const handleUpdateSortMenu = (option: string) => {
    const tempItems = dynamicMenuItems;

    const selection1 = tempItems.slice(
      tempItems.indexOf(option),
      tempItems.indexOf(option) + 1
    );
    const selection2 = tempItems.filter((item) => item !== option).sort();
    setDynamicMenuItems([...selection1, ...selection2]);
    setIsSortMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Image
        src={backdrop}
        pos='absolute'
        w='100vw'
        h={['95px', '95px', '95px', '115px', '140px', '190px']}
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
          w='33%'
          h='40%'
          right='0'
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
          pointerEvents='none'
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
          fallback={<Image pb='56px' src={fallback} w='80%' />}
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
              direction={['column', 'column', 'row']}
              justifyContent={['center', 'center', 'space-between']}
              alignItems={['flex-start', 'flex-start', 'center']}
              gap={['16px', '16px', '32px']}
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
                <Flex as={Tabs} defaultIndex={categoryNames.length}>
                  {categoryNames.map((_name, i) => {
                    return (
                      <Tab
                        _selected={{ borderColor: 'brand.Lavender' }}
                        color='UI.1'
                        key={i}
                      >
                        {_name}
                      </Tab>
                    );
                  })}
                  <Tab
                    _selected={{ borderColor: 'brand.Lavender' }}
                    color='UI.1'
                  >
                    Show All
                  </Tab>
                </Flex>
              )}
            </Flex>
          )}

          <Flex
            direction={['column', 'column', 'row']}
            pr={['20px', '20px', '80px', '160px']}
            gap={['16px', '16px', '32px']}
            h='21px'
            justifyContent={['center', 'center', 'space-between']}
            alignItems={['flex-start', 'flex-start', 'center']}
          >
            <Text color='UI.2'>Sort By</Text>
            <Menu isOpen={isSortMenuOpen}>
              <MenuButton onClick={() => setIsSortMenuOpen((prev) => !prev)}>
                <Flex
                  border='1px solid'
                  borderColor='UI.3'
                  borderRadius='2px'
                  boxSizing='border-box'
                  alignItems='center'
                  p='2px 4px 2px 8px'
                  justify='space-between'
                  w={['140px', '140px', '165px', '190px']}
                >
                  <Text>{dynamicMenuItems[0]}</Text>
                  <Center>
                    <Icon
                      as={isSortMenuOpen ? BiChevronUp : BiChevronDown}
                      fontSize='24px'
                    ></Icon>
                  </Center>
                </Flex>
              </MenuButton>
              <MenuList minW='189px' w='190px' p='.5rem 1rem'>
                {dynamicMenuItems.map((item, i) => {
                  if (i < 1) return;
                  return (
                    <MenuItem
                      color='UI.1'
                      fontSize='14px'
                      key={i}
                      ml='0'
                      pl='0'
                      onClick={() => handleUpdateSortMenu(item)}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

export default ProductMenu;
