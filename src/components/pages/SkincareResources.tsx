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
import { useEffect, useState } from 'react';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Lifestyle/skincare-resources-hero.png';
import placeholder from '../../assets/astra-card-ph.png';
import BlogPosts, { BlogPost } from '../../db/BlogPosts';
import { useNavigate } from 'react-router';

interface BlogPostsState {
  section1: BlogPost[];
  section2: BlogPost[];
  section3: BlogPost[];
}

const SkincareResources: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostsState>({
    section1: [],
    section2: [],
    section3: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    setBlogPosts({
      section1: BlogPosts.slice(0, 4),
      section2: BlogPosts.slice(8, 12),
      section3: BlogPosts.slice(12, 16)
    });
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
        h='100%'
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
        >
          <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
            <Text
              fontFamily='Marcellus'
              lineHeight='1.2'
              fontWeight='regular'
              fontSize='40px'
              color='UI.1'
              alignSelf='stretch'
            >
              {BlogPosts[5].title}
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
            {BlogPosts[5].paragraphs[0].slice(0, 200)}...
          </Text>
          <Button
            size='lg'
            variant='brandPrimary'
            onClick={() => navigate(`${BlogPosts[5].id}`)}
          >
            Read More
          </Button>
        </Stack>
        <Stack>
          <Image
            src={BlogPosts[5].image}
            h='100%'
            maxH='504px'
            objectFit='fill'
          />
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
        {blogPosts.section1.map((post, i) => {
          return (
            <Stack
              key={i}
              justify='flex-start'
              align='center'
              spacing='16px'
              onClick={() => navigate(`${post.id}`)}
            >
              <Stack width='290px' height='290px' maxWidth='100%'>
                <Image
                  _hover={{ filter: 'brightness(.75)' }}
                  cursor='pointer'
                  src={post.image}
                  h='290px'
                  w='290px'
                  objectFit='cover'
                />
              </Stack>
              <Badge variant='brandOutline'>{post.category}</Badge>
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
                  {post.title}
                </Text>
              </Stack>
            </Stack>
          );
        })}
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
          <Image src={BlogPosts[7].image} maxH='432px' objectFit='cover' />
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
              {BlogPosts[7].title}
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
            {BlogPosts[7].paragraphs[0].slice(0, 200)}...
          </Text>
          <Button
            size='lg'
            variant='brandPrimary'
            onClick={() => navigate(`${BlogPosts[7].id}`)}
          >
            Read More
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
        {blogPosts.section2.map((post, i) => {
          return (
            <Stack
              key={i}
              justify='flex-start'
              align='center'
              spacing='16px'
              onClick={() => navigate(`${post.id}`)}
            >
              <Stack width='290px' height='290px' maxWidth='100%'>
                <Image
                  _hover={{ filter: 'brightness(.75)' }}
                  cursor='pointer'
                  src={post.image}
                  h='290px'
                  w='290px'
                  objectFit='cover'
                />
              </Stack>
              <Badge variant='brandOutline'>{post.category}</Badge>
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
                  {post.title}
                </Text>
              </Stack>
            </Stack>
          );
        })}
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
        {blogPosts.section3.map((post, i) => {
          return (
            <Stack
              key={i}
              justify='flex-start'
              align='center'
              spacing='16px'
              onClick={() => navigate(`${post.id}`)}
            >
              <Stack width='290px' height='290px' maxWidth='100%'>
                <Image
                  _hover={{ filter: 'brightness(.75)' }}
                  cursor='pointer'
                  src={post.image}
                  h='290px'
                  w='290px'
                  objectFit='cover'
                />
              </Stack>
              <Badge variant='brandOutline'>{post.category}</Badge>
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
                  {post.title}
                </Text>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SkincareResources;
