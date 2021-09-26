import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Input,
  Text,
  Table,
  Tbody,
  Td,
  Tr,
  useNumberInput,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTimes, FaTrash } from "react-icons/fa";

const CartList = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({ min: 1, max: 99, defaultValue: 1 });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Box background="gray.900" borderRadius="md" px="2" pt="1" pb="2" mx="2">
      <HStack justify="space-between" mb="2">
        <Heading mb="0">Hamburguesa Manush</Heading>
        <HStack spacing="3">
          <Icon as={FaTimes} boxSize="6" />
          <Text fontSize="3xl">
            <strong>{input.value}</strong>
          </Text>
        </HStack>
      </HStack>
      <HStack justify="space-between">
        <HStack spacing="4">
          <IconButton
            icon={<FaTrash />}
            size="lg"
            aria-label="Eliminar de la lista"
          />
          <IconButton
            icon={<FaMinus />}
            {...dec}
            size="lg"
            aria-label="Quitar uno"
          />
          <IconButton
            icon={<FaPlus />}
            {...inc}
            size="lg"
            aria-label="Agregar uno"
          />
        </HStack>
        <Text fontSize="2xl" letterSpacing="wide">
          <strong>$1500</strong>
        </Text>
      </HStack>
    </Box>
  );
};

export default CartList;
