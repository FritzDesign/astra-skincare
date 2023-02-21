import React, { useContext, useEffect, useState } from 'react';
import { Button, Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import BlogCard from '../BlogCard';
import { BlogPost } from '../../models/Props';
import { ShopContext } from '../../context/ShopContext';

const Blogs: React.FC = () => {
  const { blogPosts, getBlogPostsByCategory } = useContext<any>(ShopContext);

  useEffect(() => {
    window.scrollTo({ top: 127, left: 0, behavior: 'smooth' });
  }, [blogPosts]);

  const handleShowAllCategories = () => {
    getBlogPostsByCategory('all');
  };

  return (
    <Stack
      mx={['2rem', '2rem', '4rem', '4rem', '6rem', '8rem']}
      my={['2rem', '3rem', '5.5rem']}
      minH='max-content'
      gap='2rem'
    >
      <Grid
        id='products-container'
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)'
        ]}
        gap='3rem'
        justifyItems='center'
      >
        {blogPosts?.map((post: BlogPost) => {
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
      <Flex w='100%' justify='center'>
        <Button
          variant='brandPrimary'
          maxW='10rem'
          onClick={handleShowAllCategories}
        >
          Show All
        </Button>
      </Flex>
    </Stack>
  );
};

export default Blogs;
