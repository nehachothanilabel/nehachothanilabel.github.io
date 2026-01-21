import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import customTheme from "./customTheme";
// import ComingSoon from "./pages/ComingSoon";
import Men from "./pages/Men";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Women from "./pages/Women";

const theme = customTheme;
const baseName = process.env.PUBLIC_URL || "";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={baseName}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
