import React, { useLayoutEffect } from "react";
import "../styles/Home.scss";
import { gsap } from "gsap";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contacts from "../Components/Contacts/Contacts";

function Home() {
  const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

  useLayoutEffect(() => {
    timeline.to(".introduction__name", { y: "0%", duration: 0.7, delay: 1 });
    timeline.to(".introduction__info", { y: "0%", duration: 0.5 }, "+=0.3");
  }, []);

  return (
    <div className="home">
      <div className="introduction">
        <div className="introduction__item">
          <div className="hide">
            <span className="introduction__name hide-text">
              Kliment Maslennikov
            </span>
          </div>
        </div>
        <br />
        <div className="introduction__item">
          <div className="hide">
            <span className="introduction__info hide-text">
              Front-end developer
            </span>
          </div>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default Home;
