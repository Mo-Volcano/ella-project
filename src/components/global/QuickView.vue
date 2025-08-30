<template>
  <div class="quick-view mt-16">
    <h1 v-if="loading">Product Details</h1>
    <v-dialog v-model="dialog" max-width="900" max-height="600">
      <v-icon
        style="
          position: absolute;
          right: -18px;
          top: -18px;
          padding: 13px;
          z-index: 10;
          background-color: black;
          font-size: 18px;
          color: white;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tap ? tap : product.thumbnail"
                class="w-100"
                alt=""
                height="400"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <v-tabs center-active height="130" v-model="tap" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  :value="img"
                  class="mx-10"
                >
                  <img :src="img" width="70" height="100" alt="" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" sm="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              ></v-skeleton-loader>
              <v-card elevation="0">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                  ></v-rating>
                  <span class="mt-1" style="color: #777; font-size: 13px"
                    >stock {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="color: #777; font-size: 13px"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: #777; font-size: 13px"
                  >Brand : {{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: #777; font-size: 13px"
                  >Availabilty :
                  {{
                    product.stack > 0 ? "In stock" : "out of stack"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span style="font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span></v-card-text
                >
                <v-card-text class="pl-0 pt-0"> Quntity : </v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid #777;
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quntity > 1 ? quntity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    v-model="quntity"
                    name=""
                    min="1"
                    value="1"
                    style="
                      border: none;
                      width: 60px;
                      outline: none;
                      font-size: 14px;
                    "
                    class="text-center py-3"
                    id=""
                  />
                  <v-icon size="22" @click="quntity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                  Subtotal : ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quntity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100">
                  <v-btn
                    :loading="btnLoading"
                    class="w-75 text-white px-0"
                    variant="outlined"
                    density="compact"
                    height="50"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: black;
                    "
                    @click="addToCart(product)"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { cartStore } from "@/stores/cart.js";
import { mapActions } from "pinia";

export default {
  inject: ["Emitter"],

  data: () => ({
    loading: false,
    product: "",
    tap: "",
    quntity: 1,
    dialog: false,
    btnLoading: false,
  }),
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quntity = this.quntity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  // components: {
  //   VSkeletonLoader,
  // },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.product = data;
      this.dialog = true;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background: #333;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background: #777;
  }
}
</style>
