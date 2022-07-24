import {
  Box,
  Container,
  Divider,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Menu from "../../components/Menu";
import BoxContent from "./BoxContent";

function Header() {
  return (
    <Container
      as="header"
      padding="10px 130px"
      maxW="100vw"
      display="flex"
      flexDir="column"
      bg="#5F40A6"
      borderRadius="0px 0px 186px 186px"
      position="relative"
      zIndex="auto"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          as="a"
          href="#"
          display="flex"
          alignItems="center"
          padding="30px 0"
        >
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
        <Menu />
      </Box>
      <Container maxW="100%" padding="0" display="flex" alignItems="center">
        <Box display="flex" flexDir="column" maxWidth="509px">
          <Heading
            as="h1"
            fontWeight="700"
            fontSize="48px"
            lineHeight="64px"
            color="white"
            mb="30px"
          >
            <Highlight query="text lorem" styles={{ color: "#FE5996" }}>
              Lorem Ipsum is simply dummy text of the printin text lorem
            </Highlight>
          </Heading>
          <Text
            fontWeight="700"
            fontSize="24px"
            lineHeight="29px"
            bg="#FE5996"
            color="white"
            width="max-content"
            padding="8px 10px 9px 10px"
          >
            Lançamento em breve
          </Text>
        </Box>
        <Box
          ml="400px"
          bg="#754DD0"
          borderRadius="45px"
          w="385px"
          h="473px"
          position="relative"
          display="grid"
          placeItems="center"
        >
          <Image
            src="../../public/img/woman.png"
            alt="Woman"
            position="absolute"
            maxW="627px"
            h="456px"
            top="39px"
          />
        </Box>
      </Container>
      <Container
        display="flex"
        bg="#FAFAFA"
        padding="50px 30px 35px 25px"
        borderRadius="13px"
        alignItems="center"
        maxW="892px"
        position="absolute"
        right="50%"
        transform="translate(50%)"
        bottom="-160px"
        zIndex="2"
      >
        <BoxContent
          title="Lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Divider
          orientation="vertical"
          borderColor="#5F40A6"
          height="150px"
          opacity="1"
          margin="0 40px"
        />
        <BoxContent
          title="Lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Divider
          orientation="vertical"
          borderColor="#5F40A6"
          height="150px"
          opacity="1"
          margin="0 40px"
        />
        <BoxContent
          title="Lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </Container>
      <Box
        position="absolute"
        left="-10px"
        bottom="-50px"
        zIndex="-1"
        w="100vw"
        transform="rotate(-2deg)"
        borderRadius="0px 0px 210px 270px"
        height="600px"
        bg="#5F40A6"
      />
    </Container>
  );
}

export default Header;
