//?=== IMPORT CSS FILE ===?//
import "./index.css";
import brand from "../../assets/logo.png";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

export default function Footer() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

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
              <form onSubmit={handleSubmit} className="newsletter">
                <input
                  name="email"
                  type="text"
                  placeholder="Введите адрес электронной почты"
                />
                <button className="btn">Отправка</button>
              </form>
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
              <li className="menu_title">Все продукты</li>
              <li>Продукты</li>
            </ul>
            <ul>
              <li className="menu_title">Решения</li>
              <li>
                <a style={{ color: "inherit" }} href="mailto:info@m.nelt.ru">
                  Почтовый адрес
                </a>
              </li>
              <li>
                <a style={{ color: "inherit" }} href="tel:+7 (495) 796-92-14">
                  Номер телефона
                </a>
              </li>
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
