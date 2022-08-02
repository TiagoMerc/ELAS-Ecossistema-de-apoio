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
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro. Este texto não
          só sobreviveu 5 séculos, mas também o salto para a tipografia
          electrónica, mantendo-se essencialmente inalterada. Foi popularizada
          nos anos 60 com a disponibilização das folhas de Letraset, que
          continham passagens com Lorem Ipsum, e mais recentemente com os
          programas de publicação como o Aldus PageMaker que incluem versões do
          Lorem Ipsum.
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
