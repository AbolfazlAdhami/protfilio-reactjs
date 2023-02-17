import React from "react";
import Wrapper from "../../HOC/Wrapper";
import Navbar from "../../Component/Navbar/Navbar";
import "./Main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Conact from "../Contact/Contact";
import AboutMe from "../AbouteMe/AbouteMe";
import ResNav from "../../Component/ResNav/ResNav";
function MainLayout() {
  return (
    <Wrapper>
      <div className="Main">
        <Navbar />
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="conatc" element={<Conact />} />
          <Route exact path="aboutme" element={<AboutMe />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <ResNav />
      </div>
    </Wrapper>
  );
}

export default MainLayout;
