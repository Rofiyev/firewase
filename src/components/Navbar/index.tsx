import "./index.css";
import logo from "../../assets/logo.png";
import { Link,  useLocation } from "react-router-dom";
import { navbarMenu } from "../../constants";
import { INavberMenu } from "../../interface";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [barsIsActive, setBarsIsActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setSticky(true);
      else setSticky(false);
    });
  }, []);

  const toggleBars = () => setBarsIsActive((prev: boolean) => !prev);

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
          <nav className={`${barsIsActive && "active"}`}>
            <ul>
              {navbarMenu.map(({ id, label, route }: INavberMenu) => (
                <li
                  key={id}
                  className={`${route === pathname ? "active" : ""}`}
                >
                  {route === "#documentation" ? (
                    pathname === "/" ? (
                      <a href={route} onClick={() => setBarsIsActive(false)}>
                        {label}
                      </a>
                    ) : (
                      <Link to={"/"}>{label}</Link>
                    )
                  ) : (
                    <Link to={route}>{label}</Link>
                  )}
                </li>
              ))}
              <li>
                <div className="nav__btn">
                  <button>Где купить</button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="bars">
            {!barsIsActive ? (
              <HiMiniBars3BottomLeft onClick={toggleBars} className="icon" />
            ) : (
              <IoCloseOutline onClick={toggleBars} className="icon" />
            )}
          </div>
          <div className="nav__btn">
            <button>Где купить</button>
          </div>
        </header>
        </div>
      </div>
  
  );
}