import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import Lateral from "./Lateral";

function Posts() {
  return (
    <Container
      as="section"
      display="flex"
      maxW="100vw"
      mt="140px"
      padding="0 135px 0 146px"
    >
      <Lateral />
      <Box as="main" display="grid">
        <Heading>Teste</Heading>
      </Box>
    </Container>
  );
}

export default Posts;
