//?=== IMPORT HOME CSS FILE ===?//
import "./index.css";
import { useEffect, useRef, useState } from "react";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { animated } from "react-spring";
import box_image from "../../assets/Revenue-Accuracy.svg";
import box_image_2 from "../../assets/Real-Time-Visibility.svg"
import box_image_3 from "../../assets/Scalable-Revenue-Recognition.svg"
import { use3dEffect } from "use-3d-effect";
import partners_1 from "../../assets/partners_1.webp";
import partners_2 from "../../assets/partners_2.webp";
import { accordionData } from "../../constants";
import { IAccordionGallery } from "../../interface";

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
    window.scrollTo({
      top: window.innerHeight * 1.9,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <section id="home" className="home" style={{}}>
        <div className="home__main">
          <div className="info">
            <h1>Powerful Revenue Recognition Software</h1>
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
            <h3>Take control of your revenue…the right way.</h3>
            <p>
              Achieve ASC 606 / IFRS 15 compliance with unmatched speed and
              scalability.
            </p>
          </div>
          <div className="home_2_box">
            <div className="box">
              <img src={box_image} alt="" />
              <p>Revenue Accuracy</p>

              <p>
                You can`t risk inaccurate revenue accounting. Eliminate errors
                and minimize audit risk by automating revenue recognition.
                Streamline sales and revenue data for accurate revenue metrics
                at your fingertips so you can make decisions that maximize
                profits and drive growth.
              </p>
            </div>
            <div className="box">
              <img src={box_image_2} alt="" />
              <p>Real-Time Visibility</p>
              <p>
               Gain a complete picture of your financial health in real-time. Present
               your financials with confidence knowing you have full visibility into 
               revenue contract metrics for recognized, planned, and unplanned revenue.
              </p>
            </div>
            <div className="box">
              <img src={box_image_3} alt="" />
              <p>Scalable Revenue Recognition</p>
              <p>
              As your business grows, rev rec gets more complicated. Ensure you can adapt to 
              current and future revenue models like subscription, usage, services, or a hybrid. 
              RightRev can process hundreds of millions of transactions for any revenue model in 
              minutes- performance unmatched by any other solution.
              </p>
            </div>
          </div>
          <div style={{textAlign:"center", marginBottom:"50px"}}><button className="home_2_btn">Why RIGHTREV</button></div>
          <div style={{marginLeft:"10%", width:'83%',padding:"0 ,40px"}}>
            <h3 className="home_2_under_btn_title">Revenue recognition is becoming more complex. Traditional methods fail to meet you where you are and where you want to go.</h3>
          </div>
        </div>
      </section>

      <section className="accordion">
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
    </Layout>
  );
}
