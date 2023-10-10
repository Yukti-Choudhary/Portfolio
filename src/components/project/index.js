import React, { useRef, useState } from "react";
import "./project.css";
import project from "../../constants/project.json";
import CarousalArrow from "../carousalArrow";

const Project = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const boxRef = useRef(null);

  const handleBack = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prev) => prev - 1);
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft -= width;
  };

  const handleNext = () => {
    if (slideIndex === project.length - 1) return;
    setSlideIndex((prev) => prev + 1);
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft += width;
  };

  return (
    <div className="project">
      <video src="./video.mp4" muted autoPlay loop />
      <div className="project__datails" ref={boxRef}>
        {project.map((list) => {
          return (
            <div key={list.id}>
              <h1>{list.name}</h1>
              <div className="project__datailsMain">
                <a href={list.link} target="_blank" rel="noopener noreferrer">
                  <img src={list.img} alt={list.name} loading="lazy" />
                </a>
                <ul>
                  {list.details.map((item) => {
                    return (
                      <li key={item.id}>
                        <p>{item.info}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="project__icons">
        <CarousalArrow
          index={project.length}
          handleBack={handleBack}
          handleNext={handleNext}
          slideIndex={slideIndex}
        />
      </div>
    </div>
  );
};

export default Project;
