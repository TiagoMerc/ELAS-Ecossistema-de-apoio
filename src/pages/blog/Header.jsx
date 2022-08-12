import React from "react";
import {
  Box,
  Container,
  Heading,
  Highlight,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MyMenu, MenuMobile } from "../../components";
import Logo from "../../images/logo.svg";
import ImageHeader from "../../images/blogheader.png";

function Header() {
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
      as="header"
      maxW="100vw"
      display="flex"
      flexDir="column"
      padding={[
        "40px 30px 0 30px",
        "40px 30px 0 30px",
        "40px 30px 0 30px",
        "40px 100px 0 100px",
        "60px 186px 0 135px",
      ]}
      bg="#5F40A6"
    >
      {isMobile ? <MenuMobile mb="20px" maxW="100px" /> : <MyMenu />}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "column", "row"]}
      >
        <Box
          display="flex"
          alignItems="center"
          mb={["30px", "30px", "0"]}
          mr="20px"
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition="200ms ease"
        >
          <Image
            src={Logo}
            w="85px"
            h="90px"
            mr="25px"
            display={["none", "block"]}
          />
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
          alignSelf={["center", "center", "flex-end"]}
          w={["80%", "300px", "385px"]}
          h={["150px", "250px", "260px", "306px"]}
          borderRadius="45px 45px 0px 0px"
          display="grid"
          placeItems="center"
          position="relative"
        >
          <Image
            src={ImageHeader}
            position="absolute"
            top={["15px", "-30px", "0px", "-30px"]}
            transform="translate(-10px)"
            maxW={["200px", "400px", "400px", "546px"]}
            zIndex="1"
            as={motion.img}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition="200ms ease"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
