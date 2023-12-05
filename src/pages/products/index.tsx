//?=== IMPORT CSS FILE ===?//
import Layout from "../../layout";
import "./index.css";
import { INewProducts, ICategory } from "../../interface";
import { Newsletter } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategorys, getProducts } from "../../api/api";
import { BASE_URL } from "../../config";

export default function ProductPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("category");
  const [items, setItems] = useState<INewProducts[]>([]);
  const [filtered, setFiltered] = useState<ICategory[]>([]);
  const [active, setActive] = useState("Все");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { data, success } = await getProducts({
        category_id: params as string,
      });
      if (success) {
        setItems(data);
        setIsLoading(false);
      }
    })();
  }, [params]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const { data, success } = await getCategorys();
      if (success) {
        setFiltered(data);
        setIsLoading(false);
      }
    })();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <div style={{ marginBlock: "15vh" }} className="category_products">
        <div className="filter_products">
          <h3>Отфильтровано по:</h3>
          <ul style={{ justifyContent: "center" }}>
            {!filtered.length ? (
              <div className="spinner-border text-success" role="status">
                {/* <span className="sr-only">Loading...</span> */}
              </div>
            ) : (
              <>
                <li
                  onClick={() => {
                    setActive("Все");
                    navigate(`/products`);
                  }}
                  style={{
                    color: active === "Все" ? "black" : "",
                    opacity: active === "Все" ? "1" : "",
                  }}
                >
                  Все
                </li>
                {filtered.map((item: ICategory) => (
                  <li
                    onClick={() => {
                      setActive(item.title);
                      navigate(`/products?category=${item.id}`);
                    }}
                    style={{
                      color: active === item.title ? "black" : "",
                      opacity: active === item.title ? "1" : "",
                    }}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <div className="filtered_products">
          {isLoading ? (
            <div className="spinner-border text-success" role="status">
              {/* <span className="sr-only">Loading...</span> */}
            </div>
          ) : (
            <>
              {items.map((item: INewProducts, i: number) => (
                <Link
                  key={i}
                  to={`/products/${item.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div className="box_products">
                    <img
                      src={`${BASE_URL}${item.product_images[0]?.image}`}
                      alt="Image"
                    />
                    <div
                      className="card_desc"
                      style={{
                        padding: "32px 22px 30px",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        height: "60%",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            marginBlock: "20px",
                            fontSize: "20px",
                            lineHeight: "24px",
                            fontWeight: "500",
                          }}
                        >
                          {item.title}
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
                          {item.description.slice(0, 150)}
                        </p>
                      </div>
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
              ))}
            </>
          )}
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
}
