import { Table } from "react-bootstrap";
import Layout from "../../layout";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDownload } from "react-icons/md";

export default function CategoryDocs() {
  return (
    <>
      <Layout>
        <section className="table__wrapper">
          <div className="container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Тип</th>
                  <th>Имя</th>
                  <th>размер</th>
                  <th>скачать</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, i: number) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td width={"5%"}>PDF</td>
                    <td>GST_каталог_2023</td>
                    <td>4 МБ</td>
                    <td width={"5%"} style={{ textAlign: "center" }}>
                      <a
                        href="https://www.africau.edu/images/default/sample.pdf"
                        style={{ color: "inherit" }}
                        download={"gst_company_file"}
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
