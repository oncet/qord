import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box>
      <Header />
      <Box overflowY="auto" px="4" mt="16" pt="2" pb="20">
        {children}
      </Box>
      <Box position="fixed" left="0" right="0" bottom="0" background="gray.900">
        <Container p="0" maxW="container.lg">
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
