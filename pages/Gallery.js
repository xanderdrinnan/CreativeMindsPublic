import React from "react";
import { Carousel } from "react-bootstrap";
import Head from "next/head";

import "../styling/Gallery/Gallery.module.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const title = "Xander Business | Gallery";

export default function Gallery(props) {
  return (
    <div className="gallery-container">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Gallery description for Xanders Business."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main className="gallery-body-container">
        <section className="gallery-carousel-container">
          <article className="gallery-info-container">
            <h2>What Our Building Offers</h2>
            <div className="divider"></div>
            <p>Placeholder Nice Stuff</p>
            <p>Placeholder Nice Stuff</p>
            <p>Placeholder Nice Stuff</p>
            <p>Placeholder Nice Stuff</p>
          </article>
          <Carousel indicators={false}>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
            <Carousel.Item className="galleryInner">
              <img src="/PlaceholderGalleryImage.png" alt="Placeholder Alt" />
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
      <Footer />
    </div>
  );
}
