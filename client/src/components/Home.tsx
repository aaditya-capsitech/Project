import React from "react";
import ScrollLinked from "../components/ScrollLinked";
import Content from "../components/Content";


const Home = () => {
  return (
    <>
      <ScrollLinked /> {/* Only renders Hero + Sponsor + animated scroll */}
      <Content />       {/* Renders rest of the page after scroll section */}
    </>
  );
};

export default Home;

