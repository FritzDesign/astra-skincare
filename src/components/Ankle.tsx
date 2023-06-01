import {
  Stack,
  Text,
  Input,
  Button,
  Icon,
  Flex
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Ankle: React.FC = () => {
  const [userInput, setUserInput] = useState<string>();

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
  return (
    <Stack
      paddingX={['40px', '40px', '80px', '80px', '120px', '240px']}
      paddingY='49px'
      direction={['column', 'column', 'row']}
      justify='space-between'
      align='center'
      spacing='56px'
      overflow='hidden'
      width='100vw'
      maxWidth='100%'
      background='brand.Lavender'
    >
      <Text
        fontFamily='Marcellus'
        lineHeight='1.2'
        fontWeight='regular'
        fontSize='24px'
        color='UI.6'
      >
        Subscribe to Our Newsletter
      </Text>
      <Stack
        direction='row'
        justify='flex-start'
        align='flex-start'
        spacing='0px'
      >
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
        </Flex>

        <Button bgColor='brand.Cream' borderRadius='0px'>
          <Icon as={HiArrowRight} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Ankle;
