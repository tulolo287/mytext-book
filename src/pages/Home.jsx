import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";

import { homeObjOne, homeObj2 } from "../components/InfoSection/Data";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <Services/>
      <InfoSection {...homeObj2} />
      <Footer/>
    </>
  );
};
export default Home;
