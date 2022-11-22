import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";

function ComoFunciona() {
  return (
    <Container
      as="section"
      id="comofunciona"
      display="flex"
      flexDir="column"
      maxW="100vw"
      padding={[
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 50px 30px 50px",
        "0 170px 30px 170px",
      ]}
      mt={["30px", "30px", "30px", "50px"]}
    >
      <Heading
        as="h2"
        color="#5F40A6"
        mb="30px"
        fontWeight="700"
        fontSize={["4xl", "4xl", "4xl", "40px"]}
        lineHeight={["4xl", "4xl", "4xl", "53px"]}
      >
        Como funciona
      </Heading>
      <Accordion allowToggle>
        <AccordionItem borderRadius="16px" mb="35px" bg="#5F40A6">
          <h3>
            <AccordionButton
              bg="#9C79F2"
              borderRadius="16px"
              _expanded={{ bg: "#5F40A6" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Tecnologia
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
            Apoio, desenvolvimento e manutenção de negócios usando tecnologia como instrumento.

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px" bg="#5F40A6">
          <h3>
            <AccordionButton
              bg="#9C79F2"
              borderRadius="16px"
              _expanded={{ bg: "#5F40A6" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Ecossistema
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
            O hub de inovação tem o foco de impulsionar negócios inovadores. As atividades são direcionadas 
            ao público da região de Diamantina, de modo a gerar inovação por meio de uma rede integrada com a realidade local.
            Quando startups/mulheres participam do hub de inovação, elas vão está em contato diretamente com os demais agentes do ecossistema local.
             São empresas de médio e grande porte, investidores, além de instituições de ensino e profissionais especialistas em diversas frentes.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px" bg="#5F40A6">
          <h3>
            <AccordionButton
              bg="#9C79F2"
              borderRadius="16px"
              _expanded={{ bg: "#5F40A6" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Interação
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
            Ampliação de oportunidades com a interação dos atores da Tríplice Hélice, com governo, empresas e universidade.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default ComoFunciona;
