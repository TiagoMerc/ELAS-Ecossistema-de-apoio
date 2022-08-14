import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function SectionForms() {
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
        maxW={["100%", "100%", "100%", "60%", "700px"]}
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
          Entre em contato <br /> para tirar suas dúvidas
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
      </Box>
      <Box
        maxW={["100%", "100%", "100%", "800px"]}
        display="flex"
        w={["100%", "100%", "70%", "50%", "40%"]}
        flexDir="column"
        padding="30px"
        borderRadius="20px"
        backgroundColor="rgba(235, 235, 235, 0.5);"
      >
        <FormControl isRequired display="flex" flexDir="column" gap="20px">
          <Box>
            <FormLabel>Seu Nome</FormLabel>
            <Input
              maxW={["100%", "100%", "100%", "800px"]}
              placeholder="Digite seu nome"
              _hover={{ borderWidth: "2px" }}
              _focus={{
                borderColor: "#5F40A6",
                borderWidth: "2px",
                outline: "none",
              }}
              borderColor="#5F40A6"
            />
          </Box>
          <Box>
            <FormLabel>Seu Email</FormLabel>
            <Input
              maxW={["100%", "100%", "100%", "800px"]}
              _hover={{ borderWidth: "2px" }}
              _focus={{
                borderColor: "#5F40A6",
                borderWidth: "2px",
                outline: "none",
              }}
              placeholder="Digite seu email"
              borderColor="#5F40A6"
              type="email"
            />
          </Box>
          <Box>
            <FormLabel>De onde você conheceu ELAS?</FormLabel>
            <Input
              _hover={{ borderWidth: "2px" }}
              _focus={{
                borderColor: "#5F40A6",
                borderWidth: "2px",
                outline: "none",
              }}
              maxW={["100%", "100%", "100%", "800px"]}
              placeholder="Digite seu texto"
              borderColor="#5F40A6"
            />
          </Box>
          <Box>
            <FormLabel>Mensagem</FormLabel>
            <Textarea
              _hover={{ borderWidth: "2px" }}
              _focus={{
                borderColor: "#5F40A6",
                borderWidth: "2px",
                outline: "none",
              }}
              borderColor="#5F40A6"
              placeholder="Digite o assunto do seu texto"
              size="sm"
            />
          </Box>
          <Button backgroundColor="#5F40A6" colorScheme="none" size="lg">
            Enviar
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default SectionForms;
