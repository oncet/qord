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
    <Grid border="1px solid" gridTemplateRows="auto 1fr auto" height="100vh">
      <Flex border="1px solid" justifyContent="space-between">
        <Center border="1px solid" p="2">
          Logo
        </Center>
        <Flex border="1px solid">
          <Center border="1px solid" p="2">
            Cart
          </Center>
          <Center border="1px solid" p="2">
            User
          </Center>
          <Center>
            <Button onClick={toggleColorMode}>Dark mode</Button>
          </Center>
        </Flex>
      </Flex>
      <GridItem border="1px solid" overflowY="auto">
        {children}
      </GridItem>
      <Box border="1px solid">Footer</Box>
    </Grid>
  );
}

export default Layout;
