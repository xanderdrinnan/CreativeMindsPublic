import React from "react";
import "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <section className="copyrightContainer">
          © 2020 Xander Drinnan. All Rights Reserved.
        </section>
        <section className="iconContainer">
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              id="twitterIcon"
              className="media-icon"
              icon={faTwitter}
            />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon
              id="facebookIcon"
              className="media-icon"
              icon={faFacebookSquare}
            />
          </a>
        </section>
      </footer>
    </div>
  );
}
