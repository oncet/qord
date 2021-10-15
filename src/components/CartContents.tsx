import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Text,
  useNumberInput,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTimes, FaTrash } from "react-icons/fa";

import useCart from "../hooks/useCart";

const CartContents = () => {
  const { addItem, removeItem } = useCart();

  const items = useCart((state) => state.items);

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    value,
  } = useNumberInput({ min: 1, max: 99, defaultValue: 1 });

  return (
    <Box>
      <Box
        background="gray.900"
        borderRadius="md"
        px="2"
        pt="1"
        pb="2"
        mx="2"
        mb="2"
      >
        <HStack justify="space-between" mb="2">
          <Heading mb="0">Hamburguesa Manush</Heading>
          <HStack spacing="3">
            <Icon as={FaTimes} boxSize="6" />
            <Text fontSize="3xl">
              <strong>{value}</strong>
            </Text>
          </HStack>
        </HStack>
        <HStack justify="space-between">
          <HStack spacing="4">
            <IconButton
              icon={<FaTrash />}
              size="lg"
              isRound
              aria-label="Eliminar de la lista"
            />
            <IconButton
              icon={<FaMinus />}
              onClick={() => {
                removeItem("hamburguesa-manush");
              }}
              size="lg"
              isRound
              aria-label="Quitar uno"
            />
            <IconButton
              icon={<FaPlus />}
              onClick={() => {
                addItem({
                  id: "hamburguesa-manush",
                  name: "Hamburguesa Manush",
                  price: 500,
                  quantity: 1,
                });
              }}
              size="lg"
              isRound
              aria-label="Agregar uno"
            />
          </HStack>
          <Text fontSize="2xl" letterSpacing="wide">
            <strong>$1500</strong>
          </Text>
        </HStack>
      </Box>
      <Box
        background="gray.900"
        borderRadius="md"
        px="2"
        pt="1"
        pb="2"
        mx="2"
        display="block"
      >
        <HStack justify="space-between" mb="2">
          <Heading mb="0">Pizza Amapola</Heading>
          <HStack spacing="3">
            <Icon as={FaTimes} boxSize="6" />
            <Text fontSize="3xl">
              <strong>{value}</strong>
            </Text>
          </HStack>
        </HStack>
        <HStack justify="space-between">
          <HStack spacing="4">
            <IconButton
              icon={<FaTrash />}
              size="lg"
              isRound
              aria-label="Eliminar de la lista"
            />
            <IconButton
              icon={<FaMinus />}
              size="lg"
              isRound
              aria-label="Quitar uno"
            />
            <IconButton
              icon={<FaPlus />}
              size="lg"
              isRound
              aria-label="Agregar uno"
            />
          </HStack>
          <Text fontSize="2xl" letterSpacing="wide">
            <strong>$1500</strong>
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default CartContents;
