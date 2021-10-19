import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

import Establishment from "./pages/Establishment";
import Layout from "./components/Layout";
import MenuItemCard from "./components/MenuItemCard";
import MenuItemModal from "./components/MenuItemModal";

import imgUrl from "../images/burguer.jpg";

function App() {
  const [currentItem, setCurrentItem] = useState<{
    id: number;
    name: string;
    image?: string;
    imageAlt?: string;
    description: string;
    price: number;
    variants: {
      id: number;
      name: string;
      description: string;
      price: number;
    }[];
  }>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const items = [
    {
      id: 1,
      name: "Hamburguesa Manush",
      image: imgUrl,
      imageAlt: "Alt",
      description:
        "Voluptate excepteur officia dolore quis nostrud proident velit consequat ad exercitation.",
      price: 600,
      variants: [
        {
          id: 1,
          name: "Clásica",
          description:
            "Voluptate excepteur officia dolore quis nostrud proident velit consequat ad exercitation.",
          price: 600,
        },
        {
          id: 2,
          name: "Spicy",
          description:
            "Voluptate excepteur officia dolore quis nostrud proident velit consequat ad exercitation.",
          price: 650,
        },
      ],
    },
    {
      id: 2,
      name: "Pizza Amapola",
      image: imgUrl,
      imageAlt: "Alt",
      description:
        "Voluptate excepteur officia dolore quis nostrud proident velit consequat ad exercitation.",
      price: 800,
      variants: [
        {
          id: 1,
          name: "Clásica",
          description:
            "Voluptate excepteur officia dolore quis nostrud proident velit consequat ad exercitation.",
          price: 800,
        },
      ],
    },
  ];

  return (
    <Container p="0" maxW="container.lg">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Heading>Menú</Heading>
              <VStack spacing={4}>
                {items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onClick={() => {
                      setCurrentItem(item);
                      onOpen();
                    }}
                  />
                ))}
              </VStack>
              <MenuItemModal
                isOpen={isOpen}
                onClose={onClose}
                item={currentItem}
              />
            </Route>
            <Route path="/:establishment">
              <Establishment />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </Container>
  );
}

export default App;
