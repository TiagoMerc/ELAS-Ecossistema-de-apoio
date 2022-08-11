import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import imagem from "../../images/artigodestaque.png";

function PostSpecial() {
  return (
    <Box
      display="flex"
      flexDir="column"
      padding="16px 15px 26px 16px"
      bg="#D1DCDF80"
      borderRadius="16px"
      maxW="840px"
    >
      <Box
        as="a"
        href="#"
        bg={`linear-gradient(0.81deg, #000000 -22.69%, rgba(0, 0, 0, 0.553302) 3.78%, rgba(0, 0, 0, 0) 56.77%), url(${imagem}) center no-repeat`}
        w="100%"
        maxW="100%"
        borderRadius="14px"
        height="300px"
      />
      <Link
        href="#categoria"
        padding="5px"
        bg="#5F40A6B2"
        borderRadius="4px"
        w="98px"
        mt="20px"
        color="white"
        fontWeight="bold"
      >
        Categoria 1
      </Link>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        mt="18px"
      >
        <Link
          color="#5F40A6"
          as="h3"
          fontWeight="700"
          fontSize="32px"
          lineHeight="43px"
          href="#artigo"
        >
          Artigo destaque do blog
        </Link>
        <Box display="flex" gap="15px">
          <Text color="#5F40A6" fontWeight="700" size="sm">
            abril/27,2022
          </Text>
          <Text color="#5F40A6" fontWeight="700" size="sm">
            14:00
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PostSpecial;
