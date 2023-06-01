import {
  Stack,
  Text,
  Image,
  Button,
  Divider,
  Flex
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductProps } from '../models/Props';

const Product: React.FC<ProductProps> = ({
  isNew,
  image,
  title,
  handle,
  category,
  price,
  weight
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  return (
    <Stack
      justify='center'
      pos='relative'
      align='center'
      spacing='16px'
      w={['300px', '376px']}
      h='451px'
      my='2rem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        _active={{ transform: 'scale(0.99)' }}
        cursor='pointer'
        filter={isHovered ? 'brightness(0.7)' : 'brightness(1)'}
        src={image}
        minW={['300px', '376px']}
        minH={['275px', '345px']}
        objectFit='cover'
        objectPosition='center center'
        pos='relative'
        onClick={() => navigate(`${handle}`)}
      />
      {isNew && (
        <Stack
          bgColor='brand.Charcoal'
          borderRadius='50%'
          align='center'
          justify='center'
          width='72px'
          height='72px'
          pos='absolute'
          left='16px'
          top='0px'
        >
          <Text
            fontFamily='Inter'
            lineHeight='1.5'
            fontWeight='medium'
            fontSize='14px'
            color='#FFFFFF'
          >
            NEW
          </Text>
        </Stack>
      )}
      {isHovered && (
        <Button
          _active={{ transform: 'scale(0.99)' }}
          pos='absolute'
          variant='outline'
          colorScheme='blackAlpha'
          color='white'
          left='40%'
          top='30%'
          onClick={() => navigate(`${handle}`)}
          fontWeight='normal'
          fontFamily='Poppins'
          letterSpacing='1px'
        >
          View
        </Button>
      )}
      <Stack justify='flex-start' align='center' spacing='0px'>
        <Text
          fontFamily='Marcellus'
          lineHeight='1.2'
          fontWeight='regular'
          fontSize='24px'
          color='brand.Navy'
          width='290px'
          maxWidth='100%'
          textAlign='center'
        >
          {title}
        </Text>
        <Text
          fontFamily='Inter'
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='14px'
          color='UI.2'
          width='290px'
          maxWidth='100%'
          textAlign='center'
        >
          {category}
        </Text>
      </Stack>
      <Stack
        direction='row'
        justify='flex-start'
        align='center'
        spacing='16px'
        width='290px'
        maxWidth='100%'
      >
        {weight ? (
          <>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              ${price}0
            </Text>
            <Divider borderColor='UI.2' />
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
              minWidth='46px'
            >
              {weight}
            </Text>
          </>
        ) : (
          <Flex justifyContent='center' w='100%'>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              ${price}0
            </Text>
          </Flex>
        )}
      </Stack>
    </Stack>
  );
};

export default Product;
