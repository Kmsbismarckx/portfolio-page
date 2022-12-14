import React, { useEffect, useRef, useState } from "react";
import "./Skills.scss";
import scrollXHandler from "../../helpers/scrollXHandler";
import useScrollTitle from "../../hooks/useScrollTitle";

function Skills() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollStyle, setScrollStyle] = useState({
    transform: `translate(${scrollPercent}%)`,
  });
  const skillsRef = useRef(null);

  useScrollTitle(scrollStyle, setScrollStyle, scrollPercent);

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      scrollXHandler(event, skillsRef, setScrollPercent)
    );
    return () =>
      window.removeEventListener("scroll", (event) =>
        scrollXHandler(event, skillsRef, setScrollPercent)
      );
  }, [scrollPercent]);
  return (
    <div className="skills" ref={skillsRef}>
      <div className="skills__title" style={scrollStyle}>
        SKILLS
      </div>
      <div className="skills__description">
        <div className="skills__item">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Redux-toolkit</p>
        </div>
        <div className="skills__item">
          <p>SCSS</p>
          <p>GIT</p>
          <p>GSAP CDN</p>
          <p>BEM</p>
          <p>FIGMA</p>
          <p>REST API</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
