import { Stack, Tab, Icon, Tabs, Image, TabList } from '@chakra-ui/react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs';
import { useNavigate } from 'react-router';

import logo from '../assets/astra-logo.webp';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <Stack
      py='49px'
      px='10%'
      height='434px'
      width='100vw'
      maxWidth='100%'
      justify='center'
      align='center'
      spacing='56px'
      overflow='hidden'
      bgColor='brand.Cream'
    >
      <Image
        mixBlendMode='multiply'
        loading='lazy'
        src={logo}
        alt='Astra Logo'
        h='56px'
        w='156px'
        cursor='pointer'
        objectFit='cover'
        onClick={() => handleNavigate('/')}
      />
      <Stack justify='flex-start' align='center' spacing='24px'>
        <Stack
          as={Tabs}
          defaultIndex={-1}
          display={['none', 'none', 'none', 'flex']}
          direction='row'
          justify='center'
          align='center'
          spacing='16px'
          overflow='hidden'
        >
          <TabList>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '4px solid' }}
              onClick={() => handleNavigate('/skincare-products')}
            >
              Skincare Products
            </Tab>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => handleNavigate('/beauty-tools')}
            >
              Beauty Tools
            </Tab>

            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => navigate('/skincare-resources')}
            >
              Skincare Resources
            </Tab>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => navigate('/why-astra')}
            >
              Why Astra
            </Tab>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </Tab>
          </TabList>
        </Stack>
        <Stack
          as={Tabs}
          defaultIndex={-1}
          direction={['column', 'row']}
          justify='center'
          align='center'
          spacing='16px'
          overflow='hidden'
        >
          <TabList>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '4px solid' }}
              onClick={() => navigate('/faq')}
            >
              F.A.Q.
            </Tab>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => navigate('/policies')}
            >
              Shipping & Policies
            </Tab>
            <Tab
              _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}
              onClick={() => navigate('/disclaimer')}
            >
              Disclaimer
            </Tab>
          </TabList>
        </Stack>
      </Stack>
      <Stack direction='row' justify='center' align='center' spacing='24px'>
        <Icon as={BsFacebook} />
        <Icon as={BsPinterest} />
        <Icon as={BsInstagram} />
      </Stack>
    </Stack>
  );
};

export default Footer;
