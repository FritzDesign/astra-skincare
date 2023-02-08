import { Stack, Tab, Icon, Tabs, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs';
import { useNavigate } from 'react-router';

import logo from '../assets/astra-logo.png';

const Footer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>();

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
    navigate(path);
  };

  useEffect(() => {
    const lastSlash = window.location.href.lastIndexOf('/');
    const location = window.location.href.slice(lastSlash);
    setSelectedTab(location);
  }, [window.location.href]);

  return (
    <Stack
      py='49px'
      px='10%'
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
          <Tab
            _selected={{ color: 'brand.Navy', borderBottom: '4px solid' }}
            // onClick={() => handleNavigate('/skincare-products')}
            isSelected={selectedTab?.includes('skincare-products')}
          >
            Skincare Products
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Beauty Tools
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Skin Concerns
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Skincare Resources
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Help Me Choose
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Why Astra
          </Tab>
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
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '4px solid' }}>
            F.A.Q.
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Shipping & Policies
          </Tab>
          <Tab _selected={{ color: 'brand.Navy', borderBottom: '2px solid' }}>
            Disclaimer
          </Tab>
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
