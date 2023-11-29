//?=== IMPORT CSS FILE HEADER ===?//
import "./index.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { navbarMenu } from "../../constants";
import { INavberMenu } from "../../interface";

export default function Navbar() {
  return (
    <div className="header__fon">
      <div className="container">
        <header className="header">
          <Link to="/">
            <div className="brand">
              <img src={logo} alt="Brand" />
            </div>
          </Link>
          <nav>
            <ul>
              {navbarMenu.map(({ id, label, route }: INavberMenu) => (
                <li key={id}>
                  <Link to={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__btn">
            <button>Где купить</button>
          </div>
        </header>
      </div>
    </div>
  );
}
