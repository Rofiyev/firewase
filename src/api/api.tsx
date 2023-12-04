import axios from "axios";
import { BASE_URL } from "../config";

export const getCategorys = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category/`);
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
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
};

export const getProducts = async (objParams: {
  product_last_count?: string;
  category_id?: string;
  product_id?: string;
}) => {
  const params = {
    ...objParams,
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
