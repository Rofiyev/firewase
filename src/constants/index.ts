import { INavberMenu, ICard } from "../interface";
import Icard_image_1 from "../assets/Revenue-Accuracy.svg";
import Icard_image_2 from "../assets/Real-Time-Visibility.svg";
import Icard_image_3 from "../assets/Scalable-Revenue-Recognition.svg";
import about_card_image_01 from "../assets/heart.png";
import about_card_image_02 from "../assets/star.png";
import about_card_image_03 from "../assets/support.png";

export const navbarMenu: INavberMenu[] = [
  {
    id: 1,
    route: "/",
    label: "Главная",
  },
  {
    id: 2,
    route: "#documentation",
    label: "Документация",
  },
  {
    id: 3,
    route: "/products",
    label: "Продукты",
  },
  {
    id: 4,
    route: "/company",
    label: "О компании",
  },
  {
    id: 5,
    route: "/contact",
    label: "",
  },
];

export const cardCantrol: ICard[] = [
  {
    id: 1,
    title: "Наши цели",
    desc: "Вы не можете рисковать неточным учетом доходов. Устраните ошибки и сведите к минимуму аудиторские риски за счет автоматизации признания доходов. Оптимизируйте данные о продажах и доходах, чтобы получить точные показатели доходов, которые будут у вас под рукой, чтобы вы могли принимать решения, которые максимизируют прибыль и стимулируют рост.",
    img: Icard_image_1,
  },
  {
    id: 2,
    title: "Удобство для вас",
    desc: "Получите полную картину вашего финансового состояния в режиме реального времени. Представляйте свои финансы с уверенностью, зная, что у вас есть полная информация о показателях контракта о доходах для признанных, запланированных и незапланированных доходов.",
    img: Icard_image_2,
  },
  {
    id: 3,
    title: "Наш результат",
    desc: "По мере роста вашего бизнеса запись оборотов становится более сложной. Убедитесь, что вы можете адаптироваться к текущим и будущим моделям дохода, таким как подписка, использование, услуги или гибрид. RightRev может обрабатывать сотни миллионов транзакций для любой модели дохода за считанные минуты — производительность, не имеющая аналогов ни у одного другого решения.",
    img: Icard_image_3,
  },
];

export const aboutItems: ICard[] = [
  {
    id: 1,
    title: "Integrity",
    desc: "Always making decisions with our clients’ best interests at heart best interests at heart nterests at heart",
    img: about_card_image_01,
  },
  {
    id: 2,
    title: "Value",
    desc: "We constantly seek new ways to incorporate value-adding features tailored to our clients’ needs.",
    img: about_card_image_02,
  },
  {
    id: 3,
    title: "Support",
    desc: "Offering custom-tailored attention, placing customers in the best position possible to get the most out of our software.",
    img: about_card_image_03,
  },
  {
    id: 1,
    title: "Integrity",
    desc: "Always making decisions with our clients’ best interests at heart best interests at heart nterests at heart",
    img: about_card_image_01,
  },
  {
    id: 2,
    title: "Value",
    desc: "We constantly seek new ways to incorporate value-adding features tailored to our clients’ needs.",
    img: about_card_image_02,
  },
  {
    id: 3,
    title: "Support",
    desc: "Offering custom-tailored attention, placing customers in the best position possible to get the most out of our software.",
    img: about_card_image_03,
  },
];
