import { groq } from "next-sanity";
import { client } from "./client";


export const allProducts = groq`*[_type == "product"]`
export const four= groq`*[_type == "product"][0..3]`
const fetchOrders = async () => {
    try {
      const query = '*[_type == "order"]{FirstName, LastName, address, city, zipCode, phone, email, products, total, discount, orderDate}';
      const orders = await client.fetch(query);
      console.log("Orders from Sanity: ", orders);
      return orders;
    } catch (error) {
      console.error("Error fetching orders: ", error);
      return [];
    }
  };
  