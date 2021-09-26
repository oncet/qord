import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Heading, Text } from "@chakra-ui/react";

import Establishment from "./pages/Establishment";
import Layout from "./components/Layout";

function App() {
  return (
    <Container p="0" maxW="container.lg">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Heading>Homepage</Heading>
              <Text>
                Dolor ipsum ullamco labore irure Lorem fugiat sunt officia enim.
                Pariatur quis eiusmod non deserunt deserunt nostrud labore
                dolore consectetur sunt. Mollit ullamco nostrud excepteur
                laboris ex pariatur Lorem laborum nostrud consequat nostrud non
                dolor quis. Eiusmod nisi et eiusmod veniam tempor nulla laborum
                excepteur.
              </Text>
              <Text>
                Dolor ipsum ullamco labore irure Lorem fugiat sunt officia enim.
                Pariatur quis eiusmod non deserunt deserunt nostrud labore
                dolore consectetur sunt. Mollit ullamco nostrud excepteur
                laboris ex pariatur Lorem laborum nostrud consequat nostrud non
                dolor quis. Eiusmod nisi et eiusmod veniam tempor nulla laborum
                excepteur.
              </Text>
              <Text>
                Dolor ipsum ullamco labore irure Lorem fugiat sunt officia enim.
                Pariatur quis eiusmod non deserunt deserunt nostrud labore
                dolore consectetur sunt. Mollit ullamco nostrud excepteur
                laboris ex pariatur Lorem laborum nostrud consequat nostrud non
                dolor quis. Eiusmod nisi et eiusmod veniam tempor nulla laborum
                excepteur.
              </Text>
              <Text>
                Dolor ipsum ullamco labore irure Lorem fugiat sunt officia enim.
                Pariatur quis eiusmod non deserunt deserunt nostrud labore
                dolore consectetur sunt. Mollit ullamco nostrud excepteur
                laboris ex pariatur Lorem laborum nostrud consequat nostrud non
                dolor quis. Eiusmod nisi et eiusmod veniam tempor nulla laborum
                excepteur.
              </Text>
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
