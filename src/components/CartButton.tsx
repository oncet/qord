import React from "react";
import { Box, IconButton, Text, forwardRef } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = forwardRef(({ onClick }, ref) => {
  return (
    <Box position="relative" ref={ref}>
      <IconButton
        aria-label="Cart"
        icon={<FaShoppingCart />}
        isRound
        size="lg"
        variant="outline"
        onClick={onClick}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom="0"
        right="0"
        height="24px"
        width="24px"
        transform="translate(25%, 25%)"
        background="gray.600"
        border="0.2em solid"
        borderColor="gray.900"
        borderRadius="full"
      >
        <Text fontSize="xs" m="0">
          4
        </Text>
      </Box>
    </Box>
  );
});

export default CartButton;
