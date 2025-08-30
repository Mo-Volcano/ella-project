import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("products", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    categoriesProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptop",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Mens Watches",
        route: "mens-watches",
      },
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Womens Bags",
        route: "womens-bags",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter((el) => {
            return el.category === "beauty";
          });
          this.flashDeals = res.data.products.slice(0, 8);
          this.mobilePhones = res.data.products.filter((el) => {
            return el.category === "fragrances";
          });
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get("https://dummyjson.com/products/category/" + category)
        .then((res) => (this.categoriesProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get("https://dummyjson.com/products/" + productId)
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
