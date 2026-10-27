import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>Explore</h3>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#about">FAQ</a>
          <a href="#work">Help</a>
          <a href="#articles">Contact us</a>
        </div>

        <div>
          <h3>Stay connected</h3>

          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>2026 DEV@Deakin - Ishika Sharma</p>

        <p className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          <a href="#code">Code of Conduct</a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;