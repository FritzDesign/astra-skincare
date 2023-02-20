import { Box, Stack, Image, Text, Icon, Heading, Flex } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useEffect } from 'react';
import { IoMdQuote } from 'react-icons/io';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';
import bethSmith from '../../assets/beth-smith.png';

const WhyAstra: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroFb}
        heading='Why Astra'
        showMenuBar={false}
      />
      <Flex w='100%' justify='center'>
        <Stack
          paddingX={['2rem', '3rem', '3rem', '0rem']}
          justify='center'
          align='center'
          spacing='1.5rem'
          mt='88px'
          maxW='1004px'
        >
          <Heading fontFamily='Inter' color='brand.Lavender'>
            ABOUT ASTRA
          </Heading>
          <Text fontFamily='Poppins' color='UI.2'>
            ASTRA Skincare is a company founded on the belief that skincare
            should be accessible and effective for all. Our mission is to
            empower individuals to feel confident and beautiful in their own
            skin, and we achieve this by providing high-quality, affordable
            skincare products.
          </Text>
          <Text fontFamily='Poppins' color='UI.2'>
            Our founder, Beth, struggled with acne-prone skin for years, and she
            tried countless products that either didn't work or were too
            expensive. Frustrated with the lack of options, Beth decided to take
            matters into her own hands and create a skincare line that catered
            to all skin types and concerns.
          </Text>
          <Text fontFamily='Poppins' color='UI.2'>
            ASTRA Skincare was born from this passion to create products that
            were effective, affordable, and inclusive. We believe that everyone
            deserves to feel confident and beautiful, and our skincare line
            reflects that belief. Our products are formulated with high-quality
            ingredients that are gentle yet effective, and we strive to use
            natural and organic ingredients whenever possible.
          </Text>
          <Text fontFamily='Poppins' color='UI.2'>
            We understand that skincare can be overwhelming, and that's why we
            offer personalized skincare consultations to our customers. Our team
            of skincare experts can help you determine your skin type and
            recommend products that are suited to your specific concerns.
          </Text>
          <Text fontFamily='Poppins' color='UI.2'>
            At ASTRA Skincare, we also believe in giving back to our community.
            We partner with local organizations that support mental health and
            wellness, as we believe that taking care of your skin is just one
            aspect of self-care.
          </Text>
          <Text fontFamily='Poppins' color='UI.2'>
            We're committed to creating a skincare brand that's inclusive,
            affordable, and effective. We believe that skincare is a form of
            self-love, and we're honored to be a part of our customers' skincare
            journey.
          </Text>
        </Stack>
      </Flex>
      <Stack
        paddingX={['2rem', '3rem', '166px']}
        direction={['column', 'row']}
        justify='center'
        align='center'
        spacing='102px'
        my='88px'
      >
        <Stack
          pos='relative'
          borderColor='UI.1'
          borderStartWidth='2px'
          borderEndWidth='2px'
          borderTopWidth='2px'
          borderBottomWidth='2px'
          width={['280px', '322px']}
          height={['280px', '322px']}
          maxWidth='100%'
        >
          <Image src={bethSmith} />
          <Icon
            as={IoMdQuote}
            pos='absolute'
            left='-20%'
            color='brand.Lavender'
            transform='rotate(180deg)'
            fontSize='96px'
          />
        </Stack>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='32px'
          width='612px'
          maxWidth='100%'
          px={['2rem', '3rem', '0rem']}
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Inter'
              lineHeight='1.2'
              fontWeight='bold'
              fontSize='16px'
              letterSpacing='0.1em'
              textTransform='uppercase'
              color='brand.Lavender'
              alignSelf='stretch'
            >
              FROM THE OWNER
            </Text>
          </Stack>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize='24px'
            color='UI.1'
            opacity='0.8'
            alignSelf='stretch'
          >
            Loving your skin is an act of self-love, whatever that looks like
            for you and how good you feel about it. It is personal and unique to
            each person.”
          </Text>
          <Text
            fontFamily='Poppins'
            lineHeight='1.5'
            fontWeight='regular'
            fontSize='16px'
            color='UI.1'
            opacity='0.8'
            alignSelf='stretch'
          >
            Beth Smith, Founder and Liscensed Skincare Therapist
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WhyAstra;
