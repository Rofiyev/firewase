import { useParams } from "react-router-dom";
import Layout from "../../layout";
import "./index.css";
import { productDetailLists_one } from "../../constants";
import { DetailInfo } from "../../components";

export default function ProductDetail() {
  const { product } = useParams();

  return (
    <Layout>
      <section style={{ marginBlock: "15vh" }}>
        <div className="container">
          <main
            className="product_detail"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ objectFit: "cover" }}
              src={
                "http://www.gstrus.ru/assets/gst/catalog/2023-04-04_08-48-54.png"
              }
              alt="Product detail"
            />
            <div className="info_detail">
              <h4>Отличительные особенности и преимущества</h4>
              <ul>
                {productDetailLists_one.map((str: string, i: number) => (
                  <li key={i}>{str}</li>
                ))}
              </ul>
            </div>
          </main>
          <div className="container" style={{ marginTop: "4rem" }}>
            <h3 style={{ textAlign: "center" }}>Техническая спецификация</h3>
            <table>
              <tbody>
                {Array.from({ length: 15 }).map((_, i: number) => (
                  <tr key={i}>
                    <td width={"20%"}>Основное питание</td>
                    <td>
                      120 В пер. тока / 60 Гц, 220 В пер. тока / 50 Гц 120 В
                      пер. тока / 60 Гц, 220 В пер. тока / 50 Гц 120 В пер. тока
                      / 60 Гц, 220 В пер. тока / 50 Гц 120 В пер. тока / 60 Гц,
                      220 В пер. тока / 50 Гц
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: "1rem" }}>
              <p style={{ marginBottom: "0px", textAlign: "center" }}>
                10106176 GST-IFP4M Адресная панель управления пожарной
                сигнализацией со шкафом серого цвета
              </p>
              <p style={{ textAlign: "center" }}>
                10106178 GST-IFP4M Адресная панель управления пожарной
                сигнализацией со шкафом красного цвета
              </p>
              <h3 style={{ marginTop: "4rem", textAlign: "center" }}>Клеммы</h3>
              <div
                className="product_detail_term"
                style={{ display: "flex", gap: "10px" }}
              >
                <div className="item">
                  <img
                    width={"100%"}
                    style={{ objectFit: "contain" }}
                    src="http://www.gstrus.ru/assets/gst/catalog/2023-04-04_08-48-03.png"
                    alt="Image"
                  />
                  <p>
                    Выход общий пожар, выход общая техническая тревога, выход
                    общая неисправность 2А при 30В пост. тока, выбор NO/NC
                  </p>
                </div>
                <div className="info">
                  {Array.from({ length: 10 }).map((_, i: number) => (
                    <p key={i}>
                      <b>Порт EIA-485:</b>&nbsp;
                      <span>
                        зарезервированный выходной порт, в настоящее время не
                        используется
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              <section style={{ marginTop: "4rem" }}>
                <h2>Дополнительная плата GST-IFP4M</h2>
                <DetailInfo />
                <DetailInfo />
                <DetailInfo />
                <DetailInfo />
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
