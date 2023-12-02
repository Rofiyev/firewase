export interface INavberMenu {
  id: number;
  route: string;
  label: string;
}
export interface IAccordionGallery {
  id: number;
  number: string;
  header_title: string;
  body_title: string;
  body_desc: string;
  img: string;
}
export interface ICard {
  id: number;
  title: string;
  desc: string;
  img: string;
}
export interface FCard{
  id:number;
  desc:string;
  img:string;
  userImg:string;
}
export interface ICardOneItems {
  id: number;
  span_title: string;
  img: string;
  title: string;
  desc: string;
}
export interface IProductCategory {
  id:number,
  title:string
}
