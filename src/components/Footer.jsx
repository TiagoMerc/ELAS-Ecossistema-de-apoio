import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container
      as="footer"
      display="flex"
      flexDir={["column", "column", "row"]}
      maxW="100vw"
      padding={[
        "30px 30px",
        "30px 30px",
        "30px 30px",
        "30px 50px",
        "72px 135px",
      ]}
      mt={["30px", "30px", "30px", "50px"]}
      justifyContent="space-between"
      bg="#5F40A6"
    >
      <Box display="flex" flexDir="column" mb={["30px", "30px", "0"]}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            as="a"
            href="#"
            display="flex"
            alignItems="center"
            padding="0"
            mb="10px"
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
        </Box>
        <Text
          fontSize={["md", "md", "md", "20px"]}
          lineHeight={["md", "md", "md", "27px"]}
          color="white"
          mb="6px"
        >
          Todos os direitos reservados
        </Text>
        <Text
          as="a"
          href="#"
          fontWeight="600"
          fontSize={["md", "md", "md", "20px"]}
          lineHeight={["md", "md", "md", "27px"]}
          color="white"
        >
          Política de Privacidade
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir="row"
        flexWrap={["wrap", "wrap", "unset"]}
        gap={["20px", "20px", "unset"]}
        justifyContent={["space-between", "space-between", "unset"]}
      >
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0", "0", "20px", "100px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Sobre o projeto
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Quem somos
            </Text>
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Como funciona
            </Text>
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Entenda melhor
            </Text>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0px", "0px", "20px", "35px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Dicas pra elas!
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Nosso Blog
            </Text>
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Artigo 1
            </Text>
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Artigo 2
            </Text>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0", "0", "20px", "35px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Tire suas dúvidas
          </ListItem>
          <ListItem mb="7px">
            <Text
              as="a"
              href="#"
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Contato
            </Text>
          </ListItem>
        </UnorderedList>
        <Box display="flex" flexDir="column" ml={["0", "0", "20px", "35px"]}>
          <Text
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Fale com a gente!
          </Text>
          <Text
            as="a"
            href="#"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="17px"
          >
            projetoelas@elas.com.br
          </Text>
          <Box display="flex">
            <Link href="#instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            <Link href="#tiktok" ml="24px">
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            <Link href="#whatsapp" ml="24px">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            <Link href="#facebook" ml="24px">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
