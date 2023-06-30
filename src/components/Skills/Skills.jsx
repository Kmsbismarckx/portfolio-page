import { useEffect, useRef, useState } from 'react';
import './Skills.scss';
import { scrollXHandler } from '@/helpers';
import { useScrollTitle } from '@/hooks';

export function Skills() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollStyle, setScrollStyle] = useState({
    transform: `translate(${scrollPercent}%)`,
  });
  const skillsRef = useRef(null);

  useScrollTitle(scrollStyle, setScrollStyle, scrollPercent);

  useEffect(() => {
    window.addEventListener('scroll', event => scrollXHandler(event, skillsRef, setScrollPercent));
    return () =>
      window.removeEventListener('scroll', event =>
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
          <p>TypeScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Redux-toolkit</p>
          <p>TanStack</p>
          <p>Vite</p>
          <p>Swagger</p>
          <p>NextJS</p>
        </div>
        <div className="skills__item">
          <p>Scss</p>
          <p>Git</p>
          <p>GSAP CDN</p>
          <p>BEM</p>
          <p>Figma</p>
          <p>REST API</p>
          <p>MUI</p>
          <p>Yup</p>
          <p>React Hook Form</p>
          <p>Axios</p>
          <p>Vitest</p>
        </div>
      </div>
    </div>
  );
}
