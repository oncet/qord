import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";

import logo from "../logo.svg";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box>
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
              />
            </Center>
            <Center>
              <IconButton
                aria-label="Cart"
                icon={<FaShoppingCart />}
                isRound
                size="lg"
                variant="outline"
              />
            </Center>
          </Flex>
        </Container>
      </Box>
      <Box overflowY="auto" px="4" mt="16" pt="2" pb="20">
        {children}
      </Box>
      <Box position="fixed" left="0" right="0" bottom="0" background="gray.900">
        <Container p="0">
          <Flex justifyContent="space-between" p="2">
            <Center p="2">Footer</Center>
            <Center>
              <Button onClick={toggleColorMode}>Dark mode</Button>
            </Center>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
