import { Stack, Text, Icon, Heading } from '@chakra-ui/react';
import { BsEmojiHeartEyes, BsBoxSeam } from 'react-icons/bs';
import { MdOutlineCrueltyFree, MdOutlineWaterDrop } from 'react-icons/md';

const TextWithIcons: React.FC = () => (
  <Stack
    padding='80px'
    justify='flex-start'
    align='center'
    spacing='56px'
    overflow='hidden'
    maxWidth='100%'
    background='#313C4E'
  >
    <Heading
      fontFamily='Marcellus'
      lineHeight='1.4'
      fontWeight='regular'
      fontSize='32px'
      color='brand.Cream'
    >
      Stellar Reasons to Switch to ASTRA
    </Heading>
    <Stack direction='row' justify='center' align='flex-start' spacing='104px'>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='14px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={MdOutlineWaterDrop} h='20px' w='20px' color='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          INNOVATIVE INGREDIENTS
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          DERMATOLOGIST TRUSTED
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={BsBoxSeam} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          ECO-CONCIOUS PACKAGING
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          CRUELTY FREE ALWAYS
        </Text>
      </Stack>
    </Stack>
    <Stack direction='row' justify='center' align='flex-start' spacing='104px'>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='14px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={MdOutlineWaterDrop} h='20px' w='20px' color='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          INNOVATIVE INGREDIENTS
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          DERMATOLOGIST TRUSTED
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          w='50px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={BsBoxSeam} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          ECO-CONCIOUS PACKAGING
        </Text>
      </Stack>
      <Stack w='152px' justify='center' align='center'>
        <Stack
          w='50px'
          padding='16px'
          borderRadius='64px'
          direction='row'
          justify='center'
          align='center'
          spacing='10px'
          borderColor='brand.Peri'
          mb='3rem'
          borderStartWidth='1px'
          borderEndWidth='1px'
          borderTopWidth='1px'
          borderBottomWidth='1px'
        >
          <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
        </Stack>
        <Text
          fontFamily='Poppins'
          fontWeight='bold'
          fontSize='14px'
          letterSpacing='0.24em'
          color='brand.Mint'
          textAlign='center'
        >
          CRUELTY FREE ALWAYS
        </Text>
      </Stack>
    </Stack>
  </Stack>
);

export default TextWithIcons;
