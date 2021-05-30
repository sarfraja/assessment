import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/corona-logo-illustration-png-clip-art.png?auto=format&q=60&w=910&h=682.5&fit=crop&crop=faces" className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">ABOUT US +</a>
          <a href="/">OUR DIFFERENCE</a>
          <a href="/">WHO WE SERVE</a>
          <a href="/">SERVICES +</a>
          <a href="/">RESOURCES +</a>
          <a href="/">CONTECT</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img" aria-label="">
          {" "}
          🍔{" "}
        </span>
      </button>
    </header>
  );
}
