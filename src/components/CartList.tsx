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
    <List>
      <ListItem>
        <Text>
          Hamburguesa Manush <Icon as={FaTimes} /> 1
        </Text>
        {/* <HStack>
          <Button size="sm" {...dec}>
            <FaMinus />
          </Button>
          <Input size="sm" textAlign="center" {...input} width="10" />
          <Button size="sm" {...inc}>
            <FaPlus />
          </Button>
        </HStack> */}
      </ListItem>
      <ListItem>
        <Text>
          Pizza Marina <Icon as={FaTimes} /> 1
        </Text>
      </ListItem>
    </List>
  );
};

export default CartList;
