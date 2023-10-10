import About from "../about";
import Menu from "../menu";
import "./home.css";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [menu, setMenu] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showName, setShowName] = useState(true);
  const [aboutOpacity, setAboutOpacity] = useState(true);
  const [menuOpacity, setMenuOpacity] = useState(true);

  const handleAbout = () => {
    setAbout(!about);
    setShowAbout(!showAbout);
    setMenu(true);
    setShowMenu(false);
    setShowName(!showName);
    setMenuOpacity(!menuOpacity);
  };

  const handleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
    setAbout(true);
    setShowAbout(false);
    setShowName(!showName);
    setAboutOpacity(!aboutOpacity);
  };

  useEffect(() => {
    const i = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(i);
  }, []);

  return loading ? (
    <div className="home__loading">Y</div>
  ) : (
    <div className="home">
      <video src="./video.mp4" autoPlay loop muted />
      {showName && (
        <div className="home__infoMiddle">
          <span>Yukti Choudhary</span>
          <p>Frontend Developer</p>
        </div>
      )}
      <div className="home__infoSide">
        <span
          onClick={handleAbout}
          style={
            aboutOpacity ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          {about ? "About" : "Clear"}
        </span>

        {menuOpacity && (
          <span onClick={handleMenu}>{menu ? "Menu" : "Clear"}</span>
        )}
      </div>
      {showAbout && <About />}
      {showMenu && <Menu />}
    </div>
  );
};

export default Home;
