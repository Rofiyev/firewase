import "./index.css";
import Layout from "../../layout";
import { infoContact } from "../../constants";
import { Contactdetails } from "../../interface";
import { useEffect, useState } from "react";
export default function Contacts() {
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);

  function checkPhoneNumber(e) {
    console.log(e.target.value);
    if (e.target.value.length === 13) {
      setPhoneNumberCheck(true);
    }
  }

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <Layout>
      <section id="contacts" className="contacts">
        <div className="contacts-main">
          <div className="contact">
            <div className="contact_titles">
              <h2 className="linear_gradient_title__light">
                Get a demo of RightRev
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="contacts_2" className="contacts_2">
        <div className="contacts_left_sides">
          <p>Официальный дистрибьютер продукции GST в России.</p>

          {infoContact.map(({ id, title, desc }: Contactdetails) => (
            <div key={id} className="infoContact">
              <p>{title}:</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="contacts_right_sides">
          <div className="box_contact">
            <h4>Request a Demo</h4>
            <input type="text" placeholder="Name*" />
            <input
              type="text"
              placeholder="Phone number*"
              maxLength={13}
              defaultValue={"+998"}
              onChange={checkPhoneNumber}
            />
            {!phoneNumberCheck ? (
              ""
            ) : (
              <input type="text" placeholder="Введите код *" />
            )}

            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Company Name*" />
            <textarea
              name="your message"
              cols="40"
              rows="10"
              placeholder="Question*"
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
