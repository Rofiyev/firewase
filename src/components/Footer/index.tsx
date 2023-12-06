//?=== IMPORT CSS FILE ===?//
import "./index.css";
import brand from "../../assets/logo.png";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
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
            <div className="wrap">
              <h5>Будьте в курсе последних новостей</h5>
            </div>
            <div className="socials">
              <FaFacebook className="icon" />
              <FaYoutube className="icon" />
              <RiInstagramFill className="icon" />
              <FaTelegram className="icon" />
            </div>
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
              <li>О компании</li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="copyright">
          <span>
            &copy;{new Date().getFullYear()} GST a UTF Fire & Security Company
          </span>
        </div>
      </div>
    </footer>
  );
}
