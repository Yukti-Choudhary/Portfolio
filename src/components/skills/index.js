import React from "react";
import "./skills.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="skills">
       <video src="./video.mp4" autoPlay loop muted />
      <div className="skills__list">
        <p>JavaScript</p>
        <p>HTML, HTML 5</p>
        <p>CSS, CSS 3</p>
        <p>Styled Components</p>
        <p>React Js</p>
      </div>
      <span className="skills__back" onClick={() => navigate("/")}>
        <HiOutlineArrowLeft size={30} className="skills__icon" />
      </span>
    </div>
  );
};

export default Skills;
