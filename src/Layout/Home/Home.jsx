import React from "react";
import OurStory from "../../pages/OurStory";

import SlidBannar from "../../pages/SlidBannar/SlidBannar";
import ClientMan from "../../pages/ClientsSay/ClientMan";
import Booking from "../../pages/Booking/Booking";
import Chef from "../ChefSection/Chef";
import WeAreDoing from "../../pages/WeAreDoing/WeAreDoing";
import Liketoday from "../../pages/Liketoday";

const Home = () => {
  return (
    <div>
      <SlidBannar></SlidBannar>
      <WeAreDoing></WeAreDoing>
      <Chef></Chef>
      <Liketoday></Liketoday>
      <OurStory></OurStory>
      <ClientMan></ClientMan>
      <Booking></Booking>
    </div>
  );
};

export default Home;
