import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MyMenu() {
  const pages = [
    { title: "Início", link: "/", first: true, special: true },
    { title: "Quem Somos", link: "/quem-somos" },
    { title: "Contato", link: "/contato" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <Box display="flex">
      {pages.map(({ title, link, first, special }) => (
        <Link
          key={title}
          as={RouterLink}
          to={link}
          fontWeight={special ? "600" : "400"}
          fontSize="20px"
          lineHeight="27px"
          color="white"
          ml={first ? "0px" : "13px"}
          _hover={{ color: "#FE5996" }}
        >
          {title}
        </Link>
      ))}
    </Box>
  );
}

export default MyMenu;
