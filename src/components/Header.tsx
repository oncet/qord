import React, { useRef } from "react";
import {
  Box,
  Button,
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
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowRight, FaBars } from "react-icons/fa";

import CartButton from "./CartButton";
import CartList from "./CartContents";

const Header = () => {
  const {
    isOpen: mainMenuIsOpen,
    onOpen: mainMenuOnOpen,
    onClose: mainMenuOnClose,
  } = useDisclosure();

  const {
    isOpen: cartMenuIsOpen,
    onOpen: cartMenuOnOpen,
    onClose: cartMenuOnClose,
  } = useDisclosure();

  const mainMenuButtonRef = useRef<HTMLButtonElement>(null);
  const cartMenuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Box
      position="fixed"
      left="0"
      right="0"
      top="0"
      background="gray.900"
      p="2"
    >
      <Container p="0" maxW="container.lg">
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
            <CartButton onClick={cartMenuOnOpen} ref={cartMenuButtonRef} />
          </Center>
        </Flex>
      </Container>
      <Drawer
        isOpen={mainMenuIsOpen}
        placement="left"
        onClose={mainMenuOnClose}
        finalFocusRef={cartMenuButtonRef}
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
        isOpen={cartMenuIsOpen}
        placement="right"
        onClose={cartMenuOnClose}
        finalFocusRef={cartMenuButtonRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tu pedido</DrawerHeader>
          <DrawerBody px="0">
            <CartList />
          </DrawerBody>
          <DrawerFooter>
            <HStack justify="space-between" width="full">
              <Text m="0" fontSize="lg">
                <strong>Total: $1000</strong>
              </Text>
              <Button size="lg" rightIcon={<FaArrowRight />}>
                Pagar ahora
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
