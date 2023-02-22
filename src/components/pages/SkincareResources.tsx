import {
  Box,
  Stack,
  Image,
  Text,
  Button,
  useMediaQuery,
  Grid
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import React, { useEffect, useState } from 'react';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Lifestyle/skincare-resources-hero.png';
import BlogPosts from '../../db/BlogPosts';
import { useNavigate } from 'react-router';
import BlogCard from '../BlogCard';
import { BlogPost } from '../../models/Props';

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
    const _blogs = [...BlogPosts];
    _blogs.splice(5, 1);
    _blogs.splice(6, 1);

    setBlogPosts({
      section1: _blogs.slice(0, 4),
      section2: _blogs.slice(5, 9),
      section3: _blogs.slice(10, 14)
    });
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
        fallback={heroImage}
        heading='Skincare Resources'
      />
      <Stack
        align='center'
        mt={['32px', '64px', '88px', '104px']}
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
              {BlogPosts[5].paragraphs![0].slice(0, 200)}...
            </Text>
            <Button
              size='lg'
              variant='brandPrimary'
              onClick={() => navigate(`/skincare-resources/${BlogPosts[5].id}`)}
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
        <Grid
          templateColumns='repeat(4, 1fr)'
          gap='1rem'
          justifyItems='center'
          overflowX='scroll'
          pb='1rem'
          mb='5rem !important'
          w='100%'
        >
          {blogPosts.section1.map((post) => {
            return (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                category={post.category}
                image={post.image}
                paragraphs={post.paragraphs}
              />
            );
          })}
        </Grid>
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
              {BlogPosts[7].paragraphs![0].slice(0, 200)}...
            </Text>
            <Button
              size='lg'
              variant='brandPrimary'
              onClick={() => navigate(`/skincare-resources/${BlogPosts[7].id}`)}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
        <Grid
          templateColumns='repeat(4, 1fr)'
          gap='1rem'
          justifyItems='center'
          overflowX='scroll'
          pb='1rem'
          mb='5rem !important'
          w='100%'
        >
          {blogPosts.section2.map((post, i) => {
            return (
              <React.Fragment key={i}>
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  category={post.category}
                  image={post.image}
                  paragraphs={post.paragraphs}
                />
              </React.Fragment>
            );
          })}
        </Grid>
        <Grid
          templateColumns='repeat(4, 1fr)'
          gap='1rem'
          justifyItems='center'
          overflowX='scroll'
          pb='1rem'
          mb='5rem !important'
          w='100%'
        >
          {blogPosts.section3.map((post, i) => {
            return (
              <React.Fragment key={i}>
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  category={post.category}
                  image={post.image}
                  paragraphs={post.paragraphs}
                />
              </React.Fragment>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default SkincareResources;
