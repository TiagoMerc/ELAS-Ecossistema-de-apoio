import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Lateral() {
  return (
    <Box
      as="aside"
      display="flex"
      flexDir="column"
      maxW="337px"
      w="100%"
      mr="40px"
    >
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="#5F40A6" />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Pesquise aqui"
          bg="#EBEBEB80"
          color="#5F40A6"
          _placeholder={{ color: "#5F40A6" }}
        />
      </InputGroup>
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
    </Box>
  );
}

export default Lateral;
