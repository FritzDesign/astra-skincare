import React from 'react';
import { Stack, Image, Text, Divider } from '@chakra-ui/react';
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
  const navigate = useNavigate();
  return (
    <Stack
      justify='flex-start'
      pos='relative'
      align='flex-start'
      spacing='16px'
      h='488px'
    >
      <Image
        src={image}
        w='376px'
        h='345px'
        minH='345px'
        objectFit='cover'
        cursor='pointer'
        onClick={
          category === 'beautyTools'
            ? () => navigate(`/beauty-tools/${encodeQuery(title)}`)
            : () => navigate(`/skincare-products/${encodeQuery(title)}`)
        }
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
