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
    <Grid gridTemplateRows="auto 1fr auto" height="100vh">
      <Flex borderBottom="1px solid" justifyContent="space-between">
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
      <GridItem overflowY="auto" py="2" px="4">
        {children}
      </GridItem>
      <Flex borderTop="1px solid" justifyContent="space-between" p="2">
        <Center p="2">Footer</Center>
        <Center>
          <Button onClick={toggleColorMode}>Dark mode</Button>
        </Center>
      </Flex>
    </Grid>
  );
}

export default Layout;
