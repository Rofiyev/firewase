import "./index.css";
import Layout from "../../layout";
import home__image from "../../assets/home__image.jpg";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import { useEffect, useRef } from "react";
import { aboutItems } from "../../constants";
import { ICard } from "../../interface";
import { Newsletter } from "../../components";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaBuildingColumns, FaEarthAmericas } from "react-icons/fa6";
import { SiMetrodeparis } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";

export default function About() {
  const ref = useRef<null>(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

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
              Сертификат официальный дистрибьютер GST
            </h1>
            <p>
              Компания Gulf Security Technology Co., Ltd, GST, является ключевым
              игроком в сфере пожарной и охранной безопасности в Азии, а также
              надежным поставщиком комплексных решений для противопожарных
              систем по всему миру. Это дочерняя компания Carrier (Carrier
              Global Corporation), ведущего мирового поставщика инновационных
              технологий в области отопления, вентиляции и кондиционирования,
              охлаждения, технологий пожарной, охранной безопасности и
              автоматизации зданий.
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
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="about_2_titles">
            <h3
              className="linear_gradient_title"
              style={{ textAlign: "center" }}
            >
              Что мы делаем?
            </h3>
            <p>
              Компания GST получила ряд национальных и международных
              сертификатов соответствия стандартам, таким как российский ТР
              ЕАЭС, китайский CCC, международный UL, глобальный LPCB,
              европейский CE и т.д.
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

      <section>
        <div className="container">
          <div className="info-about">
            <h4>Официальный дистрибьютер продукции GST в России.</h4>
            <div className="row">
              <div className="col">
                <div className="head">
                  <FaBuildingColumns className="icon" />
                  <h5>Название фирмы:</h5>
                </div>
                <span>ООО "НЭЛТ ДИСТРИБЬЮЦИЯ"</span>
              </div>
              <div className="col">
                <div className="head">
                  <FaLocationArrow className="icon" />
                  <h5>Адрес:</h5>
                </div>
                <span>
                  129090, г. Москва, Грохольский переулок, 28, помещение 2/2
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <SiMetrodeparis className="icon" />
                  <h5>Метро</h5>
                </div>
                <span>Проспект Мира, Сухаревская</span>
              </div>
              <div className="col">
                <div className="head">
                  <FaPhone className="icon" />
                  <h5>Телефон:</h5>
                </div>
                <span>
                  <a href="tel:+7 495 796 92 14">+7 495 796 92 14</a>
                  <br />
                  <a href="tel:+7 925 296 93 83">+7 925 296 93 83</a>
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <MdAttachEmail className="icon" />
                  <h5>E-mail:</h5>
                </div>
                <span>
                  <a href="mailto:info@m.nelt.ru">info@m.nelt.ru</a>
                </span>
              </div>
              <div className="col">
                <div className="head">
                  <FaEarthAmericas className="icon" />
                  <h5>Website:</h5>
                </div>
                <span>
                  <a href="	http://www.nelt.ru/">http://www.nelt.ru/</a>
                </span>
              </div>
            </div>
          </div>
          <div className="map_styles">
            <h5 className="map_title">Схема проезда</h5>
            <iframe
              src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&um=constructor%3Abec71da5496075704655c41de91ed168045adc6800832f7886dfe8a4ad77b714"
              className="map_about"
              allowFullScreen={true}
              width={"720px"}
              height={"490px"}
            ></iframe>
          </div>
          {/* <div className="info_map">
            <h4>Дилерская сеть GST на территории РФ.</h4>
            <h4>
              Свердловская обл., Пермская обл., Ханты-Мансийский автономный
              округ.
            </h4>
            <p>ООО "Азия-Рубеж"</p>
            <p>тел. (343) 345-0202</p>
            <p>Белов Вячеслав Леонидович</p>
            <a href="mailto:asiaek@mail.ru">asiaek@mail.ru</a>
          </div> */}
        </div>
      </section>
      <Newsletter />
    </Layout>
  );
}
