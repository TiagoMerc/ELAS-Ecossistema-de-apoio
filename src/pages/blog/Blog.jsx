import React from "react";
import { Box, Container, Heading, Highlight, Image } from "@chakra-ui/react";
import MyMenu from "../../components/MyMenu";
import Logo from "../../images/logo.svg";
import ImageHeader from "../../images/blogheader.png";

function Blog() {
  return (
    <Container
      as="header"
      maxW="100vw"
      display="flex"
      flexDir="column"
      padding="60px 186px 0 135px"
      bg="#5F40A6"
    >
      <MyMenu />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Image src={Logo} w="85px" h="90px" mr="25px" />
          <Heading
            fontWeight="700"
            fontSize="5xl"
            lineHeight="5xl"
            color="white"
            as="h1"
          >
            <Highlight
              query="elas"
              styles={{
                textDecor: "underline #FE5996",
                color: "white",
                textUnderlineOffset: "6px",
              }}
            >
              BLOG PRA ELAS
            </Highlight>
          </Heading>
        </Box>
        <Box
          bg="#754DD0"
          alignSelf="flex-end"
          w="385px"
          h="306px"
          borderRadius="45px 45px 0px 0px"
          display="grid"
          placeItems="center"
          position="relative"
        >
          <Image
            src={ImageHeader}
            position="absolute"
            top="-30px"
            transform="translate(-10px)"
            maxW="546px"
            zIndex="1"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Blog;
