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
  Badge,
  useMediaQuery
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

  const [isLessThan1656, isLessThan1056, isLessThan672] = useMediaQuery([
    '(max-width: 1656px)',
    '(max-width: 1056px)',
    '(max-width: 672px)'
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    // BlogPosts.splice(5, 1)
    // BlogPosts.splice(7, 1)
    setBlogPosts({
      section1: BlogPosts.slice(0, 4),
      section2: BlogPosts.slice(8, 12),
      section3: BlogPosts.slice(12, 16)
    });
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
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
        align='center'
        mt='104px'
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
      >
        <Stack
          mb='88px'
          direction={['column', 'column', 'row']}
          justify='space-between'
          h='100%'
          minW={['340px', '440px']}
          bgColor='brand.Cream'
        >
          <Stack
            pl={['32px', '32px', '80px', '96px']}
            pr={['32px', '32px']}
            py='64px'
            justify='space-between'
            align={['center', 'center', 'flex-start']}
            spacing='32px'
            overflow='hidden'
            w={['100%', '100%', '86%']}
            h={['300px', '300px', '320px', '428px']}
          >
            <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
              <Text
                textAlign={['center', 'center', 'left']}
                fontFamily='Marcellus'
                lineHeight='1.2'
                fontWeight='regular'
                fontSize={['28px', '28px', '28px', '28px', '32px', '40px']}
                color='UI.1'
                alignSelf='stretch'
              >
                {BlogPosts[5].title}
              </Text>
            </Stack>
            <Text
              display={['none', 'none', 'none', 'block']}
              fontFamily='Poppins'
              lineHeight='1.5'
              fontWeight='regular'
              fontSize={['12px', '12px', '14px', '14px', '16px', '16px']}
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
          <Stack h='100%'>
            <Image
              src={BlogPosts[5].image}
              h={['300px', '400px', '320px', '428px']}
              objectFit='cover'
            />
          </Stack>
        </Stack>
        <Stack
          mb='104px !important'
          direction='row'
          justify={isLessThan672 ? 'center' : 'space-between'}
          align='flex-start'
          gap='16px'
          w='100%'
        >
          {blogPosts.section1.map((post, i) => {
            if (isLessThan672 && i === 1) return;
            if (isLessThan1056 && i === 2) return;
            if (isLessThan1656 && i === 3) return;
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
          mb='104px !important'
          direction={['column', 'column', 'row']}
          justify='space-between'
          h='100%'
          minW={['340px', '440px']}
          w='100%'
          bgColor='brand.Cream'
        >
          <Stack h='100%'>
            <Image
              src={BlogPosts[7].image}
              h={['300px', '400px', '320px', '428px']}
              objectFit='cover'
            />
          </Stack>
          <Stack
            pl={['32px', '32px', '80px', '96px']}
            pr={['32px', '32px']}
            py='64px'
            justify='space-between'
            align={['center', 'center', 'flex-start']}
            spacing='32px'
            overflow='hidden'
            w={['100%', '100%', '86%']}
            h={['300px', '300px', '320px', '428px']}
          >
            <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
              <Text
                textAlign={['center', 'center', 'left']}
                fontFamily='Marcellus'
                lineHeight='1.2'
                fontWeight='regular'
                fontSize={['28px', '28px', '28px', '28px', '32px', '40px']}
                color='UI.1'
                alignSelf='stretch'
              >
                {BlogPosts[7].title}
              </Text>
            </Stack>
            <Text
              display={['none', 'none', 'none', 'block']}
              fontFamily='Poppins'
              fontWeight='regular'
              fontSize={['12px', '12px', '14px', '14px', '16px', '16px']}
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
          mb='104px !important'
          direction='row'
          justify={isLessThan672 ? 'center' : 'space-between'}
          align='flex-start'
          gap='16px'
          w='100%'
        >
          {blogPosts.section2.map((post, i) => {
            if (isLessThan672 && i === 1) return;
            if (isLessThan1056 && i === 2) return;
            if (isLessThan1656 && i === 3) return;
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
          mb='104px !important'
          direction='row'
          justify={isLessThan672 ? 'center' : 'space-between'}
          align='flex-start'
          gap='16px'
          w='100%'
        >
          {blogPosts.section3.map((post, i) => {
            if (isLessThan672 && i === 1) return;
            if (isLessThan1056 && i === 2) return;
            if (isLessThan1656 && i === 3) return;
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
      </Stack>
    </Box>
  );
};

export default SkincareResources;
