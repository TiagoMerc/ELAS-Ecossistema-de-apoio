import React from "react";
import { Box, Text } from "@chakra-ui/react";

function MyMenu() {
  const pages = [
    { title: "Início", link: "#", first: true, special: true },
    { title: "Quem Somos", link: "#" },
    { title: "Contato", link: "#" },
    { title: "Blog", link: "#" },
  ];

  return (
    <Box display="flex">
      {pages.map(({ title, link, first, special }) => (
        <Text
          key={title}
          as="a"
          href={link}
          fontWeight={special ? "600" : "400"}
          fontSize="20px"
          lineHeight="27px"
          color="white"
          ml={first ? "0px" : "13px"}
          _hover={{ color: "#FE5996" }}
        >
          {title}
        </Text>
      ))}
    </Box>
  );
}

export default MyMenu;
