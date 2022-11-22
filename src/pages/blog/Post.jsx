import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import imagem from "../../images/artigo2.png";

function Post() {
  return (
    <Box display="flex" flexDir="column">
      <Image src={imagem} maxW="100%" />
      <Box
        display="flex"
        flexDir="column"
        padding="18px 11px 18px 16px"
        bg="#EBEBEB80"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            href="#categoria2"
            fontWeight="500"
            textTransform="uppercase"
            fontSize="16px"
            color="#5F40A6"
          >
            Categoria 2
          </Link>
          <Text textTransform="uppercase" fontSize="16px" color="#5F40A6">
            22 DE NOV
          </Text>
        </Box>
        <Link
          href="#post2"
          mt="14px"
          fontWeight="700"
          fontSize="26px"
          color="#5F40A6"
        >
          FemTech
        </Link>
        <Text mt="14px" size="lg" color="#5F40A6" textAlign="justify">
        São empresas — geralmente startups — que por meio da tecnologia procuram resolver 
        problemas relativos ao universo feminino ou facilitar o dia a dia das mulheres.
        </Text>
      </Box>
    </Box>
  );
}

export default Post;
