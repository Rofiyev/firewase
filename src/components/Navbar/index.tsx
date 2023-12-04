//?=== IMPORT CSS FILE HEADER ===?//
import "./index.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navbarMenu } from "../../constants";
import { INavberMenu } from "../../interface";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setSticky(true);
      else setSticky(false);
    });
  }, []);

  return (
    <div
      className="header__fon"
      style={{
        background: sticky ? "rgba(22, 66, 52,0.9)" : "rgba(22, 66, 52,1)",
      }}
    >
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
                <li
                  key={id}
                  className={`${route === pathname ? "active" : ""}`}
                >
                  {route === "#documentation" ? (
                    pathname === "/" ? (
                      <a href={route}>{label}</a>
                    ) : (
                      <Link to={'/'}>{label}</Link>
                    )
                  ) : (
                    <Link to={route}>{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__btn">
            <Link to={"/contacts"}><button>Где купить</button></Link>
          </div>
        </header>
      </div>
    </div>
  );
}
