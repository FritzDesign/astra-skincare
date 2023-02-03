import { Stack, Menu, Text, Icon, Image, Button, Link, Divider } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { MdStarRate, MdStarHalf } from 'react-icons/md';

import cardImage1 from '../assets/Cards/starry-night.png';
import cardImage2 from '../assets/Cards/squalene-serum.png';
import cardImage3 from '../assets/Cards/regeneration-kit.png';
import cardImage4 from '../assets/Cards/placeholder-img4.png';

const WhatsNew: React.FC = () => {
  return (
    <Stack
      paddingX='80px'
      paddingY='64px'
      justify='flex-start'
      align='flex-start'
      spacing='56px'
      // width='1368px'
      maxWidth='100%'
      background='Brand.Cream'
    >
      <Stack direction='row' h='100%' justify='space-between' w='100%'>
        <Stack
          direction='row'
          justify='flex-start'
          align='center'
          spacing='24px'
          w='90vw'
        >
          <Text
            fontFamily='Marcellus'
            lineHeight='1.4'
            fontWeight='regular'
            fontSize='32px'
            color='brand.Charcoal'
          >
            What’s New
          </Text>
          <Link
            _hover={{
              textDecor: 'none'
            }}
            borderBottom='1px solid'
            borderColor='brand.Charcoal'
            pb='4px'
            w='78px'
            fontFamily='Inter'
            textAlign='center'
            fontWeight='600'
            fontSize='14px'
          >SHOP ALL</Link>
        </Stack>
        <Stack
          padding='8px'
          direction='row'
          justify='center'
          align='center'
          spacing='24px'
        >
          <Icon as={BsChevronLeft} />
          <Icon as={BsChevronRight} />
        </Stack>
      </Stack>
      <Stack
        direction='row'
        justify='flex-start'
        align='flex-start'
        spacing='56px'
        h='492px'
      >
        <Stack
          justify='flex-start'
          pos='relative'
          align='flex-start'
          spacing='16px'
        >
          <Image src={cardImage1} />
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
          <Stack justify='flex-start' align='center' spacing='0px'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='Brand.Navy'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              Starry Night Hydration Kit
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
              Skincare Sets
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
              $123.00
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='58px'
          >
            <Button size='lg' variant='outline' colorScheme='blue'>
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarHalf} />
            </Stack>
          </Stack>
        </Stack>
        <Divider orientation='vertical' h='100%' borderColor='UI.2' />
        <Stack
          pos='relative'
          justify='flex-start'
          align='flex-start'
          spacing='16px'
        >
          <Image src={cardImage2} />
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
          <Stack justify='flex-start' align='center' spacing='0px'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='Brand.Navy'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              Squalene Serum
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
              Serums
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
              $123.00
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='58px'
          >
            <Button size='lg' variant='outline' colorScheme='blue'>
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarHalf} />
            </Stack>
          </Stack>
        </Stack>
        <Divider orientation='vertical' h='100%' borderColor='UI.2' />
        <Stack justify='flex-start' align='flex-start' spacing='16px'>
          <Image src={cardImage3} />
          <Stack justify='flex-start' align='center' spacing='0px'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='Brand.Navy'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              Regeneration Kit
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
              Skincare Sets
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
              $123.00
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='58px'
          >
            <Button size='lg' variant='outline' colorScheme='blue'>
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarHalf} />
            </Stack>
          </Stack>
        </Stack>
        <Divider orientation='vertical' h='100%' borderColor='UI.2' />
        <Stack justify='flex-start' align='flex-start' spacing='16px'>
          <Image src={cardImage3} />
          <Stack justify='flex-start' align='center' spacing='0px'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='Brand.Navy'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              Product Name
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
              Category Name Here
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
              $123.00
            </Text>
            <Text
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize='18px'
              color='UI.1'
              textAlign='center'
            >
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='flex-start'
            align='center'
            spacing='58px'
          >
            <Button size='lg' variant='outline' colorScheme='blue'>
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarRate} />
              <Icon as={MdStarHalf} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatsNew;
