import React from "react";
import Members from "../miniComponents/Members.jsx";
import Qualities from "../miniComponents/Qualities.jsx";
import Hero from "../miniComponents/Hero.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Members />
      <Qualities />
    </>
  );
};

export default Home;