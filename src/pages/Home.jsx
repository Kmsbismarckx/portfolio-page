import React from "react";
import "../styles/Home.scss";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contacts from "../Components/Contacts/Contacts";
import Introduction from "../Components/Introduction/Introduction";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default Home;
