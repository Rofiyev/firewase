import axios from "axios";
import { BASE_URL } from "../config";

export const getCategorys = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category/`);
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error)
    return { success: false, data: [] };
  }
};
export const getDocuments = async () => {};
export const getProducts = async () => {};
