//?=== IMPORT CSS FILE ===?//
import { Link } from "react-router-dom";
import "./index.css";

export default function Newsletter() {
  return (
    <div className="container">
      <div className="newsletter_component">
        <h3 className="linear_gradient_title__light">
          Вы можете оставить сообщение, чтобы быстро связаться с нами
        </h3>
        <button className="home_2_btn">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={"/buy"}
          >
            Где купить
          </Link>
        </button>
      </div>
    </div>
  );
}
