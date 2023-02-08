import { Stack, Tab, Icon, Tabs, Image } from '@chakra-ui/react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs';

import logo from '../assets/astra-logo.png';

const Footer: React.FC = () => {
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
        onClick={() => window.scrollTo({ top: 100, behavior: 'smooth' })}
      />
      <Stack justify='flex-start' align='center' spacing='24px'>
        <Stack
          as={Tabs}
          display={['none','none','none', 'flex']}
          direction='row'
          justify='center'
          align='center'
          spacing='16px'
          overflow='hidden'
        >
          <Tab>Skincare Products</Tab>
          <Tab>Beauty Tools</Tab>
          <Tab>Skin Concerns</Tab>
          <Tab>Skincare Resources</Tab>
          <Tab>Help Me Choose</Tab>
          <Tab>Why Astra</Tab>
        </Stack>
        <Stack
          as={Tabs}
          direction={['column', 'row']}
          justify='center'
          align='center'
          spacing='16px'
          overflow='hidden'
        >
          <Tab>F.A.Q.</Tab>
          <Tab>Shipping & Policies</Tab>
          <Tab>Disclaimer</Tab>
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
