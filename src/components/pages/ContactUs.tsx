import {
  Button,
  Icon,
  Flex,
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
  Box,
  Textarea
} from '@chakra-ui/react';
import ProductMenu from '../ProductsMenu';
import { useEffect, useState } from 'react';

import heroBackdrop from '../../assets/Products/products-hero-backdrop.png';
import heroImage from '../../assets/Products/bt-hero-img.png';
import heroFb from '../../assets/Products/bt-hero-img-fb.jpg';
import { useNavigate } from 'react-router';

const ContactUs: React.FC = () => {
  const [formType, setFormType] = useState('login');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const inputs = document.getElementsByClassName(
      'cu-input'
    )! as HTMLCollectionOf<HTMLInputElement>;

    Array.from(inputs).map((input) => {
      if (!input.value.length) {
        return setError('Fill out the entire form');
      }
      if (
        input.id === 'cu-email' &&
        (!input.value.includes('@') || !input.value.includes('.'))
      ) {
        return setError('Enter a valid Email');
      }
    });

    if (!error.length) {
      setError('Success! One moment...');
      setTimeout(() => {
        setFormType('success');
      }, 1000);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  if (formType === 'success') {
    return (
      <Flex
        minW='100vw'
        minH={['', '', '70vh']}
        align='center'
        justify='center'
      >
        <Stack
          bgColor='brand.Cream'
          w='552px'
          p={['2.5rem', '5rem']}
          gap='2.5rem'
          align='center'
        >
          <Heading
            fontSize='24px'
            fontWeight='400'
            fontFamily='Marcellus'
            textAlign='center'
          >
            Success!
          </Heading>
          <Text fontFamily='Poppins' textAlign='center'>
            We'll get back to you as quickly as we can.
          </Text>
          <Stack align='center'>
            <Button
              variant='brandPrimary'
              onClick={() => navigate('/')}
            >
              Go Home
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }

  return (
    <Box>
      <ProductMenu
        backdrop={heroBackdrop}
        hero={heroImage}
        fallback={heroFb}
        heading='Contact Us'
        showMenuBar={false}
      />
      <Flex
        minW='100vw'
        minH={['', '', '70vh']}
        align='center'
        justify='center'
      >
        <Stack
          bgColor='brand.Cream'
          w='552px'
          p='5rem'
          gap='2.5rem'
          align='center'
        >
          <Heading
            fontSize='24px'
            fontWeight='400'
            fontFamily='Marcellus'
            textAlign='center'
          >
            Contact Us
          </Heading>
          <Stack gap='1.5rem' fontFamily='Poppins'>
            <Flex gap='1.5rem' direction={['column', 'column', 'row']}>
              <Input
                id='cu-fn'
                className='cu-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                borderColor='brand.Charcoal'
                placeholder='First Name'
                onFocus={error ? () => setError('') : undefined}
              />
              <Input
                id='cu-ln'
                className='cu-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                borderColor='brand.Charcoal'
                placeholder='Last Name'
                onFocus={error ? () => setError('') : undefined}
              />
            </Flex>
            <Input
              id='cu-email'
              className='cu-input'
              _focus={{ borderColor: 'brand.Lavender' }}
              _hover={{ borderColor: 'UI.3' }}
              borderColor='brand.Charcoal'
              placeholder='Email'
              onFocus={error ? () => setError('') : undefined}
            />
            <Textarea
              id='cu-un'
              className='cu-input'
              _focus={{ borderColor: 'brand.Lavender' }}
              _hover={{ borderColor: 'UI.3' }}
              minH='6rem'
              borderColor='brand.Charcoal'
              placeholder='Message'
              onFocus={error ? () => setError('') : undefined}
            />
          </Stack>
          <Stack align='center'>
            {error && (
              <Text textAlign='center' fontFamily='Poppins'>
                {error}
              </Text>
            )}
            <Button
              _disabled={{ bgColor: 'UI.3', cursor: 'none' }}
              _hover={
                error && error.length
                  ? { bgColor: 'UI.3' }
                  : { bgColor: 'brand.Charcoal' }
              }
              isDisabled={error && error.length ? true : false}
              variant='brandPrimary'
              w='11rem'
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ContactUs;
