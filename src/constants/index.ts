import {
  IAccordionGallery,
  INavberMenu,
  ICard,
  ICardOneItems,
  FCard,
  IProductCategory,
  IDocumentItems,
} from "../interface";
import accordion_img_01 from "../assets/accordion_image_1.png";
import accordion_img_02 from "../assets/accordion_image_2.png";
import accordion_img_03 from "../assets/accordion_image_3.png";
import Icard_image_1 from "../assets/Revenue-Accuracy.svg";
import Icard_image_2 from "../assets/Real-Time-Visibility.svg";
import Icard_image_3 from "../assets/Scalable-Revenue-Recognition.svg";
import cards_two_box_image_1 from "../assets/Configurable-Revenue-Rules.svg";
import cards_two_box_image_2 from "../assets/Event-Based-Revenue-Recognition_Light_v2.svg";
import cards_two_box_image_3 from "../assets/SSP-Calculations-Analysis.svg";
import cards_two_box_image_4 from "../assets/Contract-Modifications.svg";
import cards_two_box_image_5 from "../assets/GAAP-Revenue-Reporting.svg";
import cards_two_box_image_6 from "../assets/Journal-Entries.svg";
import about_card_image_01 from "../assets/heart.png";
import about_card_image_02 from "../assets/star.png";
import about_card_image_03 from "../assets/support.png";
import FImage_1 from "../assets/Docebo_logo-green.png";
import FImage_2 from "../assets/Epicor_Logo_green_new.png";
import FImage_3 from "../assets/drata_logo-green.png";
import FUImage_1 from "../assets/Headhsot_Laura-Brodie_Docebo.png";
import FUImage_2 from "../assets/Chris-Neidlinger.png";
import FUImage_3 from "../assets/Headshot_Alex-Amaya_Epicor.png";
import productsImage from "../assets/imageproducts.png";

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
];

export const accordionData: IAccordionGallery[] = [
  {
    id: 1,
    number: "01/",
    header_title: "Problem One - Spreadsheets",
    body_title: "Chaotic Spreadsheets",
    body_desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam odit ratione, debitis ad repellendus at voluptate, placeat in nihil deserunt nemo voluptas eaque! Dolor quam deserunt fugit aliquam nam quia fuga?",
    img: accordion_img_01,
  },
  {
    id: 2,
    number: "02/",
    header_title: "Problem Two – ERP",
    body_title: "Hacking Your ERP",
    body_desc:
      "Customizing your ERP for current needs while ignoring future needs is limiting. Most ERP systems fail to manage complex elements like SSP allocations, contract modifications, modern deal structures like ramps or bundles and reporting for contract liabilities and assets. Ensure sustainable growth with flexible revenue recognition software that can handle the dynamic needs of your business.",
    img: accordion_img_02,
  },
  {
    id: 3,
    number: "03/",
    header_title: "Problem Three – System Limitations",
    body_title: "System Limitations",
    body_desc:
      "Don’t mold your business around system limitations. Legacy software struggles with high volumes, limiting visibility into daily revenue. RightRev automates simple and complex use cases without sacrificing speed and performance. With real-time revenue metrics, you can confidently close the books faster.",
    img: accordion_img_03,
  },
];

export const cardCantrol: ICard[] = [
  {
    id: 1,
    title: "Revenue Accuracy",
    desc: "You can’t risk inaccurate revenue accounting. Eliminate errors and minimize audit risk by automating revenue recognition. Streamline sales and revenue data for accurate revenue metrics at your fingertips so you can make decisions that maximize profits and drive growth.",
    img: Icard_image_1,
  },
  {
    id: 2,
    title: "Real-Time Visibility",
    desc: "Gain a complete picture of your financial health in real-time. Present your financials with confidence knowing you have full visibility into revenue contract metrics for recognized, planned, and unplanned revenue.",
    img: Icard_image_2,
  },
  {
    id: 3,
    title: "Scalable Revenue Recognition",
    desc: "As your business grows, rev rec gets more complicated. Ensure you can adapt to current and future revenue models like subscription, usage, services, or a hybrid. RightRev can process hundreds of millions of transactions for any revenue model in minutes- performance unmatched by any other solution.",
    img: Icard_image_3,
  },
];

export const cardsTwoBox: ICard[] = [
  {
    id: 1,
    title: "Configurable Revenue Rules",
    desc: "Identify performance obligations and assign proper revenue rules for separate performance obligations in a single revenue contract.",
    img: cards_two_box_image_1,
  },
  {
    id: 2,
    title: "Event-Based Revenue Recognition",
    desc: "Don’t limit revenue recognition to only bookings or billings; instead, configure unlimited events, such as product delivery, completed milestones, percentage of completion, provisioning, etc.",
    img: cards_two_box_image_2,
  },
  {
    id: 3,
    title: "SSP Calculations & Analysis",
    desc: "Automate tedious SSP calculations using intelligent historical analysis. Automatically apply SSPs to performance obligations and allocate across bundled contracts, saving you time and headaches.",
    img: cards_two_box_image_3,
  },
  {
    id: 4,
    title: "Contract Modifications",
    desc: "Contract modifications occur at any time during a contract’s lifecycle. RightRev’s predefined modification categories make this process easy by automatically detecting various changes, applying revenue rules, and recalculating revenue if necessary.",
    img: cards_two_box_image_4,
  },
  {
    id: 5,
    title: "GAAP Revenue Reporting and Waterfall",
    desc: "RightRev comes with out-of-the-box dashboards and  hundreds of pre-calculated metrics to enable ad-hoc reporting. Revenue Waterfall reports provide visibility for planned and recognized revenue.",
    img: cards_two_box_image_5,
  },
  {
    id: 6,
    title: "Journal Entries",
    desc: "RightRev integrates with your ERP to automatically post daily or periodic revenue Journal Entries to your General Ledger. Conveniently create Topside Journal Entries directly in RightRev.",
    img: cards_two_box_image_6,
  },
];

export const CardF: FCard[] = [
  {
    id: 1,
    desc: "“Combining front-end and back-end motions in Salesforce Revenue Cloud and RightRev for automated revenue recognition will optimize our accounting processes for maximum efficiency; saving time, reducing errors, and allowing us to close the books faster.”",
    img: FImage_1,
    userImg: FUImage_1,
  },
  {
    id: 2,
    desc: "“From the start of our conversations through go-live, the RightRev team has been fully committed to our success and we appreciate the investment they made in us. We challenged the implementation team with some unique requirements, and they came up with solutions for everything we presented.”",
    img: FImage_2,
    userImg: FUImage_2,
  },
  {
    id: 3,
    desc: "“After considering various Revenue Recognition Platforms, we chose RightRev for its ability to handle our complex business needs like allocations, contract modifications, de-bundling of product SKU’s, and SSP Analysis, all of which have proven to be manual and complex tasks to perform.”",
    img: FImage_3,
    userImg: FUImage_3,
  },
  {
    id: 4,
    desc: "“Combining front-end and back-end motions in Salesforce Revenue Cloud and RightRev for automated revenue recognition will optimize our accounting processes for maximum efficiency; saving time, reducing errors, and allowing us to close the books faster.”",
    img: FImage_1,
    userImg: FUImage_1,
  },
  {
    id: 5,
    desc: "“From the start of our conversations through go-live, the RightRev team has been fully committed to our success and we appreciate the investment they made in us. We challenged the implementation team with some unique requirements, and they came up with solutions for everything we presented.”",
    img: FImage_2,
    userImg: FUImage_2,
  },
  {
    id: 6,
    desc: "“After considering various Revenue Recognition Platforms, we chose RightRev for its ability to handle our complex business needs like allocations, contract modifications, de-bundling of product SKU’s, and SSP Analysis, all of which have proven to be manual and complex tasks to perform.”",
    img: FImage_3,
    userImg: FUImage_3,
  },
];

export const categoryProduct: IProductCategory[] = [
  {
    id: 1,
    title: "Панели пожарной сигнализации",
  },
  {
    id: 2,
    title: "Дополнительное ПО для GST-IFP4M",
  },
  {
    id: 3,
    title: "Система обратной связи",
  },
  {
    id: 4,
    title: "Системы пожаротушения",
  },
  {
    id: 5,
    title: " Пожарные извещатели",
  },
  {
    id: 6,
    title: "Ручные извещатели",
  },
  {
    id: 7,
    title: "Оповещатели",
  },
  {
    id: 8,
    title: "Изоляторы",
  },
  {
    id: 9,
    title: "Модули управления",
  },
  {
    id: 10,
    title: "Блоки питания",
  },
  {
    id: 11,
    title: "Взрывозащищенное оборудование",
  },
  {
    id: 12,
    title: "Извещатели утечки газа",
  },
  {
    id: 13,
    title: "Дополнительные комплектующие",
  },
];

export const cardFiltered: ICardOneItems[] = [
  {
    id: 1,
    span_title: "Accounting, Revenue Recognition",
    title: "Intro to Revenue Recognition: GAAP Principles",
    desc: "Despite all the potential complexities, businesses must recognize revenue according to established industry standards to stay legally compliant and report their financials accurately and transparently. Performed correctly, revenue recognition follows several generally accepted accounting principles (GAAP) that we will discuss in more detail.",
    img: productsImage,
  },
  {
    id: 2,
    span_title: "Accounting, Revenue Recognition",
    title: "Intro to Revenue Recognition: GAAP Principles",
    desc: "Despite all the potential complexities, businesses must recognize revenue according to established industry standards to stay legally compliant and report their financials accurately and transparently. Performed correctly, revenue recognition follows several generally accepted accounting principles (GAAP) that we will discuss in more detail.",
    img: productsImage,
  },
  {
    id: 3,
    span_title: "Accounting, Revenue Recognition",
    title: "Intro to Revenue Recognition: GAAP Principles",
    desc: "Despite all the potential complexities, businesses must recognize revenue according to established industry standards to stay legally compliant and report their financials accurately and transparently. Performed correctly, revenue recognition follows several generally accepted accounting principles (GAAP) that we will discuss in more detail.",
    img: productsImage,
  },
];

export const documentItems: IDocumentItems[] = [
  {
    id: 1,
    title: "Документация",
    desc: "Identify performance obligations and assign proper revenue rules for separate performance obligations in a single revenue assign proper revenue rules for separate obligations in a single revenue contract.",
    img: cards_two_box_image_6,
    params: "document",
  },
  {
    id: 2,
    title: "Сертификаты",
    desc: "Don’t limit revenue recognition to only bookings or billings; instead, configure unlimited events, such as product delivery, completed milestones, percentage of completion, provisioning, etc.",
    img: cards_two_box_image_6,
    params: "certificate",
  },
  {
    id: 3,
    title: "Типовые проекты",
    desc: "Automate tedious SSP calculations using intelligent historical analysis. Automatically apply SSPs to performance obligations and allocate across bundled contracts, saving you time and headaches.",
    img: cards_two_box_image_6,
    params: "typical_projects",
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

export const productDetailLists_one: string[] = [
  "242 адресных устройства на один шлейф ПС, любые типы устройств, макс. 1452 адреса",
  "Поддержка до 32 панелей индикации/управления (ZCP) с индивидуальными программируемыми кнопками и светодиодными индикаторами.  Максимум 8 ZCP в одном шкафу",
  "7-дюймовый цветной сенсорный дисплей 800 x 480",
  "Встроенная поддержка нескольких языков",
  "Программирование через ПК или клавиатуру на панели и сенсорный дисплей",
  "USB-порт для настройки системы и обновления прошивки",
  "Поддержка USB-ключа для защиты базы данных проекта",
  "Архив на 100000 событий",
  "Сообщение о несоответствии типа устройства и дубликатах адресов в шлейфе",
  "Резервный ЦПУ (опционально)",
  "Встроенная поддержка BACnet (код авторизации заказывается отдельно)",
  "Возможность удаленной загрузки данных",
  "2  выхода  управления  оповещателями  с  ограничением мощности класса B (NAC), общая нагрузка макс. 2,5 A/24 В  постоянного  тока.  2-ой  NAC  можно  настроить  как вспомогательный выход (AUX).",
  "Мини-термопринтер (опционально) и дополнительный",
];
