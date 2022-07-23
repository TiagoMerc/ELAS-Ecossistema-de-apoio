import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  const pages = [
    { title: "Início", link: "#", first: true, special: true },
    { title: "Quem Somos", link: "#" },
    { title: "Contato", link: "#" },
    { title: "Blog", link: "#" },
  ];

  return (
    <Container
      as="header"
      padding="40px 130px"
      maxW="100vw"
      display="flex"
      flexDir="column"
      bg="#5F40A6"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box as="a" href="#" display="flex" alignItems="center">
          <Image
            src="/../../public/img/logo.svg"
            alt="Logo"
            w="51px"
            h="54px"
            mr="6.3px"
          />
          <Box>
            <Heading
              as="h2"
              fontSize="24px"
              textTransform="uppercase"
              fontWeight="900"
              color="white"
              lineHeight="1"
            >
              Elas
            </Heading>
            <Text fontSize="12px" color="white">
              Ecossistema de apoio
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          {pages.map(({ title, link, first, special }) => (
            <Text
              key={title}
              as="a"
              href={link}
              fontWeight={special ? "600" : "400"}
              fontSize="20px"
              lineHeight="27px"
              color="white"
              ml={first ? "0px" : "13px"}
            >
              {title}
            </Text>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
