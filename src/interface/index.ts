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
export interface FCard {
  id: number;
  desc: string;
  img: string;
  userImg: string;
}
export interface ICardOneItems {
  id: number;
  span_title: string;
  img: string;
  title: string;
  desc: string;
}
export interface IProductCategory {
  id: number;
  title: string;
}

export interface IDocumentItems {
  id: number;
  title: string;
  desc: string;
  img: string;
  params: string;
}
export interface Contactdetails {
  id:number,
  title:string,
  desc:string,
  img:string
}
export interface Category {
  id:number,
  title:string,
  image:string,
  description:string
}
export interface IPostuserdata {
  id?:number,
  full_name: string,
  organization: string,
  phone_number: string,
  email: string,
  desc: string
}
  
export interface ICategory {
  id: number;
  title: string;
  image: string;
  description: string;
}
export interface IDocs {
  file: string;
  id: number;
  title: string;
  type: string;
}

export interface INewProducts {
  category: number;
  description: string;
  id: number;
  product_images: { image: string }[];
  title: string;
}

export interface IAttributeName {
  image: string;
  title: string;
  value: string;
}

export interface IProducts {
  attribute_names: {
    name: string;
    attribute_values: { image: string; title: string; value: string }[];
  }[];
  category: number;
  description: string;
  product_images: { image: string }[];
  title: string;
}
