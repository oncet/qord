import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box position="fixed" left="0" right="0" top="0" background="gray.900">
        <Container p="0">
          <Flex justifyContent="space-between">
            <Center p="2">Logo</Center>
            <Flex>
              <Center borderLeft="1px solid" p="2">
                Cart
              </Center>
              <Center borderLeft="1px solid" p="2">
                User
              </Center>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box overflowY="auto" px="4" mt="16" pb="20">
        {children}
      </Box>
      <Box position="fixed" left="0" right="0" bottom="0" background="gray.900">
        <Container>
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
