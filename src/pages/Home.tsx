import * as React from "react";
import Favorite from "../components/Favorites";
import FloatingFollow from "../components/FloatingFollow";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Highlights from "../components/Highlights";
import MonthSpecial from "../components/MonthSpecial";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Favorite />
      <MonthSpecial />
      <Testimonials />
      <Highlights />
      <FloatingFollow />
      <Footer />
    </>
  );
}
