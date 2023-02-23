import React, { useEffect, useState } from 'react';
import { Stack, Icon, Flex, Image, Box } from '@chakra-ui/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { SPGalleryProps } from '../../models/Props';
import { FiX } from 'react-icons/fi';

const SPGallery: React.FC<SPGalleryProps> = ({
  photos,
  index,
  galleryLength,
  setSelectedIndex,
  setShowGallery
}) => {
  const [isArrowDisabled, setIsArrowDisabled] = useState({
    left: true,
    right: false
  });

  useEffect(() => {
    console.log(index);

    if (index + 1 >= galleryLength) {
      setIsArrowDisabled({ left: false, right: true });
    } else if (index === 0) {
      setIsArrowDisabled({ left: true, right: false });
    } else {
      setIsArrowDisabled({ left: false, right: false });
    }
  }, [index]);

  return (
    <Stack
      pos='fixed'
      top='0vh'
      zIndex={1200}
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
      bgColor='#00000090'
      userSelect='none'
      >
      <Flex
        pos='relative'
        maxW='90vw'
        h='fit-content'
        w='fit-content'
      >
        <Box
          _hover={{
            filter: 'brightness(1.25)',
            boxShadow: '0 0 12px #00000050'
          }}
          display={isArrowDisabled.left ? 'none' : 'block'}
          cursor='pointer'
          w='56px'
          h='56px'
          borderRadius='50%'
          bgColor='brand.Cream'
          pos='absolute'
          top='45%'
          left='-2%'
          onClick={() => setSelectedIndex((prev: any) => prev - 1)}
        >
          <Icon
            as={BsArrowLeft}
            cursor='pointer'
            pos='absolute'
            top='15px'
            left='15px'
            fontSize='24px'
          />
        </Box>
        <Image
          src={photos[index]}
          // maxH='80vh'
          // maxW='90vw'
          h='80vh'
          w='50vw'
          objectFit='cover'
          objectPosition='center center'
        />
        <Box
          _hover={{
            filter: 'brightness(1.25)',
            boxShadow: '0 0 12px #00000050'
          }}
          display={isArrowDisabled.right ? 'none' : 'block'}
          cursor='pointer'
          w='56px'
          h='56px'
          borderRadius='50%'
          bgColor='brand.Cream'
          pos='absolute'
          top='45%'
          right='-2%'
          onClick={() => setSelectedIndex((prev: any) => prev + 1)}
        >
          <Icon
            as={BsArrowRight}
            cursor='pointer'
            pos='absolute'
            top='15px'
            right='15px'
            fontSize='24px'
          />
        </Box>
        <Icon
          mixBlendMode='difference'
          pos='absolute'
          as={FiX}
          cursor='pointer'
          top='14px'
          right='14px'
          fontSize='28px'
          color='white'
          onClick={() => setShowGallery(false)}
        />
        <Icon
          mixBlendMode='overlay'
          pos='absolute'
          as={FiX}
          cursor='pointer'
          top='14px'
          right='14px'
          fontSize='28px'
          color='black'
          onClick={() => setShowGallery(false)}
        />
      </Flex>
    </Stack>
  );
};

export default SPGallery;
