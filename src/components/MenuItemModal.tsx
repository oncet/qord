import {
  Heading,
  HStack,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

type MenuItemModalProps = {
  item:
    | {
        name: string;
        price: number;
        variants: {
          id: number;
          name: string;
          description: string;
          price: number;
        }[];
      }
    | undefined;
  isOpen: boolean;
  onClose: () => void;
};

const MenuItemModal = ({ item, isOpen, onClose }: MenuItemModalProps) => {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody px="4">
          <RadioGroup>
            {item.variants.map(({ id, name, description, price }) => (
              <Radio value={`${id}`} key={id} spacing="6" size="lg">
                <HStack mb="1">
                  <Heading size="md" mb="0">
                    {name}
                  </Heading>
                  <Text fontSize="xl" color="gray.400">
                    <strong>${price}</strong>
                  </Text>
                </HStack>
                <Text>{description}</Text>
              </Radio>
            ))}
          </RadioGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MenuItemModal;
