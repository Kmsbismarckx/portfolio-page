import React, { useEffect, useRef, useState } from "react";
import scrollXHandler from "../../helpers/scrollXHandler";

function AboutMe() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      scrollXHandler(event, aboutRef, setScrollPercent)
    );
    return () =>
      window.removeEventListener("scroll", (event) =>
        scrollXHandler(event, aboutRef, setScrollPercent)
      );
  }, [scrollPercent]);

  return (
    <div className="about" ref={aboutRef}>
      <div
        className="about__title"
        style={{ transform: `translate(${scrollPercent}%)` }}
      >
        ABOUT ME
      </div>
      <div className="about__description">
        Начинающий Front-end разработчик, пунктуален и ответственен.
      </div>
    </div>
  );
}

export default AboutMe;
