import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Footer, MenuMobile, MyMenu } from "../components";
import logo from "../images/logo.svg";

function Page404() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (
    <Container
      maxW="100vw"
      display="flex"
      flexDirection="column"
      p="0"
      height="140vh"
      justifyContent="space-between"
    >
      <Box
        as="header"
        padding={["10px 10px", "10px 30px", "10px 80px", "10px 130px"]}
        maxW="100vw"
        display="flex"
        flexDir="column"
        bg="#5F40A6"
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
          {isMobile ? <MenuMobile /> : <MyMenu />}
        </Box>
      </Box>
      <Box
        alignSelf="center"
        display="flex"
        flexDir="column"
        alignItems="center"
        position="relative"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition="200ms ease"
      >
        <Heading as="h2" fontSize="120px" fontWeight="700" color="#5F40A6">
          Ooops!
        </Heading>
        <Text
          fontSize="17px"
          fontWeight="700"
          color="#5F40A6"
          alignSelf="flex-start"
          mt="-20px"
          ml="13px"
        >
          404- PÁGINA NÃO EXISTE
        </Text>
        <Button
          mt={["30px", "30px", "30px", "30px", "40px"]}
          borderRadius="0"
          color="white"
          bg="#FE5996"
          _hover={{ bg: "#FE5996" }}
          fontWeight="700"
          fontSize="24px"
          lineHeight="29px"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition="400ms ease"
          padding="0"
        >
          <Link as={RouterLink} to="/" padding="8px 26px" _hover="">
            voltar para home
          </Link>
        </Button>
      </Box>
      <Footer />
    </Container>
  );
}

export default Page404;
