import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Establishment() {
  const { establishment } = useParams<{ establishment: string }>();

  const query = useQuery();

  const table = query.get("table");

  return (
    <>
      <Heading>Establishment</Heading>
      <Text>
        {establishment} {table}
      </Text>
    </>
  );
}

export default Establishment;
