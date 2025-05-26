import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";
import Footer from "./components/Footer/Footer";
import HomePages from "./components/Homepages/HomePages";
import React, { useState, useEffect } from "react";
import FAQComponent from "./components/FAQS/FAQComponent";
import Team from "./components/Team";
import Eventpg from "./components/Eventpg";
import Advisor from "./components/Advisor/Advisor";
import Founders from "./components/CodebirdTeamMegaNav/Founders";
import OurStory from "./components/CodebirdTeamMegaNav/OurStory";
import DevTeam from "./components/CodebirdTeamMegaNav/DevTeam";
import WebDev from "./components/Domains/WebDev";
import AndroidDev from "./components/Domains/AndroidDev";
import CPandDSA from "./components/Domains/CPandDSA";
import MLandAI from "./components/Domains/MLandAI";
import CyberSecurity from "./components/Domains/CyberSecurity";
import Web3 from "./components/Domains/Web3";
import GameDev from "./components/Domains/GameDev";
import RobotsHardware from "./components/Domains/RobotsHardware";
import RegisterCodebird from "./components/RegisterCoadbird/RegisterCoadbird";
import Payment from "./components/RegisterCoadbird/Payment";
import Login from "./components/Login/Login";
import AlreadyMember from "./components/RegisterCoadbird/AlreadyMember";
import Paymentdone from "./components/RegisterCoadbird/Paymentdone";
import { GlobalStateProvider } from "../src/states/GlobalState";
import VideoPreloader from "./components/PreLoader/VideoPreloader";

// import ConfettiComponent from "./components/Confetti/Confetti";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <VideoPreloader />
  ) : (
    <BrowserRouter>
      <GlobalStateProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePages />} />

          <Route path="/faQs" element={<FAQComponent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Eventpg />} />
          <Route path="/register" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/membership" element={<RegisterCodebird />} />
          <Route path="/paymentdone" element={<Paymentdone />} />
          <Route path="/member" element={<AlreadyMember />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/devteam" element={<DevTeam />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/androiddev" element={<AndroidDev />} />
          <Route path="/cpanddsa" element={<CPandDSA />} />
          <Route path="/mlandai" element={<MLandAI />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/gamedev" element={<GameDev />} />
          <Route path="/robotshardware" element={<RobotsHardware />} />
        </Routes>
    
        <Footer />

      </GlobalStateProvider>
    </BrowserRouter>
  );
};

export default App;
