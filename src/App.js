import React from "react";
import DrawerAppBar from "./components/DrawerAppBar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="portfolio">
        <Portfolio />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
