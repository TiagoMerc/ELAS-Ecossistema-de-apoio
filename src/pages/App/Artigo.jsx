import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes, { string } from "prop-types";

function Artigo({
  imagem,
  title,
  maxW,
  gridRow,
  height,
  alignSelf,
  destaque,
  w,
}) {
  const fontsize = destaque
    ? ["4xl", "4xl", "4xl", "40px"]
    : ["2xl", "2xl", "2xl", "24px"];
  const lineheigth = destaque
    ? ["4xl", "4xl", "4xl", "53px"]
    : ["2xl", "2xl", "2xl", "32px"];
  return (
    <Box
      as="a"
      href="#"
      bg={`linear-gradient(0.81deg, #000000 -22.69%, rgba(0, 0, 0, 0.553302) 3.78%, rgba(0, 0, 0, 0) 56.77%), url(${imagem}) center no-repeat`}
      w={w}
      maxW={maxW}
      gridRow={gridRow}
      borderRadius="14px"
      height={height}
      alignSelf={alignSelf}
      display="flex"
      alignItems="flex-end"
    >
      <Heading
        color="white"
        ml="17px"
        mb="10px"
        fontSize={fontsize}
        lineHeight={lineheigth}
      >
        {title}
      </Heading>
    </Box>
  );
}

Artigo.propTypes = {
  title: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  maxW: PropTypes.string.isRequired,
  gridRow: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  w: PropTypes.arrayOf(string).isRequired,
  alignSelf: PropTypes.arrayOf(string),
  destaque: PropTypes.bool,
};

Artigo.defaultProps = {
  alignSelf: ["unset"],
  destaque: false,
};

export default Artigo;
