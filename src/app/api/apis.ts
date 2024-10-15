import axiosClient from "./config/axiosClient";
import Cookies from "js-cookie";

export const frontendApi = {
  getHomepage: async function () {
    return await axiosClient.get("home-page/");
  },
  getShopPage: async function () {
    return await axiosClient.get("shop-page/");
  },
  getProductPage: async function (categoryId: any) {
    return await axiosClient.get(`product-page/${categoryId}`);
  },
  getSingleProduct: async function (productId: any) {
    return await axiosClient.get(`single-product/${productId}`);
  },
  getBanner: async function () {
    return await axiosClient.get("carousel/");
  },
  createOrder: async function (body: any) {
    const token = Cookies.get("accessToken");

    return await axiosClient.post(`order`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
