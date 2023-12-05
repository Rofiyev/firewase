import "./index.css";
import Layout from "../../layout";
import { IPostuserdata } from "../../interface";
import { useState,} from "react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { checkPhoneNumber, postContact } from "../../api/api";
import home_svg from "../../assets/home_svg.svg";
import { FaCheckCircle, FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { SiMetrodeparis } from "react-icons/si";

const resolveAfter35sec = new Promise((resolve) => setTimeout(resolve, 3000));

export default function Contacts() {
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [number, setNumber] = useState<string>("");
  const [activationcode, setActivationcode] = useState("");
  const [activation, setActiovation] = useState("");

  

  const { register, handleSubmit, reset } = useForm<IPostuserdata>();
  const onSubmit: SubmitHandler<IPostuserdata> = async (data) => {
    const datas = await postContact(data);
    console.log(datas);
    reset();
    toast.promise(resolveAfter35sec, {
      pending: "Отправляется",
      success: "Отправлено Заявление",
    });
  };

  function openCode() {
    if (number.length > 12) {
      (async () => {
        const { data, success } = await checkPhoneNumber(number);
        console.log(data[number]);
        success && setActivationcode(data[number]);
        console.log("worked number effect");
        setPhoneNumberCheck(true)
      })();
    } 

    
  }
  function checkCode() {
    console.log(activation);
    console.log(typeof activationcode);

    if (activationcode.toString() === activation.toString()) {
      setConfirmEmail(true);
    }
  }
  return (
    <Layout>
      <section id="contacts" className="contacts">
        <div className="contacts-main">
          <div className="contact">
            <div className="contact_titles">
              <h1 className="linear_gradient_title__light">GST - BUILDING TECHNOLOGY FOR FORE & SECURITY</h1>
              <p>
              GST предлагает широкий ассортимент противопожарной продукции и индивидуальные решения для противопожарных систем, адаптированные к потребностям различных отраслей промышленности. Имея инфраструктуру продаж, которая охватывает многие страны и регионы и включает в себя сеть из более чем 120 офисов продаж и несколько логистических центров по всему Китаю, GST стала важной частью глобального бизнеса Carrier. Чтобы удовлетворить потребности своей международной клиентской базы, GST создала обширные научно-исследовательские центры в Пекине и Циньхуандао на севере Китая. Компания постоянно стремится разрабатывать новые инновационные технологии и продукты.
              </p>
            </div>
            <div className="images__wrapper">
            <img src={home_svg} alt="Home" />
          </div>
          </div>
        </div>
      </section>

      <section id="contacts_2" className="contacts_2">
        <div className="info-about">
          <h4>Официальный дистрибьютер продукции GST в России.</h4>
          <div className="row">
            <div className="col">
              <div className="head">
                <FaBuildingColumns className="icon" />
                <h5>Название фирмы:</h5>
              </div>
              <span>ООО "НЭЛТ ДИСТРИБЬЮЦИЯ"</span>
            </div>
            <div className="col">
              <div className="head">
                <FaLocationArrow className="icon" />
                <h5>Адрес:</h5>
              </div>
              <span>
                129090, г. Москва, Грохольский переулок, 28, помещение 2/2
              </span>
            </div>
            <div className="col">
              <div className="head">
                <SiMetrodeparis className="icon" />
                <h5>Метро</h5>
              </div>
              <span>Проспект Мира, Сухаревская</span>
            </div>
            <div className="col">
              <div className="head">
                <FaPhone className="icon" />
                <h5>Телефон:</h5>
              </div>
              <span>
                <a href="tel:+7 495 796 92 14">+7 495 796 92 14</a>
                <br />
                <a href="tel:+7 925 296 93 83">+7 925 296 93 83</a>
              </span>
            </div>
            <div className="col">
              <div className="head">
                <MdAttachEmail className="icon" />
                <h5>E-mail:</h5>
              </div>
              <span>
                <a href="mailto:info@m.nelt.ru">info@m.nelt.ru</a>
              </span>
            </div>
            <div className="col">
              <div className="head">
                <FaEarthAmericas className="icon" />
                <h5>Website:</h5>
              </div>
              <span>
                <a href="http://www.nelt.ru/">http://www.nelt.ru/</a>
              </span>
            </div>
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
               className="phoneNumberStyle">
                <input
                  type="text"
                  placeholder="Телефон номерь*"
                  maxLength={19}
                  defaultValue={"+998"}
                  {...register("phone_number", {
                    required: "Надо выполнять",
                    minLength: {
                      value: 11,
                      message: "Надо выполнять",
                    },
                  })}
                  onChange={(e)=>setNumber(e.target.value)}
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
                   style={{width:"50%"}}/>
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
                cols={30}
                rows={2}
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
                  cursor: !confirmEmail ? "no-drop" : "pointer",
                  opacity: !confirmEmail ? "0.4" : "1",
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
