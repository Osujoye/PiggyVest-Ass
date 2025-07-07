import React from "react";
import Hero from "../Components/blocks/Hero";
import Savings from "../Components/blocks/Saving";
import Security from "../Components/blocks/Security";
import Invest from "../Components/blocks/Invest";
import Saver from "../Components/blocks/Saver";
import Icon from "../Components/blocks/Icon";
import Comment from "../Components/blocks/Comment";

const Home = () => {
  return (
    <div>
      <Hero />
      <Security />
      <Savings />
      <Invest />
      <Saver />
      <Comment />
      <Icon />
    </div>
  );
};

export default Home;
