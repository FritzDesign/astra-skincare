import {
  Box,
  Stack,
  Text,
  Button,
  Divider,
  Icon,
  Flex,
  Input,
  Link,
  IconButton
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdWaves } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';

const Footer: React.FC = () => {
  const [userInput, setUserInput] = useState<string>();

  const animateLabel = (direction: string) => {
    const label = document.getElementById(
      'email-input-label'
    )! as HTMLParagraphElement;
    label.style.transition = 'transform .4s ease';
    if (userInput?.length) return;
    if (direction === 'focus') {
      label.style.transform = 'translateY(-20px)';
    } else {
      label.style.transform = 'translateY(0px)';
    }
  };

  return (
    <Stack
      p='80px 160px'
      width='100%'
      maxWidth='100%'
      background='#1E2833'
      borderColor='#979797'
      overflow='hidden'
    >
      <Stack
        direction='row'
        w='100%'
        align='center'
        justify='space-between'
        pb='24px'
      >
        <Icon as={MdWaves} fill='brand.Cream' h='40px' w='40px' />
        <Stack
          direction='row'
          align='center'
          width='400px'
          height='50px'
          maxWidth='100%'
          justify='space-between'
        >
          <Text
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='22px'
            letterSpacing='-0.3px'
            color='#FFFFFF'
          >
            Ready to get started?
          </Text>
          <Button
            _hover={{ filter: 'brightness(1.1)' }}
            _focus={{ transform: 'scale(0.98)' }}
            size='lg'
            fontFamily='DM Sans'
            fontWeight='bold'
            fontSize='17px'
            letterSpacing='-0.23px'
            color='brand.Charcoal'
          >
            Get started
          </Button>
        </Stack>
      </Stack>
      <Divider borderColor='#979797' />
      <Stack direction='row' pt='32px' pr='15%' justify='space-between'>
        <Stack width='289px' height='139px' maxWidth='100%'>
          <Text
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='22px'
            letterSpacing='-0.3px'
            color='#FFFFFF'
          >
            Subscribe to our newsletter
          </Text>
          <Stack pos='relative' width='289px' height='51px' maxWidth='100%'>
            <Box
              width='289px'
              height='1px'
              maxWidth='100%'
              background='#FFFFFF'
              opacity='0.1'
              borderColor='#979797'
            />
            <Text
              id='email-input-label'
              fontFamily='DM Sans'
              fontWeight='regular'
              fontSize='15px'
              letterSpacing='-0.2px'
              color='#FFFFFF'
              opacity='0.5'
              pos='absolute'
              top='16px'
              left='4px'
            >
              Email address
            </Text>
            <Flex align='flex-end'>
              <Input
                _focus={{ borderColor: 'white' }}
                variant='flushed'
                color='brand.Cream'
                borderColor='#979797'
                fontSize='18px'
                onFocus={() => animateLabel('focus')}
                onBlur={() => animateLabel('blur')}
                onChange={(e: any) => setUserInput(e.target.value)}
              />
              <IconButton
                aria-label=''
                as={BiChevronRight}
                p='8px'
                borderRadius='8px 8px 0px 0px'
                width='50px'
                height='50px'
                background='#FFD2DD'
                borderColor='#979797'
              ></IconButton>
            </Flex>
          </Stack>
        </Stack>
        <Stack width='106px' height='182px'>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='17px'
            letterSpacing='-0.23px'
            color='white'
          >
            Services
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Email Marketing
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Campaigns
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Branding
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Offline
          </Link>
        </Stack>
        <Stack width='65px' height='182px'>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='17px'
            letterSpacing='-0.23px'
            color='white'
          >
            About
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Our Story
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Benefits
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Team
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Careers
          </Link>
        </Stack>
        <Stack width='76px' height='102px'>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='17px'
            letterSpacing='-0.23px'
            color='white'
          >
            Help
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            FAQs
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Contact Us
          </Link>
        </Stack>
      </Stack>
      <Stack width='100%' direction='row' justify='space-between' height='22px'>
        <Stack direction='row' width='288px' justify='space-between'>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Terms & Conditions
          </Link>
          <Link
            fontFamily='DM Sans'
            fontWeight='regular'
            fontSize='15px'
            letterSpacing='-0.2px'
            color='#FFFFFF'
          >
            Privacy Policy
          </Link>
        </Stack>
        <Stack direction='row' w='144px' justify='space-between'>
          <Icon
            cursor='pointer'
            as={FaFacebookF}
            fill='brand.Cream'
            h='24px'
            w='24px'
          />
          <Icon
            cursor='pointer'
            as={FaTwitter}
            fill='brand.Cream'
            h='24px'
            w='24px'
          />
          <Icon
            cursor='pointer'
            as={FaInstagram}
            fill='brand.Cream'
            h='24px'
            w='24px'
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
