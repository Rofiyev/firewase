import "./index.css";
import Layout from "../../layout";
// import { IPostuserdata } from "../../interface";
import { useForm } from "react-hook-form";
import { useState, useEffect, ChangeEvent } from "react";
import { checkPhoneNumber, postContact } from "../../api/api";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { SiMetrodeparis } from "react-icons/si";
import { toast } from "react-toastify";

type Inputs = {
  full_name: string;
  organization: string;
  phone_number: string;
  email: string;
  desc: string;
};

export default function Contacts() {
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [organiz, setOrganiz] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [actiteCode, setActive] = useState<string>("");
  const [userCode, setUserCode] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (values: Inputs) => {
    const { data, success } = await postContact(values);
    success && data && toast.success("Сообщения отправлены!");
    reset();
    setIsPhoneActive(false);
    setActive("");
    setUserCode("");
    setDisabled(true);
  };

  const handleCode = () => {
    if (userCode === actiteCode) {
      setDisabled(false);
      toast.success("Номер телефона подтвержден.");
      setIsPhoneActive(false);
    }
  };

  const handleActivePhone = async () => {
    if (fullName && organiz && tel) {
      const { success, data } = await checkPhoneNumber(tel);
      if (success) {
        setActive(data[tel]);
        toast.success("На номер телефона отправлен код подтверждения");
        setIsPhoneActive(true);
      }
    }
  };

  return (
    <Layout>
      <section id="contacts" className="contacts">
        <div className="contacts-main">
          <div className="container">
            <div className="contact">
              <div className="contact_titles">
                <h1 className="linear_gradient_title__light">
                  GST - BUILDING TECHNOLOGY FOR FORE & SECURITY
                </h1>
              </div>
              <div className="images__wrapper"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
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
                <span>Москва, Грохольский переулок</span>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="ИМЯ ФАМИЛИЯ*"
                  {...register("full_name", { required: true })}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFullName(e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Организация*"
                  {...register("organization", { required: true })}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setOrganiz(e.target.value)
                  }
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "10px",
                  }}
                  className="phoneNumberStyle"
                >
                  <input
                    type="tel"
                    placeholder="Телефон номерь*"
                    maxLength={13}
                    defaultValue={"+998"}
                    {...register("phone_number", {
                      required: true,
                    })}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setTel(e.target.value)
                    }
                  />
                  <button className="inputBtn" onClick={handleActivePhone}>
                    Подтвердите
                  </button>
                </div>
                {isPhoneActive && (
                  <div className="codeStyle">
                    <input
                      type="number"
                      placeholder="Введите код *"
                      maxLength={6}
                      style={{ width: "100%" }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserCode(e.target.value)
                      }
                      required
                      autoFocus
                    />
                    <button className="inputBtn" onClick={handleCode}>
                      Активация
                    </button>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Еmail*"
                  disabled={disabled}
                  {...register("email", {
                    required: true,
                  })}
                  style={{
                    cursor: disabled ? "no-drop" : "pointer",
                    opacity: disabled ? "0.6" : "1",
                  }}
                />
                <textarea
                  cols={30}
                  rows={2}
                  disabled={disabled}
                  style={{
                    cursor: disabled ? "no-drop" : "pointer",
                    opacity: disabled ? "0.6" : "1",
                  }}
                  placeholder="Вопрос*"
                  {...register("desc", {
                    required: true,
                  })}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    cursor: disabled ? "no-drop" : "pointer",
                    opacity: disabled ? "0.6" : "1",
                  }}
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
