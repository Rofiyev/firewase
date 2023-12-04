//?=== IMPORT CSS FILE ===?//
import Layout from "../../layout";
import "./index.css";
import { categoryProduct, cardFiltered } from "../../constants";
import { IProductCategory, ICardOneItems } from "../../interface";
import { Newsletter } from "../../components";
import { Link } from "react-router-dom";
export default function ProductPage() {
  return (
    <Layout>
      <div style={{ marginBlock: "15vh" }} className="category_products">
        <div className="filter_products">
          <h3>Filtered by:</h3>
          <ul style={{ justifyContent: "center" }}>
            <li style={{ color: "black", opacity: "1" }}>Все</li>
            {categoryProduct.map(({ id, title }: IProductCategory) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>
        <div className="filtered_products">
          {[...cardFiltered, ...cardFiltered].map(
            (
              { id, span_title, title, desc, img }: ICardOneItems,
              i: number
            ) => (
              <Link
                key={i}
                to={`/products/${id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="box_products">
                  <img src={img} alt="Image" />
                  <div
                    className="card_desc"
                    style={{ padding: "32px 22px 30px", textAlign: "left" }}
                  >
                    <h4
                      style={{
                        color: "#69c04b",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "140%",
                      }}
                    >
                      {span_title}
                    </h4>
                    <h3
                      style={{
                        marginBlock: "20px",
                        fontSize: "20px",
                        lineHeight: "24px",
                        fontWeight: "500",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "22px",
                        marginBottom: "1rem",
                        color: "#164234",
                      }}
                    >
                      {desc}
                    </p>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "13px",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        lineHeight: "123%",
                        letterSpacing: "2px",
                        color: "#69c04b",
                        marginTop: "30px",
                      }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
}
