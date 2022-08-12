import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Lateral from "./Lateral";
import PostSpecial from "./PostSpecial";
import Post from "./Post";

function Posts() {
  return (
    <Container
      as="section"
      display="flex"
      maxW="100vw"
      mt={["80px", "80px", "140px"]}
      padding={[
        "0 15px 0 15px",
        "0 15px 0 15px",
        "0 50px 0 50px",
        "0 50px 0 50px",
        "0 135px 0 146px",
      ]}
      mb="150px"
      flexDirection={["column", "column", "row"]}
    >
      <Lateral />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        w={["100%", "100%", "100%", "100%", "60%"]}
      >
        <PostSpecial />
        <Box
          display="grid"
          mt="100px"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          rowGap="70px"
          columnGap="28px"
        >
          <Post />
          <Post />
          <Post />
          <Post />
        </Box>
      </Box>
    </Container>
  );
}

export default Posts;
