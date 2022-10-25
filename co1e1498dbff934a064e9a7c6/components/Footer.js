import React from "react";


export default function Footer() {
  return (
    <footer className="footer-style">
      <div className="footer-socialMedia">
        <a
         target="_blank"
          rel="noopener noreferrer"
         className="footer-links"
          href="https://github.com/t-lefty"
        >
          <img
            src="./assets/Github-logo.png"
            alt="Click to open Tasha's GitHub"
            className="footer-socialIcons"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
          href="https://twitter.com/tokenotmakinwa"
        >
          <img
            src="./assets/Twitter-logo.png"
            alt="Click to open Tasha's Twitter"
            className="footer-socialIcons"
          />
        </a>
      </div>
    </footer>
  );
}
