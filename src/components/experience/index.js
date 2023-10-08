import React, { useRef, useState } from "react";
import "./experience.css";
import experience from "../../constants/experience.json";
import CarousalArrow from "../carousalArrow";

const Experience = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const boxRef = useRef(null);

  const handleBack = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prev) => prev - 1);
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft -= width;
  };

  const handleNext = () => {
    if (slideIndex === experience.length - 1) return;
    setSlideIndex((prev) => prev + 1);
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft += width;
  };

  return (
    <div className="experience">
      <video src="./video.mp4" autoPlay loop muted />
      <div className="experience__list" ref={boxRef}>
        {experience.map((list) => {
          return (
            <div key={list.id} className="experience__listDetails">
              <h1>{list.position}</h1>
              <h2>{list.company}</h2>
              <h4>{list.year}</h4>
              <ul>
                {list.work.split("\n").map((work, i) => {
                  return <li key={i}>{work}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="experience__icons">
        <CarousalArrow
          index={experience.length}
          handleBack={handleBack}
          handleNext={handleNext}
          slideIndex={slideIndex}
        />
      </div>
    </div>
  );
};

export default Experience;
