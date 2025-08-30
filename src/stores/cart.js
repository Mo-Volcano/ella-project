import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      let exist = false;

      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === item.id) {
          this.cartItems[i].quntity += item.quntity;
          exist = true;
          break;
        }
      }

      if (!exist) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }

      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    getCartItem() {
      if (localStorage.getItem("cartItems")) {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      }
    },

    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === id) {
          this.cartItems.splice(i, 1);
          localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
          break;
        }
      }
    },
    setToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    restItems() {
      this.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});
