import React, { useRef } from "react";
import {
  Box,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import CartButton from "./CartButton";

const Header = () => {
  const {
    isOpen: mainMenuIsOpen,
    onOpen: mainMenuOnOpen,
    onClose: mainMenuOnClose,
  } = useDisclosure();

  const {
    isOpen: orderMenuIsOpen,
    onOpen: orderMenuOnOpen,
    onClose: orderMenuOnClose,
  } = useDisclosure();

  const mainMenuButtonRef = useRef<HTMLButtonElement>(null);
  const orderMenuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      top="0"
      background="gray.900"
      p="2"
    >
      <Container p="0">
        <Flex justifyContent="space-between">
          <Center>
            <IconButton
              aria-label="Main menu"
              icon={<FaBars />}
              isRound
              size="lg"
              variant="ghost"
              onClick={mainMenuOnOpen}
              ref={mainMenuButtonRef}
            />
          </Center>
          <Center>
            <CartButton onClick={orderMenuOnOpen} ref={orderMenuButtonRef} />
          </Center>
        </Flex>
      </Container>
      <Drawer
        isOpen={mainMenuIsOpen}
        placement="left"
        onClose={mainMenuOnClose}
        finalFocusRef={orderMenuButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Left</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={orderMenuIsOpen}
        placement="right"
        onClose={orderMenuOnClose}
        finalFocusRef={orderMenuButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Right</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
