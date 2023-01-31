// @ts-nocheck
import * as React from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router';
import { ImageWithTextProps } from '../models/Props';
import { Stack, Text, Button, Image } from '@chakra-ui/react';

import overlayImg from '../assets/image-with-text/astra-iwt-overlay.png';
import watermarkTR from '../assets/image-with-text/astra-wm-topright.png';
import watermarkBL from '../assets/image-with-text/astra-wm-bottomleft.png';

export const ImageWithText: React.FC<ImageWithTextProps> = ({
  reverse,
  image,
  heading,
  text
}) => (
  <Stack
    h='900px'
    direction='row'
    justify='center'
    align='center'
    spacing='119px'
    pos='relative'
  >
    <Image src={watermarkTR} pos='absolute' top='0px' right='0px' />
    <Image src={watermarkBL} pos='absolute' bottom='0px' left='-119px' />
    <Stack
      width='596px'
      height='623px'
      maxWidth='100%'
      align='center'
      justify='center'
      pos='relative'
    >
      <Stack
        align='center'
        justify='center'
        borderColor='brand.Black'
        borderStartWidth='1px'
        borderEndWidth='1px'
        borderTopWidth='1px'
        borderBottomWidth='1px'
        width='494px'
        height='623px'
        maxWidth='100%'
        zIndex={2}
        bgImage={image}
      />
      <Stack
        borderRadius='50%'
        width='220px'
        height='220px'
        maxWidth='100%'
        boxShadow='lg'
        right='-40px'
        bottom='60px'
        zIndex='10'
        pos='absolute'
      >
        <Image
          src={overlayImg}
          p='0'
          w='240px'
          h='240px'
          pos='absolute'
          objectPosition='center center'
          objectFit='cover'
        />
      </Stack>
    </Stack>
    <Stack
      justify='flex-start'
      align='flex-start'
      spacing='32px'
      width='493px'
      maxWidth='100%'
    >
      <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
        <Text
          fontFamily='Inter'
          lineHeight='1.2'
          fontWeight='bold'
          fontSize='16px'
          letterSpacing='0.1em'
          textTransform='uppercase'
          color='Brand . Peri / Default'
          alignSelf='stretch'
          zIndex={2}
        >
          SKIN QUIZ
        </Text>
        <Text
          fontFamily='Marcellus'
          lineHeight='1.4'
          fontWeight='regular'
          fontSize='32px'
          color='Brand.Black/Default'
          alignSelf='stretch'
          zIndex={2}
        >
          Build Your Ideal Skincare Routine
        </Text>
      </Stack>
      <Text
        fontFamily='Inter'
        lineHeight='1.5'
        fontWeight='medium'
        fontSize='18px'
        color='Brand.Plum/Default'
        opacity='0.8'
        height='166px'
        alignSelf='stretch'
        zIndex={2}
      >
        Whether you’re dealing with stubborn acne, looking to minimize fine
        lines and wrinkles, or just wanting to upgrade your regimen, Astra has
        quality dermatologist trusted products you’ll love. In just a few
        questions, we’ll determine your skin type and find the right collection
        for you.
      </Text>
      <Button
        _hover={{ opacity: 0.9 }}
        _active={{ transform: 'scale(0.98)' }}
        size='lg'
        fontSize='18px'
        color='brand.Cream'
        fontWeight='normal'
        bgColor='brand.Black'
        zIndex={2}
      >
        Find Solutions
      </Button>
    </Stack>
  </Stack>
);

// const ImageWithText: React.FC<ImageWithTextProps> = ({
//   reverse,
//   image,
//   heading,
//   text
// }) => {
//   const navigate = useNavigate();
//   const reverseSection = reverse ? 'row-reverse' : 'row';

//   const { themeColor2, accentColor1 } = React.useContext<any>(ShopContext);

//   return (
//     <Chakra.Box>
//       <Chakra.Flex flexDir={['column', reverseSection]} w='100%'>
//         <Chakra.Image objectFit='cover' w={['100%', '50%']} src={image} />
//         <Chakra.Flex
//           w={['100%', '50%']}
//           p='2rem'
//           flexDir='column'
//           justifyContent='center'
//           alignItems='center'
//         >
//           <Chakra.Heading mb='2rem'>
//             {heading || 'Placeholder Heading'}
//           </Chakra.Heading>
//           <Chakra.Text m='2rem' textAlign='center'>
//             {text ||
//               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi quam corporis nam fuga saepe doloribus aliquid eaque totam laboriosam eos, quia minima reiciendis soluta assumenda consectetur ea necessitatibus veniam. Aut optio consectetur nostrum deleniti unde non, sunt doloremque eligendi, illo vel totam maiores culpa officiis beatae vitae! Accusantium esse quisquam sapiente, quod optio voluptas eligendi dicta dolorem totam assumenda.'}
//           </Chakra.Text>
//           <Button
//             text='Browse'
//             textColor={accentColor1}
//             bgColor={themeColor2}
//             size={{ w: '10rem' }}
//             onClick={() => navigate('/products')}
//           />
//         </Chakra.Flex>
//       </Chakra.Flex>
//     </Chakra.Box>
//   );
// };

export default ImageWithText;
