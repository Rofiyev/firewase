import { Table } from "react-bootstrap";
import Layout from "../../layout";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDownload } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocuments } from "../../api/api";
import { IDocs } from "../../interface";

export default function CategoryDocs() {
  const { category } = useParams();
  const [docs, setDocs] = useState<IDocs[] | []>([]);

  useEffect(() => {
    (async () => {
      const { success, data } = await getDocuments(category);
      success && setDocs(data);
    })();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  return (
    <>
      <Layout>
        <section className="table__wrapper" style={{ paddingTop: "20vh" }}>
          <div className="container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Тип</th>
                  <th>Имя</th>
                  <th>скачать</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((item: IDocs, i: number) => (
                  <tr key={item.id}>
                    <td width={"5%"}>{i + 1}</td>
                    <td width={"20%"}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </td>
                    <td>{item.title}</td>
                    <td width={"5%"} style={{ textAlign: "center" }}>
                      <a
                        href={item.file}
                        style={{ color: "inherit" }}
                        download={item.title}
                      >
                        <MdDownload
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </Layout>
    </>
  );
}
