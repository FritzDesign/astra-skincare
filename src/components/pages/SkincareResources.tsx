import {
  Box,
  Grid,
  Stack,
  Image,
  Text,
  Divider,
  Skeleton,
  SkeletonText,
  Button,
  Badge
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useEffect } from 'react';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Lifestyle/skincare-resources-hero.png';
import placeholder from '../../assets/astra-card-ph.png';

const SkincareResources: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroImage}
        heading='Skincare Resources'
      />
      <Stack
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        mb='104px'
        mt='88px'
        direction='row'
        justify='space-between'
        align='flex-start'
        spacing='0px'
        h='432px'
        bgColor='brand.Cream'
      >
        <Stack
          px='96px'
          paddingY='64px'
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          overflow='hidden'
          width='712px'
          maxWidth='100%'
          background='brand.Cream'
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='40px'
              textTransform='capitalize'
              color='UI.1'
              alignSelf='stretch'
            >
              incorporate retinol into your routine
            </Text>
          </Stack>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            opacity='0.8'
            alignSelf='stretch'
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </Text>
          <Button size='lg' variant='brandPrimary'>
            Find Solutions
          </Button>
        </Stack>
        <Stack width={['280px', '280px', '494px']}>
          <Image src={placeholder} maxH='432px' objectFit='cover' />
        </Stack>
      </Stack>
      <Stack
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        mb='104px'
        mt='88px'
        direction='row'
        justify='space-between'
        align='flex-start'
        gap='16px'
        h='432px'
      >
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        mb='104px'
        direction='row'
        justify='flex-start'
        align='flex-start'
        spacing='0px'
        h='432px'
        bgColor='brand.Cream'
      >
        <Stack width={['280px', '280px', '494px']}>
          <Image src={placeholder} maxH='432px' objectFit='cover' />
        </Stack>

        <Stack
          px='96px'
          paddingY='64px'
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          overflow='hidden'
          width='712px'
          maxWidth='100%'
          background='brand.Cream'
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='40px'
              textTransform='capitalize'
              color='UI.1'
              alignSelf='stretch'
            >
              Niacinamide: An ingredient love Story
            </Text>
          </Stack>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.2'
            opacity='0.8'
            alignSelf='stretch'
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </Text>
          <Button size='lg' variant='brandPrimary'>
            Find Solutions
          </Button>
        </Stack>
      </Stack>
      <Stack
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        mb='104px'
        mt='88px'
        direction='row'
        justify='space-between'
        align='flex-start'
        gap='16px'
        h='432px'
      >
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        mb='104px'
        mt='88px'
        direction='row'
        justify='space-between'
        align='flex-start'
        gap='16px'
        h='432px'
      >
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
        <Stack justify='flex-start' align='center' spacing='16px'>
          <Stack width='290px' height='290px' maxWidth='100%'>
            <Image src={placeholder} h='290px' w='290px' objectFit='cover' />
          </Stack>
          <Badge variant='brandOutline'>Skincare</Badge>
          <Stack width='290px' height='58px' maxWidth='100%'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='24px'
              color='#000000'
              width='290px'
              maxWidth='100%'
              textAlign='center'
            >
              How to go vegan in your skincare routine
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkincareResources;
