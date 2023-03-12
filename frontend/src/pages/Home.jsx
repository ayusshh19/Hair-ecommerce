import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Maincomponent from "../components/Maincomponent";
import Navbar from "../components/Navbar";
import Seller from "../components/Seller";
import Fixec from "../utils/Fixec";

export default function Home() {
  return (
    <>
      <Navbar />
      <Maincomponent />
      <About />
      <Seller />
      <Contact />
      <Footer />
      <Fixec />
    </>
  );
}
