import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

function MyMenu() {
  const pages = [
    { title: "Início", link: "/" },
    { title: "Quem Somos", link: "/quem-somos" },
    { title: "Contato", link: "/contato" },
    { title: "Blog", link: "/blog" },
  ];

  const { pathname } = useLocation();

  return (
    <Box display="flex" gap="20px">
      {pages.map(({ title, link }) => (
        <Link
          key={title}
          as={RouterLink}
          to={link}
          fontWeight={link === pathname ? "600" : "400"}
          fontSize="20px"
          lineHeight="27px"
          color="white"
          _hover={{ color: "#FE5996" }}
        >
          {title}
        </Link>
      ))}
    </Box>
  );
}

export default MyMenu;
