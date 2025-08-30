import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/products",
    name: "products_category",
    component: () => import("../views/ProductsCategory.vue"),
  },
  {
    path: "/products/products-detalis/:productId",
    name: "product_detalis",
    component: () => import("../views/ProductDetalis.vue"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("../views/CartPage.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckOut.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
    // ...
  },
});

export default router;
