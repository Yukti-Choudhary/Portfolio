import React from "react";
import "./carousalArrow.css";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CarousalArrow = ({ index, handleNext, handleBack, slideIndex }) => {
  const navigate = useNavigate();

  return (
    <div className="carousal">
      {slideIndex === 0 ? (
        <span className="carousal__back" onClick={() => navigate("/")}>
          Home
        </span>
      ) : (
        <span className="carousal__back" onClick={handleBack}>
          <HiOutlineArrowLeft size={30} />
        </span>
      )}
      {slideIndex === index - 1 ? (
        <span className="carousal__next" onClick={() => navigate("/")}>
          Home
        </span>
      ) : (
        <span className="carousal__next" onClick={handleNext}>
          <HiOutlineArrowRight size={30} />
        </span>
      )}
    </div>
  );
};

export default CarousalArrow;
