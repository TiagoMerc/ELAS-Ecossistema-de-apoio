import React from "react";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function MenuMobile() {
  const pages = [
    { title: "Início", link: "#", first: true, special: true },
    { title: "Quem Somos", link: "#" },
    { title: "Contato", link: "#" },
    { title: "Blog", link: "#" },
  ];

  return (
    <Menu>
      <MenuButton
        bg="#754DD0"
        color="white"
        as={Button}
        _expanded={{ bg: "#754DD0" }}
        rightIcon={<ChevronDownIcon color="white" />}
      >
        Menu
      </MenuButton>
      <MenuList>
        {pages.map(({ title, link }) => (
          <MenuItem key={title} as="a" href={link}>
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuMobile;
