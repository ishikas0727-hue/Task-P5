import React from "react";

function Header({ goTo }) {
  return (
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
      <button onClick={() => goTo("newpost")}>New Post</button>
      <span className="auth-nav">
        <button onClick={() => goTo("login")}>Login</button>
        <button onClick={() => goTo("signup")}>Register</button>
      </span>
    </nav>
  );
}

export default Header;
