import Icon from "@chakra-ui/icon";
import { VStack, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

type MenuItemCardProps = {
  item: {
    name: string;
    image?: string;
    imageAlt?: string;
    description: string;
    price: number;
  };
  onClick: () => void;
};

const MenuItemCard = ({ item, onClick }: MenuItemCardProps) => {
  return (
    <VStack
      background="gray.900"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="left"
      role="button"
      onClick={onClick}
    >
      <Heading mb="0" size="lg" pt="1" px="2">
        {item.name}
      </Heading>
      <Image src={item.image} alt={item.imageAlt} />
      <HStack justifyContent="space-between" pb="2" px="2">
        <HStack spacing="3">
          <Text>{item.description}</Text>
        </HStack>
        <Text fontSize="2xl">
          <strong>${item.price}</strong>
        </Text>
      </HStack>
    </VStack>
  );
};

export default MenuItemCard;
