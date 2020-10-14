import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavMenu.module.scss";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function NavMenu(props) {
  let [viewAddress, setViewAddress] = useState(false);
  let [viewPhone, setViewPhone] = useState(false);
  let [viewEmail, setViewEmail] = useState(false);
  const displayTopBar = useMediaQuery({
    query: "(min-device-width: 991px)",
  });

  const handleVisibility = (getId) => {
    switch (getId) {
      case "phone-id":
        setViewPhone(!viewPhone);
        setViewEmail((viewEmail = false));
        setViewAddress((viewAddress = false));
        setTimeout(() => {
          setViewPhone((viewPhone = false));
        }, 15000);
        break;
      case "address-id":
        setViewAddress(!viewAddress);
        setViewPhone((viewPhone = false));
        setViewEmail((viewEmail = false));
        setTimeout(() => {
          setViewAddress((viewAddress = false));
        }, 15000);
        break;
      case "email-id":
        setViewEmail(!viewEmail);
        setViewAddress((viewAddress = false));
        setViewPhone((viewPhone = false));
        setTimeout(() => {
          setViewEmail((viewEmail = false));
        }, 15000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="headerWrapper">
      <div className="logoContainer">
        <Link href="/">
          <img src="/Logo150.svg" alt="Logo of Xander Business" />
        </Link>
        <div className="titleContainer">
          <h1>Xander Business</h1>
          <h2>Children's Services</h2>
        </div>
      </div>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/About" className="nav-link">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/Gallery" className="nav-link">
              <a className="nav-link">Gallery</a>
            </Link>
            <Link href="/Testimonials" className="nav-link">
              <a className="nav-link">Testimonials</a>
            </Link>
            <Link href="/Programs" className="nav-link">
              <a className="nav-link">Programs</a>
            </Link>
            <Link href="/Contact" className="nav-link">
              <a className="nav-link">Contact Us</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {displayTopBar && (
        <div>
          <div className="contact-container">
            <div className="address-container" id="address-container">
              <FontAwesomeIcon
                className="nav-icons"
                icon={faHome}
                onClick={() => handleVisibility("address-id")}
              />
            </div>
            <div className="phone-container" id="phone-container">
              <FontAwesomeIcon
                className="nav-icons"
                icon={faPhoneSquare}
                id="phone-id"
                onClick={() => handleVisibility("phone-id")}
              />
            </div>
            <div className="mail-container" id="mail-container">
              <FontAwesomeIcon
                className="nav-icons"
                icon={faEnvelope}
                id="email-id"
                onClick={() => handleVisibility("email-id")}
              />
            </div>
          </div>
          <div className="popout-info-container">
            <div
              style={{ visibility: viewAddress ? "visible" : "hidden" }}
              className="address-pop popout"
            >
              <p>Kitchener-Waterloo, Ontario</p>
            </div>
            <div
              style={{ visibility: viewPhone ? "visible" : "hidden" }}
              className="phone-pop popout"
            >
              <p>+1 519 761 3069</p>
            </div>
            <div
              style={{ visibility: viewEmail ? "visible" : "hidden" }}
              className="email-pop popout"
            >
              <p>xanderdrinnan1998@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
