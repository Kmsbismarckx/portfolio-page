import '@/styles/Home.scss';
import { AboutMe, Contacts, Introduction, Projects, Skills } from '@/components';

export const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
};
