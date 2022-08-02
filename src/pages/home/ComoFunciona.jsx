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
                Section 1 title
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                Section 2 title
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                Section 3 title
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default ComoFunciona;
