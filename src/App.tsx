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
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

import imgUrl from "../images/burguer.jpg";
import Establishment from "./pages/Establishment";
import Layout from "./components/Layout";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container p="0" maxW="container.lg">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Heading>Menú</Heading>
              <VStack
                background="gray.900"
                borderRadius="md"
                justifyContent="space-between"
                alignItems="left"
                role="button"
                onClick={onOpen}
              >
                <Heading mb="0" size="lg" pt="1" px="2">
                  Hamburguesa Manush
                </Heading>
                <Image src={imgUrl} alt="Segun Adebayo" />
                <HStack justifyContent="space-between" pb="2" px="2">
                  <HStack spacing="3">
                    <HStack
                      alignItems="baseline"
                      fontSize="2xl"
                      letterSpacing="wide"
                      spacing="1"
                    >
                      <Icon as={FaTimes} boxSize="4" />
                      <strong>2</strong>
                    </HStack>
                    <Text
                      as="span"
                      fontSize="xl"
                      fontWeight="bold"
                      color="gray.400"
                    >
                      $1200
                    </Text>
                  </HStack>
                  <Text fontSize="2xl">
                    <strong>$600</strong>
                  </Text>
                </HStack>
              </VStack>
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Hamburguesa Manush</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Voluptate excepteur officia dolore quis nostrud proident
                      velit consequat ad exercitation.
                    </Text>
                    <Image src={imgUrl} alt="Segun Adebayo" />

                    <HStack justifyContent="space-between" pb="2" px="2">
                      <HStack spacing="3">
                        <HStack
                          alignItems="baseline"
                          fontSize="2xl"
                          letterSpacing="wide"
                          spacing="1"
                        >
                          <Icon as={FaTimes} boxSize="4" />
                          <strong>2</strong>
                        </HStack>
                        <Text
                          as="span"
                          fontSize="xl"
                          fontWeight="bold"
                          color="gray.400"
                        >
                          $1200
                        </Text>
                      </HStack>
                      <Text fontSize="2xl">
                        <strong>$600</strong>
                      </Text>
                    </HStack>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
