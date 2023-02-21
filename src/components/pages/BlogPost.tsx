import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useNavigate, useParams } from 'react-router';
import { getBlogPostById } from '../../db/BlogPosts';
import { BlogPost as BlogPostInterface } from '../../models/Props';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<BlogPostInterface>();
  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      setPost(getBlogPostById(+postId));
    }
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, [post]);

  if (!post) {
    return (
      <Box>
        <Flex
          justify='center'
          mt='5rem'
          mb='5.5rem'
          mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
        >
          <Stack maxW='1004px'>
            <Stack w='fit-content'>
              <Heading
                fontFamily='Marcellus'
                fontWeight='bold'
                color='brand.Charcoal'
                textAlign={['center', 'center', 'left']}
                mb='2rem'
              >
                No Post Found
              </Heading>
              <Button
                variant='brandPrimary'
                onClick={() => navigate('/skincare-resources')}
              >
                Go Back
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    );
  }

  return (
    <Box>
      <ProductMenu
        hero={heroImage}
        fallback={heroFb}
        backdrop={heroBackdrop}
        heading='Blog'
      />
      <Flex
        justify='center'
        mt='5rem'
        mb='5.5rem'
        mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
      >
        <Stack maxW='1004px'>
          <Stack w='fit-content'>
            <Heading
              fontFamily='Marcellus'
              fontWeight='bold'
              color='brand.Charcoal'
              textAlign={['center', 'center', 'left']}
            >
              {post.title}
            </Heading>
            <Text
              mt='0px !important'
              mb='1rem !important'
              fontFamily='Inter'
              fontWeight='bold'
              color='brand.Lavender'
              pl='1rem'
              textAlign={['center', 'center', 'left']}
            >
              {post.author}
            </Text>
          </Stack>
          <Stack align='center'>
            {post.paragraphs.map((paragraph: string, i) => {
              return (
                <Text
                  key={i}
                  fontFamily='Poppins'
                  color='brand.Charcoal'
                  textAlign={['center', 'center', 'left']}
                  mb='2rem !important'
                >
                  {paragraph}
                </Text>
              );
            })}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default BlogPost;
