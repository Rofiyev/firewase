//?=== IMPORT HOME CSS FILE ===?//
import "./index.css";
import { useEffect, useState } from "react";
import Layout from "../../layout";
import partners_1 from "../../assets/partners_1.webp";
import partners_2 from "../../assets/partners_2.webp";
import { cardCantrol } from "../../constants";
import { ICard, ICategory, INewProducts } from "../../interface";
import { Newsletter } from "../../components";
import { Link } from "react-router-dom";
import home_svg from "../../assets/home_svg.svg";
import { getCategorys, getDocuments, getProducts } from "../../api/api";
import img from "../../assets/Journal-Entries.svg";
import { BASE_URL } from "../../config";

export default function Home() {
  const [bgIsActive, setBgIsActive] = useState<boolean>(false);
  const [accordionActive, setAccordionActive] = useState(1);
  const [category, setCategory] = useState([]);
  const [docs, setDocs] = useState<string[]>([]);
  const [news, setNews] = useState<INewProducts[]>([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 0.8) setBgIsActive(true);
      else setBgIsActive(false);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { data, success } = await getCategorys();
      success && setCategory(data);
      const res = await getDocuments();
      res.success && setDocs(res?.data?.types);
      const res2 = await getProducts({ product_last_count: "3" });
      res2.success && setNews(res2.data);
    })();
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
              GST - Building technology for fore & security
            </h1>
            <p>
              Компания Gulf Security Technology Co., Ltd, GST, является ключевым
              игроком в сфере пожарной и охранной безопасности в Азии, а также
              надежным поставщиком комплексных решений для противопожарных
              систем по всему миру. Это дочерняя компания Carrier (Carrier
              Global Corporation), ведущего мирового поставщика инновационных
              технологий
            </p>
            <div className="btns__info">
              <button>Request a Demo</button>
            </div>
          </div>
          <div className="images__wrapper">
            <img src={home_svg} alt="Home" />
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
          <div style={{ margin: "10rem 0 5rem 0" }}>
            <h3 className="linear_gradient_title">
              Revenue recognition is becoming more complex. Traditional methods
              fail to meet you where you are and where you want to go.
            </h3>
          </div>
        </div>
      </section>
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
              {category?.map(({ title, id, image, description }: ICategory) => (
                <Link
                  to={`/products?category=${id}`}
                  key={id}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <div className="box">
                    <img src={image} alt={title} />
                    <p>{title}</p>
                    <p>{description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
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
            {news.map((item: INewProducts, i: number) => (
              <div
                key={item.id}
                className={`accordion_item ${
                  i + 1 === accordionActive && "active"
                }`}
                onClick={() => setAccordionActive(i + 1)}
              >
                <div className="left">
                  <div className="accordion-header">
                    <span className="numbers">0/{i + 1}</span>
                    <span className="title">{item.title.slice(0, 30)}...</span>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-caption">
                      <h4>{item.title}</h4>
                      <p>{item.description.slice(0, 300)}...</p>
                    </div>
                    <div className="accordion-images">
                      <img
                        src={`${BASE_URL}${item.product_images[0].image}`}
                        alt={item.title}
                      />
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
                {docs.map((str: string) => (
                  <div key={str} className="box">
                    <Link
                      to={`/documents/${str}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={img} alt="Documents image" />
                      <h3>{str.charAt(0).toUpperCase() + str.slice(1)}</h3>
                      {/* <p>{desc}</p> */}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </section>
    </Layout>
  );
}
