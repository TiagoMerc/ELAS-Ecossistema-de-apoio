import {
  Box,
  Container,
  Heading,
  Highlight,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import MenuMobile from "../../components/MenuMobile";
import MyMenu from "../../components/MyMenu";

import logo from "../../images/logo.svg";
import Ballon from "../../images/Ballon.png";

function Header() {
  const mobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (
    <Container
      as="header"
      padding={["10px 10px", "10px 30px", "10px 80px", "10px 130px"]}
      maxW="100vw"
      display="flex"
      flexDir="column"
      bg="#5F40A6"
      borderRadius="0px 0px 186px 186px"
      position="relative"
      zIndex="auto"
    >
      {/* Header Navegação */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          as="a"
          href="#"
          display="flex"
          alignItems="center"
          padding="30px 0"
        >
          <Image src={logo} alt="Logo" w="51px" h="54px" mr="6.3px" />
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
        {mobile ? <MenuMobile /> : <MyMenu />}
      </Box>

      <Container
        maxW="100%"
        padding="0"
        display="flex"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
      >
        <Box
          display="flex"
          flexDir="column"
          maxWidth="509px"
          w={["70%", "75%", "50%"]}
          marginBottom={["15px", "25px", "0"]}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition="200ms ease"
        >
          <Heading
            fontWeight="700"
            fontSize={["3xl", "3xl", "3xl", "3xl", "48px"]}
            lineHeight={["3xl", "3xl", "3xl", "3xl", "64px"]}
            color="white"
            mb={["10px", "20px", "5px", "30px"]}
            as="h1"
          >
            Dúvidas?
          </Heading>
          <Heading
            fontWeight="700"
            fontSize={["3xl", "3xl", "3xl", "3xl", "48px"]}
            lineHeight={["3xl", "3xl", "3xl", "3xl", "64px"]}
            color="white"
            mb={["10px", "20px", "5px", "30px"]}
            as="h1"
          >
            <Highlight query="contato" styles={{ color: "#FE5996" }}>
              Entre em contato
            </Highlight>
          </Heading>
        </Box>
        <Box
          ml={["0", "0", "60px", "100px", "180px", "400px"]}
          bg="#754DD0"
          borderRadius="45px"
          maxW={["250px", "250px", "unset"]}
          w={("250px", "250px", "385px")}
          h={["235px", "235px", "308px", "308px", "473px"]}
          top={["0px", "32px", "50px"]}
          position="relative"
          display="grid"
          placeItems="center"
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition="200ms ease"
        >
          <Image
            src={Ballon}
            alt="Balão de conversa"
            position="absolute"
            maxW={["300px", "300px", "400px", "400px", "627px"]}
            h={["218px", "218px", "291px", "291px", "456px"]}
            top={["0px", "32px", "120px"]}
            as={motion.img}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          />
        </Box>
      </Container>

      <Box
        display={["none", "none", "none", "none", "block"]}
        position="absolute"
        left="-25px"
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
