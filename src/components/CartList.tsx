import React from "react";
import {
  Button,
  HStack,
  Icon,
  Input,
  List,
  ListItem,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaShoppingCart, FaTimes } from "react-icons/fa";

const CartList = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({ min: 0, max: 99, defaultValue: 1 });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <List spacing="4">
      <ListItem>
        <HStack justify="space-between">
          <Text m="0">
            Hamburguesa Manush <Icon as={FaTimes} /> 1
          </Text>
          <Text m="0">
            <strong>$10.00</strong>
          </Text>
        </HStack>
      </ListItem>
      <ListItem>
        <Text m="0">
          Pizza Marina <Icon as={FaTimes} /> 1
        </Text>
      </ListItem>
    </List>
  );
};

export default CartList;
