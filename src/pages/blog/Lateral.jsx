import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import CategoriasBox from "./CategoriasBox";
import CategoriasMobile from "./CategoriasMobile";
import TopPostsMobile from "./TopPostsMobile";
import TopPostsBox from "./TopPostsBox";

function Lateral() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (
    <Box
      as="aside"
      display="flex"
      flexDir="column"
      maxW={["100%", "100%", "250px", "250px", "337px"]}
      w="100%"
      mr={["0", "0", "40px"]}
    >
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="#5F40A6" />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Pesquise aqui"
          bg="#EBEBEB80"
          color="#5F40A6"
          _placeholder={{ color: "#5F40A6" }}
        />
      </InputGroup>
      <Box
        display="flex"
        flexDir={["row", "row", "column"]}
        justifyContent={["flex-start", "flex-start", "unset"]}
        gap={["15px", "25px", "unset"]}
        mt={["20px", "20px", "0px"]}
        mb={["20px", "20px", "0px"]}
      >
        {isMobile ? <CategoriasMobile /> : <CategoriasBox />}
        {isMobile ? <TopPostsMobile /> : <TopPostsBox />}
      </Box>
    </Box>
  );
}

export default Lateral;
