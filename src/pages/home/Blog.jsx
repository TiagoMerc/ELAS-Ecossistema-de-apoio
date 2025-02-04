import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Container, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Artigo from "./Artigo";
import artigodestaque from "../../images/artigodestaque.png";
import artigo2 from "../../images/artigo2.png";
import artigo3 from "../../images/artigo3.png";

function Blog() {
  return (
    <Container
      as="section"
      display="flex"
      flexDir="column"
      maxW="100vw"
      alignItems="center"
      padding={[
        "520px 30px 30px 30px",
        "480px 30px 30px 30px",
        "250px 50px 30px 50px",
        "280px 70px 30px 70px",
        "250px 150px 30px 220px",
      ]}
      margin="0"
    >
      <Heading
        as="h2"
        fontWeight="700"
        fontSize={["4xl", "4xl", "4xl", "40px"]}
        lineHeight={["4xl", "4xl", "4xl", "53px"]}
        color="#5F40A6"
        alignSelf={["flex-start"]}
        mb={["30px", "30px", "30px", "40px", "67px"]}
      >
        Blog
      </Heading>
      <Box
        display={["flex", "flex", "grid"]}
        flexWrap="wrap"
        w={["100%"]}
        gridTemplateColumns="minmax(300px,870px) 331px"
        gridTemplateRows="1fr 1fr"
        alignContent="space-between"
        columnGap="24px"
        rowGap="46px"
      >
        <Artigo
          imagem={artigodestaque}
          title="Sobre o ELAS"
          maxW="809px"
          gridRow="1/3"
          height="365px"
          w={["100%"]}
          destaque
        />
        <Artigo
          imagem={artigo2}
          title="FemTech"
          w={["45%", "47%", "unset"]}
          maxW="331px"
          gridRow="1/2"
          height="159px"
          alignSelf={["center", "center", "end"]}
        />
        <Artigo
          imagem={artigo3}
          title="Metodologia"
          w={["45%", "47%", "100%"]}
          maxW="331px"
          gridRow="2/3"
          height="159px"
          alignSelf={["center", "center", "end"]}
        />
      </Box>
      <Button
        mt={["30px", "30px", "30px", "50px", "70px"]}
        borderRadius="0"
        color="white"
        bg="#FE5996"
        _hover={{ bg: "#FE5996" }}
        fontWeight="700"
        fontSize="24px"
        lineHeight="29px"
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        padding="0"
      >
        <Link as={RouterLink} to="/blog" padding="8px 26px" _hover="">
          Ver mais
        </Link>
      </Button>
    </Container>
  );
}

export default Blog;
