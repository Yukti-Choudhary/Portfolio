import React from "react";
import "./about.css";
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const About = () => {
  return (
    <div className="about">
      <div className="about__details">
        As an aspiring frontend developer, I am passionate about creating
        visually appealing and user-friendly web experiences. With hunger for
        continuous learning, I am committed to delivering elegant, responsive,
        and accessible solutions. I thrive on collaborating with teams to turn
        ideas into captivating digital realities.
      </div>
      <div className="about__contact">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/yukti-choudhary-649a05139/"
          target="_blank"
        >
          <BiLogoLinkedin size={20} title="LinkedIn" />
        </a>
        <a href="mailto:yuktichoudhary09@gmail.com">
          <BiLogoGmail size={20} title="Gmail" />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/Yukti-Choudhary?tab=repositories"
          target="_blank"
        >
          <BiLogoGithub size={20} title="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default About;
