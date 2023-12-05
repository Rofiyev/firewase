import axios from "axios";
import { BASE_URL } from "../config";
import { IPostuserdata } from "../interface";

export const getCategorys = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category/`);
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
};
export const getDocuments = async () => {};
export const getProducts = async () => {};

export const postContact = async (body: IPostuserdata) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/form/`, body);
  } catch (error) {
    console.log(error);
  }
};
export const checkPhoneNumber = async (number: string) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/activation/
    `,
      {
        phone_number: number,
      }
    );
    return { success: true, data };
  } catch (error) {
    console.log(error);
  }
};
