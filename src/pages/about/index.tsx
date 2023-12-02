//?=== IMPORT CSS FILE ABOUT ===?//
import "./index.css";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import { useRef } from "react";
import { aboutItems } from "../../constants";
import { ICard } from "../../interface";
import { Newsletter } from "../../components";

export default function About() {
  const ref = useRef<null>(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1.2,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <section id="about" className="about">
        <div className="about__main">
          <div className="info">
            <h1 className="linear_gradient_title__light">
              Built by the Pioneers of Revenue Recognition Automation
            </h1>
            <p>
              Our founder is regarded as one of the “Godfathers of Revenue
              Recognition,” having established the Revenue Automation category
              more than a decade ago. Relying upon that experience, RightRev is
              built to be a more powerful, flexible, and scalable solution that
              automates processes, streamlines Lead-to-Revenue operations, and
              gives customers confidence in their revenue recognition.
            </p>
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

      <section className="about_2">
        <div className="arrow__container" onClick={handleScroll}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        <div className="container">
          <div className="about_2_titles">
            <h3
              className="linear_gradient_title"
              style={{ textAlign: "center" }}
            >
              Our core values
            </h3>
            <p>
              Our core values at RightRev reflect our commitment to putting the
              needs of our clients first.
            </p>
          </div>
          <div className="documents">
            {aboutItems.map(({ id, title, desc, img }: ICard) => (
              <div className="box" key={id}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
}
