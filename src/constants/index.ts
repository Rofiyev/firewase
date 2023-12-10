import { INavberMenu, ICard } from "../interface";
import Icard_image_1 from "../assets/Revenue-Accuracy.svg";
import Icard_image_2 from "../assets/Real-Time-Visibility.svg";
import Icard_image_3 from "../assets/Scalable-Revenue-Recognition.svg";

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
    desc: "Проектирование и составление проектносметной документации",
    img: "https://www.ktbbeton.com/upload/images/content-img(13).png",
  },
  {
    id: 2,
    title: "Value",
    desc: "Монтаж и наладка системы автоматического пожаротушения",
    img: "https://expertpozh.by/wp-content/uploads/2021/02/montaj_pozharnoy_signalizacii.jpg",
  },
  {
    id: 3,
    title: "Support",
    desc: "Монтаж и наладка системы пожарной сигнализации, оповещения",
    img: "https://gulfstream.ru/wp-content/uploads/2023/06/pozharnye-signalizac.jpg",
  },
  {
    id: 1,
    title: "Integrity",
    desc: "Реализация оборудования GST",
    img: "https://publishernews.ru/images/PressReleases/201909/press_r_8F666D92-1D66-4EE7-8CCF-09FBA7E5CBD9.jpg",
  },
  {
    id: 2,
    title: "Value",
    desc: "Обслуживание противопожарного оборудования",
    img: "https://antifire.ua/assets/images/header_photo/bg-17-1.jpg",
  },
  {
    id: 3,
    title: "Support",
    desc: "Консультация и сопровождение проектной документации",
    img: "https://tp-sk.ru/uploads/s/b/n/x/bnxpj6lzolwi/img/autocrop/dc1cc1077e68ab2655064d5d54d018fc.jpg",
  },
];
