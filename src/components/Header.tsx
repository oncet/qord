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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

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
              aria-label="Cart"
              icon={<FaBars />}
              isRound
              size="lg"
              variant="ghost"
              onClick={onOpen}
              ref={btnRef}
            />
          </Center>
          <Center>
            <CartButton />
          </Center>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Header</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
