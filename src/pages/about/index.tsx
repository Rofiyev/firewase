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
    const elem = document.querySelector(".about_2") as HTMLDivElement;
    elem.scrollIntoView({ behavior: "smooth" });
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
        <div className="container" style={{ marginTop: "4rem" }}>
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
      <section>
        <div className="container" style={{textAlign:"center"}}>
          <div style={{textAlign:"left",marginLeft:"23%"}}>
        <p>Кроссовое оборудование, АТС, SIP телефония, телекоммуникационные стойки и шкафы.</p>
          <a href="tel:+79166028402">+7 916 6028402</a>
          <p style={{width:"40%",}}>Системы пожарной сигнализации ESMI, GST, Систем-сенсор, Schrack Seconet. Системы оповещения (СОУЭ) TOA, Honeywell (INTEVIO). СКУД и видеонаблюдение Hanwha, системы часофикации, системы конферен-связи, турникеты, калитки и автоматические шлюзовые кабины.</p>
          <h5 style={{fontSize:"16px"}}>Чечёткин Алексей Анатольевич - <a href="tel:+79261615958"> +7 926 161 59 58</a></h5>
          </div>
        <div className="map_styles">
        <h5 className="map_title">Схема проезда</h5> 
        <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&um=constructor%3Abec71da5496075704655c41de91ed168045adc6800832f7886dfe8a4ad77b714" className="map_about" allowFullScreen={true} width={"720px"} height={"490px"}></iframe>
        </div>
        <div className="info_map">
          
          <h4>Дилерская сеть GST на территории РФ.</h4>
          <h4>Свердловская обл., Пермская обл., Ханты-Мансийский автономный округ.</h4>
          <p>ООО "Азия-Рубеж"</p>
          <p>тел. (343) 345-0202</p>
          <p>Белов Вячеслав Леонидович</p>
          <a href="mailto:asiaek@mail.ru">asiaek@mail.ru</a>
        </div>
        </div>
      </section>
      <Newsletter />
    </Layout>
  );
}
