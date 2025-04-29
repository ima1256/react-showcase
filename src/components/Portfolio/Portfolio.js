import { Button, Stack } from "@mui/material";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import LiveCoding from "./LiveCoding";
import Footer from "./Footer";
import LiveDemo from "./LiveDemo";
import { useRef, useState } from "react";
import Timeline from "./Timeline";

const Portfolio = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const liveCodingRef = useRef(null);
  const contactRef = useRef(null);
  const liveDemoRef = useRef(null)

  const [project, setProject] = useState(null)

  const handleTabChange = (sectionName) => {

    if (sectionName === "About") {
        //aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "Projects") {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "Skills") {
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if ( sectionName === "Live Coding") {
        liveCodingRef.current.scrollIntoView({ behavior: "smooth"})
    } else if ( sectionName === "Contact") {
        contactRef.current.scrollIntoView({ behavior: "smooth"})
    }

  }

  const handleProjectChange = (project) => {

    setProject(project)
    liveDemoRef.current?.scrollIntoView({behavior: "smooth"})
    // alert(project.name)

  }

  return (
    <div className="w-full h-[100vh]">
      <Header onTabChange={handleTabChange} />
      <About ref={aboutRef} />
      <Timeline /> 
      <Projects onProjectChange={handleProjectChange} ref={projectsRef} />
      {project ? <LiveDemo project={project} ref={liveDemoRef} /> : null }
      <LiveCoding ref={liveCodingRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Portfolio;
