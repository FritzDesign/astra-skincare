import React, { useContext, useState } from 'react';
import { Badge, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { BlogPost } from '../models/Props';
import { ShopContext } from '../context/ShopContext';

const BlogCard: React.FC<BlogPost> = ({ id, title, category, image }) => {
  const [isHovered, setIsHovered] = useState({ image: false, category: false });
  const { getBlogPostsByCategory } = useContext<any>(ShopContext);

  const navigate = useNavigate();

  const handleCategoryNavigate = () => {
    console.log('tst');
    
    getBlogPostsByCategory(category);
    navigate('/skincare-resources/blogs');
  };

  return (
    <Stack justify='flex-start' align='center' spacing='16px'>
      <Stack width='290px' height='290px' maxWidth='100%'>
        <Image
          _hover={{ filter: 'brightness(.75)' }}
          cursor='pointer'
          src={image}
          h='290px'
          w='290px'
          objectFit='cover'
          onClick={() => navigate(`${id}`)}
          onMouseEnter={() => setIsHovered({ image: true, category: false })}
          onMouseLeave={() => setIsHovered({ image: false, category: false })}
        />
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
