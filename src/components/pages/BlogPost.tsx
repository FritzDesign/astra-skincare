import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useParams } from 'react-router';
import {
  BlogPost as BlogPostInterface,
  getBlogPostById
} from '../../db/BlogPosts';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<BlogPostInterface>();
  const { postId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (postId) {
      setPost(getBlogPostById(+postId));
    }
  }, []);

  if (!post) {
    return <Box></Box>;
  }
  console.log(post);

  return (
    <Box>
      <ProductMenu
        hero={heroImage}
        fallback={heroFb}
        backdrop={heroBackdrop}
        heading='Blog'
      />
      <Flex justify='center' mt='5rem' mb='5.5rem'>
        <Stack maxW='1004px'>
          <Stack w='fit-content'>
            <Heading
              fontFamily='Marcellus'
              fontWeight='bold'
              color='brand.Charcoal'
              textAlign='left'
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
              textAlign='left'
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
                  textAlign='left'
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
