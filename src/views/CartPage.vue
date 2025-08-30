<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs :items="['Home', 'Your cart']" style="font-size: 13px">
            <template v-slot:divider>
              <v-icon color="#777">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <VCol cols="12" class="pt-0">
          <v-cart-title
            class="px-4 d-flex pb-0 justify-space-between align-center"
            style="font-weight: bold; font-size: 35px"
            >Your Cart</v-cart-title
          >
          <div
            class="bar-parent mt-3 position-relative mr-2"
            v-if="cartItems.length"
          >
            <svg
              class="icon-shipping-truck"
              viewBox="0 0 40.55 24"
              width="30"
              :fill="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? '#f44336'
                  : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? '#ff9800'
                  : '#4caf50'
              "
              :style="`position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 15px);
              transition: 0.15s all ease-in-out;`"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              :color="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              height="10"
              striped
              :model-value="
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? (calcTotalPrice / 10000) * 100
                  : 100
              "
            ></v-progress-linear>
          </div>
          <VCardText
            v-if="cartItems.length && 10000 - calcTotalPrice > 0"
            class="px-0 pt-2"
            color="#777"
            >Only ${{ 10000 - calcTotalPrice }} away from Shipping</VCardText
          >
          <VCardText
            v-if="!cartItems.length && 10000 - calcTotalPrice > 0"
            class="px-0 pt-2"
            color="#777"
            >Free Shipping For All Orders Over $10000.00</VCardText
          >
          <VCardText
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
            class="px-0 pt-2"
            color="#777"
            >Your Order now is included free shipping</VCardText
          >
          <VCardText
            v-if="!cartItems.length"
            class="px-0 pt-2 text-center mt-5"
            color="#777"
            >Your Cart Is Empty</VCardText
          >
          <VCardActions class="px-0 justify-center">
            <v-btn
              style="
                text-transform: none;
                border-radius: 30px;
                border-color: #333;
              "
              class="mx-0"
              width="300"
              variant="outlined"
              density="compact"
              height="45"
              v-if="!cartItems.length"
              @click="$router.push({ name: 'home' })"
              >Continue Shopping</v-btn
            >
          </VCardActions>
        </VCol>
        <VCol cols="12" lg="8" v-if="cartItems.length" class="px-3">
          <v-table class="w-100">
            <thead>
              <tr>
                <th style="font-size: 12px; font-weight: bold">PRODUCT</th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  PRICE
                </th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  QUANTITY
                </th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <VRow class="align-center mb-4">
                    <VCol cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </VCol>
                    <VCol cols="7">
                      <VCardTile
                        class="px-0"
                        style="
                          white-space: pre-wrap;
                          font-size: 14px;
                          line-height: 1.2;
                        "
                      >
                        {{ item.title }} Sample - {{ item.category }}
                      </VCardTile>
                      <VCardText color="#777" class="px-0 pb-0">
                        Category :{{ item.category }}
                      </VCardText>

                      <div
                        class="item-footer d-flex justify-space-between align-center"
                      ></div>
                    </VCol>
                  </VRow>
                </td>
                <td style="width: 15%" class="text-center">
                  <VCardText class="px-0 pt-2">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </VCardText>
                </td>
                <td style="width: 15%" class="text-center">
                  <div
                    class="counter px-1"
                    style="
                      border-radius: 30px;
                      border: 1px solid #777;
                      width: fit-content;
                    "
                  >
                    <v-icon
                      size="19"
                      color="#777"
                      @click="item.quntity > 1 ? item.quntity-- : false"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      v-model="item.quntity"
                      name=""
                      min="1"
                      value="1"
                      color="#333"
                      style="
                        border: none;
                        width: 35px;
                        outline: none;
                        font-size: 12px;
                      "
                      class="text-center py-3"
                      id=""
                    />
                    <v-icon size="19" color="#777" @click="item.quntity++"
                      >mdi-plus</v-icon
                    >
                  </div>
                </td>
                <td style="width: 15%" class="text-center">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.quntity
                  }}
                </td>
                <td style="width: 15%" class="text-center">
                  <VIcon size="22" @click="deleteItem(item.id)"
                    >mdi-close</VIcon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>

          <VCardText
            v-if="cartItems.length"
            class="px-0 mt-4 pt-2 d-flex align-center"
            style="gap: 10px"
            color="#777"
          >
            <!-- <span><svg width="30" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 179.94 179.96" class="icon icon-shield-check"><defs><style>.cls-1{fill:#fff !important;}</style><path d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"/><polygon fill="white" class="cls-1" points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"/></svg>
            </span> -->
            <span>Secure Shopping Guarantee</span></VCardText
          >
          <img src="@/assets/images/cart-page-cards.webp" width="270" alt="" />
        </VCol>
        <VCol
          cols="12"
          lg="4"
          class="px-3 mt-8 mt-lg-0"
          v-if="cartItems.length"
        >
          <VCard elevation="0">
            <VCardTitle>ORDER SUMMARY</VCardTitle>
            <v-divider
              style="font-size: 14px; font-weight: bold"
              length="100"
              color="black"
            ></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <VCardText
              class="px-0 pt-2 d-flex justify-space-between align-center"
            >
              <span>subtotal</span>
              <span class="font-weight-bold" style="font-size: 16px"
                >${{ calcTotalPrice }}</span
              >
            </VCardText>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <VCardText> Get Shipping estimate </VCardText>
            <select
              name=""
              id=""
              class="w-100 pa-3"
              style="
                border: 1px solid #333;
                border-radius: 30px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countrys"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="states">
              <select
                name=""
                id=""
                class="pa-3 mt-4"
                style="
                  border: 1px solid #333;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 55%;
                  margin-left: 1%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countrys"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                type="text"
                width="43%"
                class="pa-3 mt-4"
                style="
                  border: 1px solid #333;
                  border-radius: 30px;
                  font-size: 14px;
                  margin-left: 1%;
                "
                name=""
                id=""
              />
            </div>
            <VCardActions class="my-5">
              <VBtn
                color="blue"
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                class="w-100 text-white"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  border-color: #333;
                "
                >Calculate shipping
              </VBtn>
            </VCardActions>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <VCardText
              class="px-0 pt-2 d-flex justify-space-between align-center"
            >
              <span>TOTAL : </span>
              <span class="font-weight-bold" style="font-size: 16px"
                >${{ calcTotalPrice }}</span
              >
            </VCardText>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <VCardActions class="my-5 px-0 flex-column" style="gap: 15px">
              <VBtn
                color="blue"
                variant="elevated"
                elevation="0"
                density="compact"
                height="45"
                class="w-100 mx-0 text-white"
                style="
                  text-transform: none;
                  border-radius: 0;
                  border-color: #333;
                "
                @click="toCheckout"
                >Proceed To Checkout</VBtn
              >
              <VBtn
                variant="outlined"
                elevation="0"
                density="compact"
                height="45"
                class="w-100 mx-0"
                style="
                  text-transform: none;
                  border-radius: 0;
                  border-color: #333;
                "
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</VBtn
              >
            </VCardActions>
          </VCard>
        </VCol>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart.js";
import { mapActions, mapState } from "pinia";

export default {
  data: () => ({
    countrys: ["Egypt", "Lebanon", "America", "Seria", "jordan"],
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quntity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItem",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "checkout" });
    },
  },
};
</script>
<style lang="scss">
// media querys
@media (max-width: 767px) {
  .cart-page {
    table {
      width: 800px !important;
    }
  }
}
</style>
