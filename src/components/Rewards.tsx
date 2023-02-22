import { Stack, Icon, Text, Link } from '@chakra-ui/react';
import { MdCardGiftcard } from 'react-icons/md';

const Rewards: React.FC = () => {
  return (
    <Stack
      display={['none', 'none', 'none', 'flex']}
      paddingX={['40px', '40px', '80px', '80px', '120px', '240px']}
      paddingY='35px'
      direction='row'
      justify='space-between'
      align='center'
      spacing='10px'
      overflow='hidden'
      width='100vw'
      maxWidth='100%'
      background='brand.Charcoal'
    >
      <Stack direction='row' justify='space-around'>
        <Stack
          align='center'
          justify='center'
          border='1px solid white'
          borderRadius='50%'
          minH='72px'
          minW='72px'
          mr='2rem'
        >
          <Icon h='40px' w='40px' fill='white' as={MdCardGiftcard} />
        </Stack>
        <Stack justify='center' align='flex-start' spacing='0px'>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='400'
            fontSize='20px'
            color='UI.6'
          >
            Stock up. Get rewarded.
          </Text>
          <Text
            fontFamily='Inter'
            lineHeight='1.5'
            fontWeight='400'
            fontSize='14px'
            color='UI.6'
          >
            Earn points for every dollar spent at Astra to unlock discounts and
            freebies with each purchase.
          </Text>
        </Stack>
      </Stack>
      <Link
        _hover={{
          textDecor: 'none'
        }}
        borderBottom='1px solid'
        borderColor='UI.6'
        pb='4px'
        w='91px'
        fontFamily='Inter'
        textAlign='center'
        fontWeight='600'
        fontSize='14px'
        color='white'
      >
        View Details
      </Link>
    </Stack>
  );
};

export default Rewards;
