//?=== IMPORT CSS FILE ===?//
import "./index.css";
import brand from "../../assets/logo.png";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategorys, getDocuments } from "../../api/api";
import { ICategory } from "../../interface";

export default function Footer() {
  const [category, setCategory] = useState([]);
  const [docs, setDocs] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { data, success } = await getCategorys();
      success && setCategory(data);
      const res = await getDocuments();
      res.success && setDocs(res?.data?.types);
    })();
  }, []);

  const ruDocsType: string[] = ["Документ", "Сертификат", "Проект"];

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Link to={"/"}>
              <img src={brand} alt="Brand" />
            </Link>
            <div className="socials">
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebook className="icon" />
              </Link>
              <Link to="https://www.youtube.com/" target="_blank">
                <FaYoutube className="icon" />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <RiInstagramFill className="icon" />
              </Link>
              <Link to="https://web.telegram.org/k/" target="_blank">
                <FaTelegram className="icon" />
              </Link>
            </div>
            <p style={{ marginTop: "1rem" }}>
              Офис расположен по адресу: город Ташкент, Юнусабадский район, 8
              квартал, дом 35, кв. 14
            </p>
          </div>
          <div className="col-2">
            <ul>
              <li className="menu_title">Все категории</li>
              {category.length &&
                category.map(({ id, title }: ICategory) => (
                  <Link
                    key={id}
                    style={{ color: "inherit" }}
                    to={`/products?category=${id}`}
                  >
                    <li>{title}</li>
                  </Link>
                ))}
            </ul>
            <ul>
              <li className="menu_title">Все документов</li>
              {docs.map((str: string, i: number) => (
                <Link
                  key={str}
                  to={`/documents/${str}`}
                  style={{ textDecoration: "none" }}
                >
                  <li>{ruDocsType[i]}</li>
                </Link>
              ))}
            </ul>
            <ul>
              <li className="menu_title">О компании</li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/company"
                >
                  О компании
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="copyright">
          <span>&copy;{new Date().getFullYear()} FireWise Company</span>
        </div>
      </div>
    </footer>
  );
}
