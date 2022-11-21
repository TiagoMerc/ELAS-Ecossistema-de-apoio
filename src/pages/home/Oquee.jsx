import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import imgoquee from "../../images/oquee.png";

function Oquee() {
  return (
    <Container
      as="section"
      mt={["50px", "50px", "50px", "150px"]}
      maxW="100vw"
      display="flex"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="space-between"
      alignItems="flex-start"
      padding={[
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 50px 30px 50px",
        "0 170px 30px 170px",
      ]}
    >
      <Box
        maxW={["100%", "100%", "100%", "800px"]}
        display="flex"
        flexDir="column"
      >
        <Heading
          color="#5F40A6"
          mb="12px"
          fontWeight="700"
          fontSize={["4xl", "4xl", "4xl", "40px"]}
          lineHeight={["4xl", "4xl", "4xl", "53px"]}
        >
          O que é
        </Heading>
        <Text
          color="#5F40A6"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb="30px"
        >
          O hub de inovação se caracteriza como um ambiente onde pessoas de diversos meios se encontram para estabelecer conexões e gerar negócios.
          O ELAS, tem como propósito a promoção da cultura empreendedora e tecnológica para o público feminino.
          Dessa forma, desenvolvemos tecnologias, criamos conexões, impulsionamos novos negócios, oportunizamos a empregabilidade e liderança.

        </Text>
        <Text
          color="#5F40A6"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb="10px"
        >
          Explicação item 1
        </Text>
        <Text
          color="#5F40A6"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb="10px"
        >
          Explicação item 2
        </Text>
        <Text
          color="#5F40A6"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb={["30px", "30px", "30px", "10px"]}
        >
          Explicação item 3
        </Text>
      </Box>
      <Image
        src={imgoquee}
        alt="Woman"
        alignSelf={["center", "center", "center", "unset"]}
      />
    </Container>
  );
}

export default Oquee;
