import * as React from 'react';
import { Stack, Image, Button, Box } from '@chakra-ui/react';
import { GalleryCardProps } from '../../models/Props';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router';
import { encodeQuery } from '../../utils/helpers';

export const GalleryCard: React.FC<GalleryCardProps> = ({ btnText, image }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { fetchCollectionByHandle } = React.useContext<any>(ShopContext);
  const navigate = useNavigate();

  const handleClick = () => {
    fetchCollectionByHandle(encodeQuery(btnText));
    navigate('/skincare-products');
  };

  return (
    <Stack h={['272px', '392px']} m='16px !important'>
      <Box
        pos='relative'
        h={['200px', '320px']}
        w={['327px', '290px']}
        borderColor='brand.Black'
        border={['1px solid', 'none']}
        mb='24px'
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          filter={isHovered ? 'brightness(0.7)' : 'brightness(1)'}
          cursor='pointer'
          h={['200px', '320px']}
          w={['327px', '290px']}
          src={image}
          objectFit='cover'
        />
        {isHovered && (
          <Button
            _active={{ transform: 'scale(0.99)' }}
            pos='absolute'
            variant='outline'
            colorScheme='blackAlpha'
            color='white'
            left='37%'
            top='40%'
            onClick={handleClick}
            fontWeight='normal'
            fontFamily='Poppins'
            letterSpacing='1px'
          >
            View
          </Button>
        )}
      </Box>
      <Button
        _hover={{ bgColor: 'brand.Charcoal', color: 'brand.Cream' }}
        _active={{ transform: 'scale(0.98)', filter: 'brightness(1.1)' }}
        size='lg'
        variant='outline'
        colorScheme='brand.Black'
        w='100%'
        fontWeight='400'
        fontFamily='Poppins'
        letterSpacing='0'
        fontSize='16px'
        onClick={handleClick}
      >
        {btnText}
      </Button>
    </Stack>
  );
};
