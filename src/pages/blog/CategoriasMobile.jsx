import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function CategoriasMobile() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="#5F40A6" />}
        bg="#EBEBEB80"
        color="#5F40A6"
      >
        Categorias
      </MenuButton>
      <MenuList>
        <MenuItem as="a" href="#categoria">
          Categoria 1
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 2
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 3
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 4
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 5
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 6
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 7
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Categoria 8
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default CategoriasMobile;
