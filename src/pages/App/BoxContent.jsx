import React from "react";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function BoxContent({ title, text }) {
  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" alignItems="center" marginBottom="13px">
        <IconButton bg="#5F40A6" size="sm" marginRight="3px" />
        <Heading
          as="h3"
          fontWeight="700"
          fontSize="24px"
          lineHeight="32px"
          color="#5F40A6"
        >
          {title}
        </Heading>
      </Box>
      <Text fontWeight="400" fontSize="18px" lineHeight="24px" color="#5F40A6">
        {text}
      </Text>
    </Box>
  );
}

BoxContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BoxContent;
