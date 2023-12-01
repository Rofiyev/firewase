import { IAccordionGallery, INavberMenu } from "../interface";
import accordion_img_01 from "../assets/accordion_image_1.png";
import accordion_img_02 from "../assets/accordion_image_2.png";
import accordion_img_03 from "../assets/accordion_image_3.png";

export const navbarMenu: INavberMenu[] = [
  {
    id: 1,
    route: "/",
    label: "Главная",
  },
  {
    id: 2,
    route: "/products",
    label: "Продукты",
  },
  {
    id: 3,
    route: "/company",
    label: "О компании",
  },
  {
    id: 4,
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
