import React from 'react';
import { Stack, Image, Text, Divider, Box, Button } from '@chakra-ui/react';
import { ScaleableGalleryCardProps as CardProps } from '../models/Props';
import { useNavigate } from 'react-router';
import { encodeQuery } from '../utils/helpers';

const ScaleableGalleryCard: React.FC<CardProps> = ({
  image,
  title,
  isNew,
  category,
  price,
  weight
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const navigate = useNavigate();
  return (
    <Stack
      justify='flex-start'
      pos='relative'
      align='flex-start'
      spacing='16px'
      h='488px'
    >
      <Box
        pos='relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={
          category === 'beautyTools'
            ? () => navigate(`/beauty-tools/${encodeQuery(title)}`)
            : () => navigate(`/skincare-products/${encodeQuery(title)}`)
        }
      >
        <Image
          src={image}
          loading='lazy'
          filter={isHovered ? 'brightness(0.7)' : 'brightness(1)'}
          w='376px'
          h='345px'
          minH='345px'
          objectFit='cover'
          cursor='pointer'
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
            fontWeight='normal'
            fontFamily='Poppins'
            letterSpacing='1px'
          >
            View
          </Button>
        )}
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
            top='16px'
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
      </Box>
      <Stack
        h='165px'
        maxH='165px'
        justify='space-between'
        align='center'
        w='100%'
      >
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
            {weight} oz
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScaleableGalleryCard;
