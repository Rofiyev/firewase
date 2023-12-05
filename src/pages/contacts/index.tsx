import "./index.css";
import Layout from "../../layout";
import { infoContact } from "../../constants";
import { Contactdetails, IPostuserdata } from "../../interface";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkPhoneNumber } from "../../api/api";
import { ChangeEvent } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
export default function Contacts() {
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);
  const [confirmEmail,setConfirmEmail] = useState(false)
  const [number, setNumber] = useState("");
  const [activationcode, setActivationcode] = useState("");
  const [activation, setActiovation] = useState("");

  useEffect(() => {
    (async () => {})();
  }, []);

  const { register, handleSubmit } = useForm<IPostuserdata>();
  const onSubmit: SubmitHandler<IPostuserdata> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (number.length > 12) {
      (async () => {
        const { data, success } = await checkPhoneNumber(number);
      console.log(data[number]);
        setActivationcode(data[number])
        
        console.log("worked number effect");
      })();
    }
  }, [number]);

  // function checkPhoneNumber() {
  //   if (number > 10) {
  //     setActivationcode(number);
  //     if (activationcode === activation) {
  //       setPhoneNumberCheck(true);
  //     } else {
  //       alert("code xato");
  //     }
  //   } else {
  //     alert("raqamingizni to'ldiring");
  //   }
  // }

  function openCode(){
    if (number>12){
      setPhoneNumberCheck(true)
    }
  }
  function checkCode(){
    console.log(activation);
    console.log(typeof activationcode);
    
    if(activationcode === activation){
      setConfirmEmail(true)
    }
  }
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
            <form onSubmit={handleSubmit(onSubmit)} id="userdata">
              <input
                type="text"
                placeholder="Name*"
                {...register("full_name", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 4,
                    message: "Надо выполнять",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Oranization*"
                {...register("organization", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 4,
                    message: "Надо выполнять",
                  },
                })}
              />
              <div style={{display:"flex",alignItems:"center", textAlign:"center"}}>
              <input
                type="text"
                placeholder="Phone number*"
                maxLength={13}
                defaultValue={"+998"}
                {...register("phone_number", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 11,
                    message: "Надо выполнять",
                  },
                })}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNumber(e.target.value)
                }
              />
              <button onClick={openCode}><FaCheckCircle /></button>
              </div>
              {phoneNumberCheck ?   (
                <div className="codeStyle">
                <input
                  type="text"
                  onChange={(e) => setActiovation(e.target.value)}
                  placeholder="Введите код *"
                />
                <button onClick={checkCode}><IoSend /></button>
                </div>
              ):(
                ""
              )}

              <input
                type="text"
                placeholder="Email*"
                {...register("email", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 6,
                    message: "Надо выполнять",
                  },
                })}
                disabled={confirmEmail === false ? true:false}
                style={{ cursor: !confirmEmail ? "no-drop" : "pointer" }}
              />
              <textarea
                cols={40}
                rows={10}
                style={{ cursor: !confirmEmail ? "no-drop" : "pointer" }}
                placeholder="Question*"
                {...register("desc", {
                  required: "Надо выполнять",
                })}
                disabled={confirmEmail === false ? true:false}
              ></textarea>
              <button
                type="submit"
                form="userdata"
                style={{ cursor: !phoneNumberCheck ? "no-drop" : "pointer" }}
                disabled={confirmEmail === false ? true:false}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
