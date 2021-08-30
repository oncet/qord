import React from "react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <div>Hello world!</div>
      <button onClick={toggleColorMode}>Dark mode</button>
    </>
  );
}

export default App;
