//?=== IMPORT CSS FILE ===?//
import { Link } from "react-router-dom";
import "./index.css";

export default function Newsletter() {
  return (
    <div className="container">
      <div className="newsletter_component">
        <h3 className="linear_gradient_title__light">
          Get out of spreadsheets and workarounds. Get back to Accounting.
        </h3>
        <button className="home_2_btn">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={"/buy"}
          >
            Request Demo
          </Link>
        </button>
      </div>
    </div>
  );
}
