import React from "react";
import "./menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const googleDrivePDFLink =
    "https://docs.google.com/document/d/1xzZv3HWvsS5m3IXoJHVM7icYKH6rcAT7cuYjlQg1oLY/edit?usp=sharing";

  return (
    <div className="menu">
      <span onClick={() => navigate("/project")}>Projects</span>
      <span onClick={() => navigate("/experience")}>Experience</span>
      <span onClick={() => navigate("/skills")}>Skills</span>
      <a href={googleDrivePDFLink} target="_blank" rel="noopener noreferrer">
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Menu;
