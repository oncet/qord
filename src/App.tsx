import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import Establishment from "./pages/Establishment";
import Layout from "./components/Layout";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

function App() {
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
                px="2"
                pt="1"
                pb="2"
                minHeight="9em"
                justifyContent="space-between"
                alignItems="left"
              >
                <Heading mb="0" size="lg">
                  Hamburguesa Manush
                </Heading>
                <Image src="/images/burguer.jpg" alt="Segun Adebayo" />
                <HStack justifyContent="space-between">
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
