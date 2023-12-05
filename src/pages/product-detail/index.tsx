import { useParams } from "react-router-dom";
import Layout from "../../layout";
import "./index.css";
import { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import { BASE_URL } from "../../config";
import { IAttributeName, IProducts } from "../../interface";

export default function ProductDetail() {
  const { product } = useParams();
  const [detail, setDetail] = useState<IProducts[] | []>([]);

  useEffect(() => {
    (async () => {
      const { data, success } = await getProducts({ product_id: product });
      success && setDetail([data]);
    })();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  return (
    <Layout>
      <section style={{ marginBlock: "15vh" }}>
        <div className="container">
          {detail?.length ? (
            detail.map((item: IProducts) => (
              <Fragment key={item.title}>
                <main
                  className="product_detail"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <div className="image_wrap">
                    <img
                      style={{ objectFit: "cover" }}
                      src={`${BASE_URL}${item.product_images[0].image}`}
                      alt="Product detail"
                    />
                  </div>
                  <div className="info_detail">
                    <h4>{item.title}</h4>
                    {/* <ul>
                          {productDetailLists_one.map((str: string, i: number) => (
                            <li key={i}>{str}</li>
                          ))}
                    </ul> */}
                    <p>{item.description}</p>
                  </div>
                </main>
                <div className="container" style={{ marginTop: "4rem" }}>
                  {item?.attribute_names?.map((item) => (
                    <div key={item.name} style={{ marginTop: "3rem" }}>
                      <h3 style={{ textAlign: "center", width: "100%" }}>
                        {item.name}
                      </h3>
                      {item.attribute_values.map((item_2: IAttributeName) => (
                        <Fragment key={item_2.title}>
                          <table>
                            <tbody>
                              <tr>
                                <td width={"30%"}>{item_2.title}</td>
                                <td>{item_2.value}</td>
                                {item_2.image && (
                                  <td width={"30%"}>
                                    <img
                                      width={"100%"}
                                      src={`${BASE_URL}${item_2.image}`}
                                      alt={item_2.title}
                                    />
                                  </td>
                                )}
                              </tr>
                            </tbody>
                          </table>
                        </Fragment>
                      ))}
                    </div>
                  ))}
                </div>
              </Fragment>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              <div className="spinner-border text-success" role="status"></div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
