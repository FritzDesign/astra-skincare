import React, { useContext, useState } from 'react';
import { Badge, Button, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { BlogPost } from '../models/Props';
import { ShopContext } from '../context/ShopContext';

const BlogCard: React.FC<BlogPost> = ({ id, title, category, image }) => {
  const [isHovered, setIsHovered] = useState({ image: false, category: false });
  const { getBlogPostsByCategory } = useContext<any>(ShopContext);

  const navigate = useNavigate();

  const handleCategoryNavigate = () => {
    getBlogPostsByCategory(category);
    navigate('/skincare-resources/blogs');
  };

  return (
    <Stack justify='flex-start' align='center' spacing='16px'>
      <Stack
        pos='relative'
        width='290px'
        height='290px'
        maxWidth='100%'
        onClick={() => navigate(`/skincare-resources/${id}`)}
        onMouseEnter={() => setIsHovered({ image: true, category: false })}
        onMouseLeave={() => setIsHovered({ image: false, category: false })}
      >
        <Image
          _hover={{ filter: 'brightness(.75)' }}
          cursor='pointer'
          src={image}
          h='290px'
          w='290px'
          objectFit='cover'
        />
        {isHovered.image && (
          <Button
            _hover={{
              borderColor: 'brand.Charcoal',
              bgColor: 'brand.Cream',
              color: 'brand.Charcoal'
            }}
            _active={{ transform: 'scale(0.99)' }}
            pos='absolute'
            variant='outline'
            colorScheme='blackAlpha'
            color='white'
            left='37%'
            top='40%'
            fontWeight='normal'
            fontFamily='Poppins'
            letterSpacing='1px'
          >
            View
          </Button>
        )}
      </Stack>
      <Badge
        cursor='pointer'
        variant={isHovered.category ? 'brandSolid' : 'brandOutline'}
        onClick={handleCategoryNavigate}
        onMouseEnter={() => setIsHovered({ image: false, category: true })}
        onMouseLeave={() => setIsHovered({ image: false, category: false })}
      >
        {category}
      </Badge>
      <Stack width='290px' maxWidth='100%'>
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
          {title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
