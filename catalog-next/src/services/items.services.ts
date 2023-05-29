import axios from "axios";
const API_URL = "https://dummyjson.com";

axios.defaults.baseURL = API_URL;

export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const ItemService = {
  async getAll() {
    const { data } = await axios.get<IProducts[]>("/products");
    return data?.products;
  },

  async getById(id:string) {
    const { data } = await axios.get<IProducts>(`/products/${id}`);
    return data;
  },
};
