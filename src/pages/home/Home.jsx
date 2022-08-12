import React from "react";
import Header from "./Header";
import Blog from "./Blog";
import Oquee from "./Oquee";
import ComoFunciona from "./ComoFunciona";
import EntendaMelhor from "./EntendaMelhor";
import { Footer } from "../../components";

function Home() {
  return (
    <>
      <Header />
      <Blog />
      <Oquee />
      <ComoFunciona />
      <EntendaMelhor />
      <Footer />
    </>
  );
}

export default Home;
