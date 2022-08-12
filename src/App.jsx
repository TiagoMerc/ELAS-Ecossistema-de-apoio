import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contato, Blog, Page404 } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
