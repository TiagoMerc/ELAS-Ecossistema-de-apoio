import React from "react";
import { Box, Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";

function CategoriasBox() {
  return (
    <Box
      as="nav"
      display="flex"
      flexDir="column"
      mt="26px"
      padding="20px 16px 45px 14px"
      bg="#EBEBEB80"
      borderRadius="8px"
    >
      <Heading
        as="h2"
        fontWeight="700"
        fontSize="26px"
        lineHeight="30px"
        color="#5F40A6"
        mb="24px"
      >
        Categorias
      </Heading>
      <UnorderedList listStyleType="none" margin="0">
        <ListItem paddingBottom="4px" borderBottom="1px solid #9C79F280">
          <Link
            href="#categoria"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 1
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 2
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 3
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 4
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 5
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 6
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 7
          </Link>
        </ListItem>
        <ListItem
          mt="19px"
          paddingBottom="4px"
          borderBottom="1px solid #9C79F280"
        >
          <Link
            href="#categoria"
            textDecoration="none"
            fontWeight="500"
            fontSize="18px"
            lineHeight="21px"
            color="#5F40A6"
            _hover={{ textDecoration: "none" }}
          >
            Categoria 8
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default CategoriasBox;
