import React from "react";
import { Box, Center, IconButton, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Box position="relative">
      <IconButton
        aria-label="Cart"
        icon={<FaShoppingCart />}
        isRound
        size="lg"
        variant="outline"
      />
      <Box
        border="0.2em solid"
        borderColor="gray.900"
        position="absolute"
        bottom="0"
        right="0"
        transform="translate(25%, 25%)"
        height="24px"
        width="24px"
        borderRadius="full"
        background="gray.600"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="xs" m="0">
          4
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
