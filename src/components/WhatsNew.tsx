import {
  Stack,
  Menu,
  Text,
  Icon,
  Image,
  Button,
  Link,
  Divider,
  Flex,
  useFocusOnShow,
  useMenuPositioner
} from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { MdStarRate, MdStarHalf } from 'react-icons/md';

import cardImage1 from '../assets/Cards/starry-night.png';
import cardImage2 from '../assets/Cards/squalene-serum.png';
import cardImage3 from '../assets/Cards/regeneration-kit.png';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import FMC_Component from '../animations/defaults';
import { useNavigate } from 'react-router';

const WhatsNew: React.FC = () => {
  const [arrowDisabled, setArrowDisabled] = useState({
    left: true,
    right: false
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '0% 0% -80% 0%'
  });
  const rightClickRef = useRef(0);

  const navigate = useNavigate();

  const handleSlideTranslate = (direction: string) => {
    const cardWidth = 402;
    const cardContainer = document.getElementById(
      'wn-card-container'
    ) as HTMLDivElement;
    cardContainer.style.transition = 'transform 1s ease';

    if (direction === 'right') {
      rightClickRef.current++;

      cardContainer.style.transform = `translateX(-${
        cardWidth * rightClickRef.current
      }px)`;
    } else {
      if (rightClickRef.current) rightClickRef.current--;
      cardContainer.style.transform = `translateX(-${
        cardWidth * rightClickRef.current
      }px)`;
    }
    setTimeout(() => {
      updateButtons();
    }, 1000);
  };

  const updateButtons = () => {
    const WNContainerPosition = (
      document.getElementById('wn-container')! as HTMLDivElement
    ).getBoundingClientRect();
    const cardContainerPosition = (
      document.getElementById('wn-card-container')! as HTMLDivElement
    ).getBoundingClientRect();

    if (
      WNContainerPosition &&
      cardContainerPosition &&
      WNContainerPosition.right >= cardContainerPosition.right
    ) {
      setArrowDisabled({ left: false, right: true });
    } else if (
      WNContainerPosition &&
      cardContainerPosition &&
      WNContainerPosition.left <= cardContainerPosition.left
    ) {
      setArrowDisabled({ right: false, left: true });
    } else {
      setArrowDisabled({ right: false, left: false });
    }
  };

  return (
    <FMC_Component
      display='flex'
      flexDirection='column'
      id='wn-container'
      paddingX={['80px', '240px']}
      paddingY='64px'
      justifyContent='flex-start'
      alignItems='flex-start'
      gap='56px'
      background='brand.Cream'
      overflow='hidden'
      ref={containerRef}
      initial={{
        transform: 'translateY(-420px)'
      }}
      animate={
        isInView && {
          transform: 'translateY(0px)'
        }
      }
      // @ts-ignore
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
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
            onClick={() => navigate('/skincare-products')}
          >
            SHOP ALL
          </Link>
        </Stack>
        <Stack
          padding='8px'
          direction='row'
          justify='center'
          align='center'
          spacing='24px'
        >
          <Icon
            as={BsChevronLeft}
            cursor='pointer'
            pointerEvents={arrowDisabled.left ? 'none' : 'auto'}
            opacity={arrowDisabled.left ? 0.5 : 1}
            onClick={() => handleSlideTranslate('left')}
          />
          <Icon
            as={BsChevronRight}
            cursor='pointer'
            pointerEvents={arrowDisabled.right ? 'none' : 'auto'}
            opacity={arrowDisabled.right ? 0.5 : 1}
            onClick={() => handleSlideTranslate('right')}
          />
        </Stack>
      </Stack>
      <Stack
        id='wn-card-container'
        direction='row'
        justify='flex-start'
        align='flex-start'
        spacing='56px'
        h='492px'
        mt='56px'
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
            </Stack>
          </Stack>
        </Stack>
        <Divider orientation='vertical' h='100%' borderColor='UI.2' />
        <Stack
          justify='flex-start'
          pos='relative'
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
            </Stack>
          </Stack>
        </Stack>
        <Divider orientation='vertical' h='100%' borderColor='UI.2' />
        <Stack
          justify='flex-start'
          pos='relative'
          align='flex-start'
          spacing='16px'
        >
          <Image src={cardImage3} />
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
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
              1.5 oz
            </Text>
          </Stack>
          <Stack
            direction='row'
            justify='space-between'
            align='center'
            w='100%'
          >
            <Button
              size='sm'
              fontFamily='Inter'
              fontWeight='500'
              borderRadius='2px'
              px='1.5rem'
              variant='outline'
              borderColor='UI.2'
              color='brand.Charcoal'
            >
              More Info
            </Button>
            <Stack
              direction='row'
              justify='flex-start'
              align='center'
              spacing='0px'
            >
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarRate} h='24px' w='24px' fill='brand.Lavender' />
              <Icon as={MdStarHalf} h='24px' w='24px' fill='brand.Lavender' />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </FMC_Component>
  );
};

export default WhatsNew;
