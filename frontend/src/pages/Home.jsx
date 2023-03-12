import React from "react";
import About from "../components/About";
import Maincomponent from "../components/Maincomponent";
import Navbar from "../components/Navbar";
import Seller from "../components/Seller";

export default function Home() {
  return (
    <>
      <Navbar />
      <Maincomponent />
      <About />
      <Seller />
    </>
  );
}
