import axios from "axios";
import { BASE_URL } from "../config";

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

export const getDocuments = async (types: string = "") => {
  const params = {
    document_type: types,
  };
  try {
    const { data } = await axios.get(`${BASE_URL}/document/`, { params });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
};

export const getProducts = async (
  product_id: string = "",
  category_id: string = "",
  product_last_count: string = ""
) => {
  const params = {
    product_id: product_id,
    category_id: category_id,
    product_last_count: product_last_count,
  };
  try {
    const { data } = await axios.get(`${BASE_URL}/product/`, { params });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
};
