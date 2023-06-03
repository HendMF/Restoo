import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer">
        <div className="info">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            gitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Linkaedin
          </a>
        </div>
        <h2 className="heading">
          Created By <span>Hind Mahmoud </span>| All Rights Reserved!
        </h2>
      </div>
    </section>
  );
};

export default Footer;
