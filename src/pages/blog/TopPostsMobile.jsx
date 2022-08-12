import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function TopPostsMobile() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="#5F40A6" />}
        bg="#EBEBEB80"
        color="#5F40A6"
      >
        Top Posts
      </MenuButton>
      <MenuList>
        <MenuItem as="a" href="#post">
          Post mais acessado
        </MenuItem>
        <MenuItem as="a" href="#post">
          Post mais acessado
        </MenuItem>
        <MenuItem as="a" href="#post">
          Post mais acessado
        </MenuItem>
        <MenuItem as="a" href="#post">
          Post mais acessado
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default TopPostsMobile;
