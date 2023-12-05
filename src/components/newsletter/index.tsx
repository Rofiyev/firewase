//?=== IMPORT CSS FILE ===?//
import { Link } from "react-router-dom";
import "./index.css";

export default function Newsletter() {
  return (
    <section style={{ width: "100%" }}>
      <div className="container">
        <div className="newsletter_component">
          <h3 className="linear_gradient_title__light">
            Вы можете оставить сообщение, чтобы быстро связаться с нами
          </h3>
          <button className="home_2_btn">
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/contacts"}
            >
              Где купить
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
