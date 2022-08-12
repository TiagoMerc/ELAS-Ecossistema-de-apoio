import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

function TopPostsBox() {
  return (
    <Box
      as="nav"
      display="flex"
      flexDir="column"
      mt="45px"
      padding="17px 31px 29px 12px"
      bg="#EBEBEB80"
      borderRadius="8px"
    >
      <Heading
        fontWeight="700"
        fontSize="26px"
        lineHeight="30px"
        mb="28px"
        color="#5F40A6"
      >
        Top posts
      </Heading>
      <Box display="flex">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#5F40A6"
        >
          1
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#5F40A6"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Post mais acessado com ótima rentenção
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              _hover={{ textDecoration: "none" }}
            >
              Categoria 1
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              ml="5px"
            >
              - 16 de maio
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#5F40A6"
        >
          1
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#5F40A6"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Post mais acessado com ótima rentenção
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              _hover={{ textDecoration: "none" }}
            >
              Categoria 1
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              ml="5px"
            >
              - 16 de maio
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#5F40A6"
        >
          1
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#5F40A6"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Post mais acessado com ótima rentenção
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              _hover={{ textDecoration: "none" }}
            >
              Categoria 1
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              ml="5px"
            >
              - 16 de maio
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#5F40A6"
        >
          1
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#5F40A6"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Post mais acessado com ótima rentenção
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              _hover={{ textDecoration: "none" }}
            >
              Categoria 1
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#5F40A6"
              ml="5px"
            >
              - 16 de maio
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopPostsBox;
