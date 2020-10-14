import React from "react";
import { Carousel } from "react-bootstrap";
import "../styling/Home/Home.module.scss";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map/Map";
import Head from "next/head";

import Header from "../components/Header/Header";

const title = "Xander Business";

export default function Home(props) {
  return (
    <div className="Home">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Homepage for Xander Business content placeholder."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main>
        <section className="carouselContainer">
          <Carousel fade={true}>
            <Carousel.Item className="carouselInner preschool-slide">
              <img src="/BackgroundTile.png" alt="banner of images" />
              <Carousel.Caption>
                <div className="captions">
                  <h1 id="title">Placeholder Title</h1>
                  <h3>Placeholder Text</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselInner toddler-slide">
              <img src="/BackgroundTile.png" alt="banner of images" />
              <Carousel.Caption className="captions">
                <h1>Placeholder Title</h1>
                <h3>Placeholder Text</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="introduction-container">
          <article className="introduction-body-container">
            <h3>Welcome to</h3>
            <h1 style={{ color: "purple" }}>Xander Business, Brantford</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
              Xander BusinessChildren's Services Inc. strives to nurture the
              individual growth of each child's interests and independence.
            </p>
          </article>

          <article className="goalsContainer">
            <h1 style={{ color: "purple" }}>Our Goals</h1>
            <p>Provide a warm, nurturing and safe environment</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </article>
        </section>
      </main>
      <section className="location-container">
        <div className="location-info-container">
          <h1>Come Meet Us!</h1>
          <div className="divider"></div>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </section>
      <Footer />
    </div>
  );
}
