import "./index.css";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { useEffect } from "react";
import { aboutItems } from "../../constants";
import { ICard } from "../../interface";
import { Newsletter } from "../../components";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaBuildingColumns, FaEarthAmericas } from "react-icons/fa6";
import { SiMetrodeparis } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
  const handleScroll = () => {
    const elem = document.querySelector(".about_2") as HTMLDivElement;
    elem.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <Layout>
      <section id="about" className="about">
        <div className="about__main">
          <div className="info">
            <h1 className="linear_gradient_title__light">
              ПРОФЕССИОНАЛИЗМ, НАДЕЖНОСТЬ И КАЧЕСТВО ВМЕСТЕ С НАМИ
            </h1>
            <p>
              Наличие лицензий: Монтаж, наладка и техническое обслуживание
              средств противопожарной автоматики (систем пожарной сигнализации,
              видеонаблюдения и установок пожаротушения). Лицензия МЧС № 068026
              от 10 марта 2023 г.
            </p>
            <div className="btns__info">
              <button>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/contacts"
                >
                  Где купить
                </Link>
              </button>
            </div>
          </div>
          <div className="images__wrapper">
            <img src={home__image} alt="Certificate" />
          </div>
        </div>
      </section>

      <section className="about_2">
        <div className="arrow__container" onClick={handleScroll}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="about_2_titles">
            <h3
              className="linear_gradient_title"
              style={{ textAlign: "center" }}
            >
              Что мы делаем?
            </h3>
            <p>
              Любой из наших специалистов ответит на все Ваши вопросы по
              системам пожарной безопасности и предложит наилучший вариант
              решения поставленной задачи. Фирма на сегодняшний день является
              одной из ведущих по консультации и сопровождению проектной
              документации по вопросам.
            </p>
          </div>
          <div className="documents">
            {aboutItems.map(({ id, title, desc, img }: ICard) => (
              <div className="box" key={id}>
                <LazyLoadImage src={img} alt={title} effect="blur" />
                {/* <h3>{title}</h3> */}
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-wrapper">
        <div className="container">
          <div className="info-about">
            <h4>
              Официальный дистрибьютер продукции «FireWise Enterprises» в
              Ташкент.
            </h4>
            <div className="row">
              <div className="col">
                <div className="head">
                  <FaBuildingColumns className="icon" />
                  <h5>Название фирмы:</h5>
                </div>
                <span>ООО «FireWise Enterprises»</span>
              </div>
              <div className="col">
                <div className="head">
                  <FaLocationArrow className="icon" />
                  <h5>Адрес:</h5>
                </div>
                <span>
                  Ташкент, Юнусабадский район, <br /> 8 квартал, дом 35, кв. 14
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <SiMetrodeparis className="icon" />
                  <h5>Метро</h5>
                </div>
                <span>Юнусабад Метро</span>
              </div>
              <div className="col">
                <div className="head">
                  <FaPhone className="icon" />
                  <h5>Телефон:</h5>
                </div>
                <span>
                  <a href="tel:+998 90 950-90-06">+998 90 950-90-06</a>
                  <br />
                  <a href="tel:+998 71 224-47-61">+998 71 224-47-61</a>
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <MdAttachEmail className="icon" />
                  <h5>E-mail:</h5>
                </div>
                <span>
                  <a href="mailto:OOOFEN88@gmail.com">OOOFEN88@gmail.com</a>
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <FaEarthAmericas className="icon" />
                  <h5>Website:</h5>
                </div>
                <span>
                  <a href="http://www.nelt.ru/">http://www.nelt.ru/</a>
                </span>
              </div>
            </div>
          </div>
          <div className="map_styles">
            <h5 className="map_title">Схема проезда</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2994.2441956180337!2d69.28291471115344!3d41.36877897118252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzA3LjYiTiA2OcKwMTcnMDcuOCJF!5e0!3m2!1suz!2s!4v1702217536904!5m2!1suz!2s"
              className="map_about"
              allowFullScreen={true}
              width={"720px"}
              height={"490px"}
            ></iframe>
          </div>
        </div>
      </section>
      <Newsletter />
    </Layout>
  );
}
