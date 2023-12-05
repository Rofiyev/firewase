import "./index.css";
import Layout from "../../layout";
import { IPostuserdata } from "../../interface";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkPhoneNumber, postContact } from "../../api/api";
import { ChangeEvent } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import companyname from '../../assets/insurance-company.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import website from '../../assets/world-wide-web.png'


const resolveAfter35sec = new Promise((resolve) => setTimeout(resolve, 3000));

export default function Contacts() {
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [number, setNumber] = useState("");
  const [activationcode, setActivationcode] = useState("");
  const [activation, setActiovation] = useState("");

  useEffect(() => {
    (async () => {})();
  }, []);

  const { register, handleSubmit } = useForm<IPostuserdata>();
  const onSubmit: SubmitHandler<IPostuserdata> = async (data) => {
    console.log(data);
    const datas = await postContact(data)
    console.log(datas);
    toast.promise(resolveAfter35sec, {
      pending: "Отправляется",
      success: "Отправлено Заявление",
    });
    
  };

  useEffect(() => {
    if (number.length > 12) {
      (async () => {
        //   const { data, success } = await checkPhoneNumber(number);
        // console.log(data[number]);
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

  function openCode() {
    if (number > 12) {
      setPhoneNumberCheck(true);
    }
  }
  function checkCode() {
    console.log(activation);
    console.log(typeof activationcode);

    if (activationcode === activation) {
      setConfirmEmail(true);
    }
  }
  return (
    <Layout>
      <section id="contacts" className="contacts">
        <div className="contacts-main">
          <div className="contact">
            <div className="contact_titles">
              <h2 className="linear_gradient_title__light">
                Получите демо-версию GST
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="contacts_2" className="contacts_2">
        <div className="contacts_left_sides">
          <p style={{paddingBottom:"0px"}}>Официальный дистрибьютер продукции GST в России.</p>
          <div className="box">

          <img src={companyname} alt="title" />
          <h5>Название фирмы:</h5>
          <p>ООО "НЭЛТ ДИСТРИБЬЮЦИЯ"</p>
          </div>
          <div className="box">

          <div style={{marginBottom:"10px"}}><FaLocationDot/></div>
          <h5>Адрес:</h5>
          <p> Проспект Мира, Сухаревская</p>
          </div>
          <div className="box" style={{width:"40%"}}>

          <div style={{marginBottom:"10px"}}><FaPhoneVolume/></div>
          <h5>Телефон:</h5>
          <p style={{width:"64%"}}>+7-495-796-92-14 <a href="tel:+79252969383">+7-925-296-93-83</a></p>
          </div>
          <div className="box">
          <div style={{marginBottom:"10px"}}><MdOutlineEmail/></div>
          <p><a href="mailto:info@m.nelt.ru">Email:info@m.nelt.ru</a></p>
          </div>
          <div className="box">

          <img src={website} alt="title" />
         <p> <a href="http://www.nelt.ru/">http://www.nelt.ru/</a></p>
          </div>
        </div>
        <div className="contacts_right_sides">
          <div className="box_contact">
            <h4>Оставьте заявку</h4>
            <form onSubmit={handleSubmit(onSubmit)} id="userdata">
              <input
                type="text"
                placeholder="ИМЯ ФАМИЛИЯ*"
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
                placeholder="Организация*"
                {...register("organization", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 4,
                    message: "Надо выполнять",
                  },
                })}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Телефон номерь*"
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
                <button onClick={openCode}>
                  <FaCheckCircle />
                </button>
              </div>
              {phoneNumberCheck ? (
                <div className="codeStyle">
                  <input
                    type="text"
                    onChange={(e) => setActiovation(e.target.value)}
                    placeholder="Введите код *"
                  />
                  <button onClick={checkCode}>
                    <IoSend />
                  </button>
                </div>
              ) : (
                ""
              )}

              <input
                type="text"
                placeholder="Еmail*"
                {...register("email", {
                  required: "Надо выполнять",
                  minLength: {
                    value: 6,
                    message: "Надо выполнять",
                  },
                })}
                disabled={confirmEmail === false ? true : false}
                style={{ cursor: !confirmEmail ? "no-drop" : "pointer" }}
              />
              <textarea
                cols={40}
                rows={10}
                style={{ cursor: !confirmEmail ? "no-drop" : "pointer" }}
                placeholder="Вопрос*"
                {...register("desc", {
                  required: "Надо выполнять",
                })}
                disabled={confirmEmail === false ? true : false}
              ></textarea>
              <button
                type="submit"
                form="userdata"
                style={{
                  cursor: !phoneNumberCheck ? "no-drop" : "pointer",
                  marginBlock: "10px",
                  opacity: !phoneNumberCheck ? "0.4" : "1",
                }}
                disabled={confirmEmail === false ? true : false}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
