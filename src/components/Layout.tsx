import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex flexDirection="column">
      <Flex
        borderBottom="1px solid"
        justifyContent="space-between"
        position="fixed"
        width="100%"
        background="gray.800"
      >
        <Center borderRight="1px solid" p="2">
          Logo
        </Center>
        <Flex>
          <Center borderLeft="1px solid" p="2">
            Cart
          </Center>
          <Center borderLeft="1px solid" p="2">
            User
          </Center>
        </Flex>
      </Flex>
      <Box overflowY="auto" px="4" pt="12" pb="20">
        {children}
      </Box>
      <Flex
        borderTop="1px solid"
        justifyContent="space-between"
        p="2"
        position="fixed"
        bottom="0"
        width="100%"
        background="gray.800"
      >
        <Center p="2">Footer</Center>
        <Center>
          <Button onClick={toggleColorMode}>Dark mode</Button>
        </Center>
      </Flex>
    </Flex>
  );
}

export default Layout;
