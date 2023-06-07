import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  OrderedList,
  ListItem,
  Button,
  Checkbox,
  Link,
  Flex,
  Stack
} from '@chakra-ui/react';

const EULA_Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const initialRef = useRef(null);

  const handleClose = () => {

    if (isAgreementChecked) {
      localStorage.setItem('EULA', 'agreed');
      setIsOpen(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      initialFocusRef={initialRef}
      scrollBehavior='inside'
    >
      <ModalOverlay backdropFilter='blur(10px)' />
      <ModalContent
        maxH='80vh'
        mx='1rem'
        bgColor='brand.Cream'
        fontFamily='Poppins'
      >
        <ModalHeader>END USER LICENSE AGREEMENT (EULA)</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={Stack} gap='1.5rem'>
          <Text>
            ASTRA Skincare is a demonstration-only website developed by C.J.
            Fritz and does not attempt to portray accurate skincare information
            or sell any products.
          </Text>
          <Text>
            By using this website, you agree to the following terms and
            conditions:
          </Text>
          <OrderedList>
            <ListItem>
              License: I grant you a non-exclusive, non-transferable license to
              access and use ASTRA Skincare solely for demonstration purposes.
            </ListItem>
            <ListItem>
              Intellectual Property: All intellectual property rights in ASTRA
              Skincare, including all content and graphics, are either my
              property or have been obtained from www.unsplash.com, or
              www.pexels.com. You may not copy, modify, distribute, sell, or
              transfer any part of ASTRA Skincare without my express written
              consent.
            </ListItem>
            <ListItem>
              Restrictions: You may not copy, modify, distribute, sell, or
              transfer any part of the ASTRA Skincare website without my express
              written consent.
            </ListItem>
            <ListItem>
              Warranty Disclaimer: ASTRA Skincare is provided "as is" without
              any warranty, express or implied. I do not warrant that the
              website will be error-free, virus-free, or uninterrupted.
            </ListItem>
            <ListItem>
              Limitation of Liability: In no event shall I be liable for any
              damages, including but not limited to direct, indirect, special,
              incidental, or consequential damages arising out of or in
              connection with the use of ASTRA Skincare.
            </ListItem>
            <ListItem>
              Termination: I may terminate your access to ASTRA Skincare at any
              time, with or without cause or notice.
            </ListItem>
            <ListItem>
              Governing Law: This EULA shall be governed by and construed in
              accordance with the laws of the jurisdiction in which I reside.
            </ListItem>
          </OrderedList>
          <Text>
            By using ASTRA Skincare, you acknowledge that you have read this
            EULA, understand it, and agree to be bound by its terms and
            conditions. If you do not agree to these terms and conditions, you
            may not access or use the ASTRA Skincare website.
          </Text>
          <Text>
            To learn more about me and my work, please visit{' '}
            <Link textDecor='underline' isExternal href='https://cjfritz.dev'>
              my website.
            </Link>
          </Text>
        </ModalBody>

        <ModalFooter justifyContent='space-between'>
          <Flex gap='1rem'>
            <Checkbox
              ref={initialRef}
              onChange={() => setIsAgreementChecked((prev) => !prev)}
            />
            <Text>I have read and agree.</Text>
          </Flex>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={handleClose}
            variant='brandPrimary'
          >
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EULA_Modal;
