import React, { useContext, useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useNavigate, useParams } from 'react-router';
import BlogPosts, { getBlogPostById } from '../../db/BlogPosts';
import { BlogPost as BlogPostInterface } from '../../models/Props';

import watermark from '../../assets/Blogs/blogpost-watermark.png';
import { ShopContext } from '../../context/ShopContext';
import { encodeQuery } from '../../utils/helpers';
import Ankle from '../Ankle';
import { HiArrowRight } from 'react-icons/hi';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<BlogPostInterface>();
  const [userInput, setUserInput] = useState<string>();
  const [topArticles, setTopArticles] = useState<BlogPostInterface[]>([]);
  const [isBadgeHovered, setIsBadgeHovered] = useState(false);
  const { getBlogPostsByCategory, fetchCollectionByHandle, fetchAllProducts } =
    useContext<any>(ShopContext);
  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      setPost(getBlogPostById(+postId));
      setTopArticles([
        BlogPosts[Math.ceil(Math.random() * BlogPosts.length) - 1],
        BlogPosts[Math.ceil(Math.random() * BlogPosts.length) - 1],
        BlogPosts[Math.ceil(Math.random() * BlogPosts.length) - 1]
      ]);
    }
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, [post, postId]);

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

  const handleCategoryNavigate = (category = post.category) => {
    getBlogPostsByCategory(category);
    navigate('/skincare-resources/blogs');
  };

  const handleProductNavigate = () => {
    if (post.category === 'Skincare') {
      fetchAllProducts();
    } else {
      if (post.category === 'Exfoliating') {
        fetchCollectionByHandle('exfoliants');
      } else {
        fetchCollectionByHandle(encodeQuery(post.category));
      }
    }
    if (post.category === 'Beauty Tools') {
      navigate('/beauty-tools');
    } else {
      navigate('/skincare-products');
    }
  };

  const animateLabel = (direction: string) => {
    const label = document.getElementById(
      'email-input-label'
    )! as HTMLParagraphElement;
    label.style.transition = 'transform .6s ease';
    if (userInput?.length) return;
    if (direction === 'focus') {
      label.style.transform = 'translateY(-32px)';
    } else {
      label.style.transform = 'translateY(0px)';
    }
  };

  const handleSocialNav = (socialSite: string) => {
    window.open(socialSite, '_blank');
  };

  return (
    <Stack
      align='center'
      mt='5rem'
      mb='5.5rem'
      mx={['2rem', '2rem', '4rem', '4rem', '6rem', '13rem']}
    >
      <Image
        pos='absolute'
        top='0'
        left='0'
        src={watermark}
        w='432px'
        h='432px'
        zIndex={-1}
      />
      <Flex
        pos='relative'
        h='100%'
        w='100%'
        maxH='560px'
        maxW='1208px'
        justify='flex-end'
        align='center'
        mb='6.5rem !important'
      >
        <Stack
          pos='absolute'
          left='0'
          w='560px'
          px='6rem'
          py='4rem'
          bgColor='brand.Cream'
        >
          <Badge
            w='fit-content'
            cursor='pointer'
            variant={isBadgeHovered ? 'brandSolid' : 'brandOutline'}
            onMouseEnter={() => setIsBadgeHovered(true)}
            onMouseLeave={() => setIsBadgeHovered(false)}
            onClick={() => handleCategoryNavigate()}
          >
            {post.category}
          </Badge>
          <Heading
            fontFamily='Marcellus'
            fontWeight='normal'
            color='brand.Charcoal'
            textAlign={['center', 'center', 'left']}
          >
            {post.title}
          </Heading>
          <Text pt='1.5rem' fontSize='16px' fontFamily='Poppins' color='black'>
            By {post.author}
          </Text>
        </Stack>
        <Image
          src={post.image}
          maxW='795px'
          w='100%'
          objectFit='cover'
          maxH='560px'
        />
      </Flex>
      <Flex w='100%' maxW='1208px' justify='space-between'>
        <Stack maxW='695px'>
          <Stack align='flex-start'>
            <Heading
              fontFamily='Marcellus'
              fontWeight='normal'
              color='brand.Charcoal'
              mb='2rem'
            >
              {post.tagline}
            </Heading>
            {post.paragraphs.map((paragraph: string, i) => {
              return (
                <Text
                  key={i}
                  fontFamily='Poppins'
                  color='UI.2'
                  fontSize={['12px', '14px', '16px']}
                  textAlign={['center', 'center', 'left']}
                  mb='2rem !important'
                >
                  {paragraph}
                </Text>
              );
            })}
          </Stack>
          {post.category !== 'Tips' && post.category !== 'Routines' ? (
            <Flex
              w='100%'
              p='2.5rem'
              bgColor='brand.Cream'
              justify='space-between'
              align='center'
            >
              <Heading
                fontFamily='Marcellus'
                fontWeight='normal'
                color='brand.Charcoal'
                fontSize='24px'
              >
                View Our {post.category} Products
              </Heading>
              <Button variant='brandPrimary' onClick={handleProductNavigate}>
                Shop Now
              </Button>
            </Flex>
          ) : post.category === 'Tips' ? (
            <Flex
              w='100%'
              p='2.5rem'
              bgColor='brand.Cream'
              justify='space-between'
              align='center'
            >
              <Heading
                fontFamily='Marcellus'
                fontWeight='normal'
                color='brand.Charcoal'
                fontSize='24px'
              >
                View More Tips
              </Heading>
              <Button
                variant='brandPrimary'
                onClick={() => handleCategoryNavigate()}
              >
                Show Me
              </Button>
            </Flex>
          ) : (
            <Flex
              w='100%'
              p='2.5rem'
              bgColor='brand.Cream'
              justify='space-between'
              align='center'
            >
              <Heading
                fontFamily='Marcellus'
                fontWeight='normal'
                color='brand.Charcoal'
                fontSize='24px'
              >
                View More Routines
              </Heading>
              <Button
                variant='brandPrimary'
                onClick={() => handleCategoryNavigate()}
              >
                Show Me
              </Button>
            </Flex>
          )}
        </Stack>
        <Stack w='394px' gap='1.5rem'>
          <Stack p='2.5rem' bgColor='brand.Lavender' align='center' gap='1rem'>
            <Heading
              fontFamily='Marcellus'
              fontWeight='normal'
              fontSize='24px'
              color='UI.6'
            >
              Subscribe to Our Newsletter
            </Heading>
            <Flex pos='relative'>
              <Input
                _focus={{ borderColor: 'UI.6', boxShadow: 'none' }}
                borderColor='UI.4'
                borderRadius='0px'
                color='UI.6'
                onFocus={() => animateLabel('focus')}
                onBlur={() => animateLabel('blur')}
                onChange={(e: any) => setUserInput(e.target.value)}
              />
              <Text
                id='email-input-label'
                pos='absolute'
                color='UI.6'
                fontFamily='Inter'
                left='.5rem'
                top='.5rem'
                pointerEvents='none'
              >
                Email Address
              </Text>
              <Button bgColor='brand.Cream' borderRadius='0px'>
                <Icon as={HiArrowRight} />
              </Button>
            </Flex>
          </Stack>
          <Flex
            w='100%'
            p='2.5rem'
            bgColor='brand.Cream'
            justify='space-between'
            align='center'
          >
            <Heading
              fontFamily='Marcellus'
              fontWeight='normal'
              fontSize='24px'
              color='brand.Charcoal'
            >
              Follow Us
            </Heading>
            <Flex gap='1.5rem'>
              <Icon
                as={BsFacebook}
                fontSize='20px'
                onClick={() => handleSocialNav('https://www.facebook.com')}
              />
              <Icon
                as={BsPinterest}
                fontSize='20px'
                onClick={() => handleSocialNav('https://www.pinterest.com')}
              />
              <Icon
                as={BsInstagram}
                fontSize='20px'
                onClick={() => handleSocialNav('https://www.instagram.com')}
              />
            </Flex>
          </Flex>
          <Stack
            w='100%'
            p='2.5rem'
            bgColor='brand.Cream'
            justify='space-between'
          >
            <Heading
              fontFamily='Marcellus'
              fontWeight='normal'
              fontSize='24px'
              color='brand.Charcoal'
              mb='2.5rem'
            >
              Top Articles
            </Heading>
            <Stack gap='1.5rem' fontFamily='Poppins' color='black'>
              {topArticles.length &&
                topArticles.map((article, i) => {
                  return (
                    <Text
                      key={i}
                      _hover={{ textDecor: 'underline' }}
                      cursor='pointer'
                      onClick={() =>
                        navigate(`/skincare-resources/${article.id}`)
                      }
                    >
                      {article.title}
                    </Text>
                  );
                })}
            </Stack>
          </Stack>
          <Stack w='100%' p='2.5rem' bgColor='brand.Cream' justify='center'>
            <Heading
              fontFamily='Marcellus'
              fontWeight='normal'
              fontSize='24px'
              color='brand.Charcoal'
              mb='2.5rem'
            >
              Post Categories
            </Heading>
            <Stack gap='1.5rem' fontFamily='Poppins' color='black'>
              <Text
                _hover={{ textDecor: 'underline' }}
                cursor='pointer'
                onClick={() => handleCategoryNavigate('Tips')}
              >
                Tips
              </Text>
              <Text
                _hover={{ textDecor: 'underline' }}
                cursor='pointer'
                onClick={() => handleCategoryNavigate('Routines')}
              >
                Routines
              </Text>
              <Text
                _hover={{ textDecor: 'underline' }}
                cursor='pointer'
                onClick={() => handleCategoryNavigate('Beauty Tools')}
              >
                Beauty Tools
              </Text>
              <Text
                _hover={{ textDecor: 'underline' }}
                cursor='pointer'
                onClick={() => handleCategoryNavigate('Skincare')}
              >
                Skincare
              </Text>
              <Text
                _hover={{ textDecor: 'underline' }}
                cursor='pointer'
                onClick={() => handleCategoryNavigate('all')}
              >
                Show All
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default BlogPost;
