import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Blog from "./Blog";
import Oquee from "./Oquee";

function App() {
  return (
    <Box>
      <Header />
      <Blog />
      <Oquee />
    </Box>
  );
}

export default App;
