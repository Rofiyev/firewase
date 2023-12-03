//?=== IMPORT HOME CSS FILE ===?//
import "./index.css";
import { useEffect, useRef, useState } from "react";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import partners_1 from "../../assets/partners_1.webp";
import partners_2 from "../../assets/partners_2.webp";
import {
  accordionData,
  cardCantrol,
  cardsTwoBox,
  documentItems,
} from "../../constants";
import { IAccordionGallery, ICard, IDocumentItems } from "../../interface";
import { Newsletter } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
  const ref = useRef<null>(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  const [bgIsActive, setBgIsActive] = useState<boolean>(false);
  const [accordionActive, setAccordionActive] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 0.8) setBgIsActive(true);
      else setBgIsActive(false);
    });
  }, []);

  const handleScroll = () => {
    const elem = document.querySelector(".home_2") as HTMLDivElement;
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <section id="home" className="home" style={{}}>
        <div className="home__main">
          <div className="info">
            <h1 className="linear_gradient_title__light">
              Powerful Revenue Recognition Software
            </h1>
            <p>
              Gain confidence in your revenue so you can close the books 5X
              faster, maintain ASC 606 / IFRS 15 compliance, and deliver
              insights that drive growth.
            </p>
            <div className="btns__info">
              <button>Request a Demo</button>
              <button>Watch Video</button>
            </div>
          </div>
          <div className="images__wrapper">
            <animated.div
              ref={ref}
              style={{
                ...style,
              }}
              {...mouseHandlers}
            >
              <img src={home__image} alt="Certificate" />
            </animated.div>
          </div>
        </div>
      </section>

      <section
        className="home__bottom"
        style={{ background: bgIsActive ? "#fff" : "#164234" }}
      >
        <div className="slider-title">
          <p>
            Powering Top Accounting Teams with Automated Revenue Recognition
          </p>
        </div>
        <div
          className="logos"
          style={{ position: bgIsActive ? "static" : "relative" }}
        >
          <div className="logos-slide">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`${i % 2 === 0 ? partners_1 : partners_2}`}
                alt="logo"
              />
            ))}
          </div>
          <div className="logos-slide">
            {[...Array(15)].map((_, i) => (
              <img
                key={i}
                src={`${i % 2 === 0 ? partners_1 : partners_2}`}
                alt="logo"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="home_2"
        style={{ background: bgIsActive ? "#fff" : "var(--dark_green)" }}
      >
        <div className="arrow__container" onClick={handleScroll}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        <div className="container">
          <div className="home_2_titles">
            <h3 className="linear_gradient_title">
              Take control of your revenue… the right way.
            </h3>
            <p>
              Achieve ASC 606 / IFRS 15 compliance with unmatched speed and
              scalability.
            </p>
          </div>
          <div className="home_2_box">
            {cardCantrol.map(({ id, title, desc, img }: ICard) => (
              <div key={id} className="box">
                <img src={img} alt={title} />
                <p>{title}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <button className="home_2_btn">Why RIGHTREV</button>
          </div>
        </div>

        <section className="cards_wrapper">
          <div className="container">
            <div className="cards_two">
              <div className="cards_two_titles">
                <h2 className="linear_gradient_title__light">
                  Own your revenue from start to finish
                </h2>
                <p>Automate every use case for maximum performance</p>
              </div>
              <div className="box_cards_two">
                {[
                  ...cardsTwoBox,
                  ...cardsTwoBox.slice(0, cardsTwoBox.length - 1),
                ].map(({ id, title, desc, img }: ICard) => (
                  <div className="box" key={id}>
                    <img src={img} alt="" />
                    <p>{title}</p>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="accordion" style={{ paddingTop: "2rem" }}>
        <h2
          className="linear_gradient_title"
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          Own your revenue from start to finish
        </h2>
        <div className="container">
          <div className="accordion_image_gallery">
            {accordionData.map((item: IAccordionGallery) => (
              <div
                key={item.id}
                className={`accordion_item ${
                  item.id === accordionActive && "active"
                }`}
                onClick={() => setAccordionActive(item.id)}
              >
                <div className="left">
                  <div className="accordion-header">
                    <span className="numbers">{item.number}</span>
                    <span className="title">{item.header_title}</span>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-caption">
                      <h4>{item.body_title}</h4>
                      <p>{item.body_desc}</p>
                    </div>
                    <div className="accordion-images">
                      <img src={item.img} alt="Accordion image 01" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documentation" className="feedback-wrapper">
        <div className="container">
          <div className="row_1">
            <div className="feedback-title">
              <h2 className="linear_gradient_title">
                Don`t just take our word for it. Read what our customers are
                saying.
              </h2>
              <div className="documents">
                {documentItems.map(
                  ({ id, title, desc, img, params }: IDocumentItems) => (
                    <div key={id} className="box">
                      <Link
                        to={`/documents/${params}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img src={img} alt="Documents image" />
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </section>
    </Layout>
  );
}
