import { IAccordionGallery, INavberMenu, ICard } from "../interface";
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
    route: "/simple-projects",
    label: "Типовые проекты",
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
    id: 1,
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

export const documentItems: ICard[] = [
  {
    id: 1,
    title: "Документация",
    desc: "Identify performance obligations and assign proper revenue rules for separate performance obligations in a single revenue assign proper revenue rules for separate obligations in a single revenue contract.",
    img: cards_two_box_image_6,
  },
  {
    id: 2,
    title: " Сертификаты",
    desc: "Don’t limit revenue recognition to only bookings or billings; instead, configure unlimited events, such as product delivery, completed milestones, percentage of completion, provisioning, etc.",
    img: cards_two_box_image_6,
  },
  {
    id: 3,
    title: " Типовые проекты",
    desc: "Automate tedious SSP calculations using intelligent historical analysis. Automatically apply SSPs to performance obligations and allocate across bundled contracts, saving you time and headaches.",
    img: cards_two_box_image_6,
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
