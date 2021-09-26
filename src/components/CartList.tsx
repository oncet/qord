import React, { useState } from "react";
import {
  Button,
  Center,
  HStack,
  IconButton,
  Input,
  Table,
  Tbody,
  Td,
  Tr,
  useNumberInput,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const CartList = () => {
  const [expanded, setExpanded] = useState(false);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({ min: 0, max: 99, defaultValue: 1 });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Table size="sm" maxW="100%">
      <Tbody>
        <Tr>
          <Td>Hamburguesa Manush</Td>
          <Td>
            <Button onClick={() => setExpanded(!expanded)} size="sm">
              3
            </Button>
          </Td>
          <Td>$1500</Td>
          <Td>
            <IconButton
              aria-label="Editar"
              size="sm"
              variant="outline"
              isRound
              icon={<FaTimes />}
            />
          </Td>
        </Tr>
        {expanded && (
          <Tr background="gray.800">
            <Td colSpan={4}>
              <Center>
                <HStack>
                  <IconButton
                    {...dec}
                    icon={<FaMinus />}
                    aria-label="Quitar"
                    size="sm"
                  />
                  <Input {...input} textAlign="center" width="16" size="sm" />
                  <IconButton
                    {...inc}
                    icon={<FaPlus />}
                    aria-label="Agregar"
                    size="sm"
                  />
                </HStack>
              </Center>
            </Td>
          </Tr>
        )}
        <Tr>
          <Td>Pizza Marina</Td>
          <Td>
            <Button onClick={() => setExpanded(!expanded)} size="sm">
              1
            </Button>
          </Td>
          <Td>$500</Td>
          <Td>
            <IconButton
              aria-label="Editar"
              size="sm"
              variant="outline"
              isRound
              icon={<FaTimes />}
            />
          </Td>
        </Tr>
      </Tbody>
    </Table>
    // <List spacing="3">
    //   <ListItem>
    //     <HStack justify="space-between">
    //       <Text m="0">Hamburguesa Manush</Text>
    //       <Text m="0">1</Text>
    //       <Text m="0">
    //         <strong>$500</strong>
    //       </Text>
    //       <IconButton
    //         aria-label="Editar"
    //         size="sm"
    //         variant="outline"
    //         isRound
    //         icon={<FaPen />}
    //       />
    //     </HStack>
    //   </ListItem>
    //   <ListItem>
    //     <HStack justify="space-between">
    //       <Text m="0">Pizza Marina</Text>
    //       <Text m="0">1</Text>
    //       <Text m="0">
    //         <strong>$500</strong>
    //       </Text>
    //       <IconButton
    //         aria-label="Editar"
    //         size="sm"
    //         variant="outline"
    //         isRound
    //         icon={<FaPen />}
    //       />
    //     </HStack>
    //   </ListItem>
    // </List>
  );
};

export default CartList;
