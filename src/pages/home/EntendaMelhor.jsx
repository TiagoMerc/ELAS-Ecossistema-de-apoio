import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function EntendaMelhor() {
  return (
    <Container
      as="section"
      id="entendamelhor"
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
      mb={["30px", "30px", "30px", "150px"]}
    >
      <Heading
        as="h2"
        color="#5F40A6"
        mb="30px"
        fontWeight="700"
        fontSize={["3xl", "4xl", "4xl", "40px"]}
        lineHeight={["4xl", "4xl", "4xl", "53px"]}
      >
        Entenda melhor
      </Heading>
      <Box
        w="100%"
        h="365px"
        display="grid"
        placeItems="center"
        bg="#5F40A6"
        borderRadius="14px"
      >
        <FontAwesomeIcon
          icon={faPlay}
          size="5x"
          color="#fff"
          cursor="pointer"
        />
      </Box>
    </Container>
  );
}

export default EntendaMelhor;
