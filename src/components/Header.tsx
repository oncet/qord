import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  );
};

export default Header;
