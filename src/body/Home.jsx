import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "../layouts/Navbar";
import Footer from "../footer/Footer";
import { API_KEY } from "../utils/constraints";
import PopularMovie from "./PopularMovie";
import TopRated from "./TopRated";
import Upcomming from "./UpcommingMovie";

const Home = ({}) => {

  return (
    <>
      <PopularMovie />
      <TopRated />
      <Upcomming />
    </>
  );
};

export default Home;
