<!-- eslint-disable prettier/prettier -->
<template>
  <div class="product-detalis mt-16">
    <h1>Product Detalis</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img  :src="tap ? tap : singleProduct.thumbnail" class="w-100" alt=""  height="600" v-if="!loading"/>
          <v-skeleton-loader v-if="loading" type="image, image, image"></v-skeleton-loader>
          <v-tabs center-active height="220" v-model="tap" class="mt-10">
            <v-tab v-for="(img , i) in singleProduct.images" :key="i" :value="img" class="mx-10">
            <img :src="img" width="100" height="200" alt="">
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-8">
          <v-skeleton-loader v-if="loading" type="article, article, article"></v-skeleton-loader>
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >({{ singleProduct.title }}) Sample - {{ singleProduct.category }} For
              Sale</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1" style="color: #777; font-size: 13px"
                >stock {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="color: #777; font-size: 13px">{{
              singleProduct.description
            }}</v-card-text>
            <v-card-text class="px-0 pt-0" style="color: #777; font-size: 13px"
              >Brand : {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text class="px-0 pt-0" style="color: #777; font-size: 13px"
              >Availabilty :
              {{ singleProduct.stack > 0 ? "In stock" : "out of stack" }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
                  <del>${{ singleProduct.price }}</del> From
                  <span
                    style="font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        singleProduct.price -
                          singleProduct.price * (singleProduct.discountPercentage / 100)
                      )
                    }}
                  </span></v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  Quntity : 
                </v-card-text>
                <div class="counter px-1" style="border-radius: 30px; border:1px solid #777; width: fit-content;">
                  <v-icon size="22"  @click="quntity > 1 ? quntity-- : false" >mdi-minus</v-icon>
                  <input type="number" v-model="quntity" name="" min="1" value="1" style="border:none;width: 60px; outline:none;font-size:14px;" class="text-center py-3" id="">
                  <v-icon size="22" @click="quntity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                    Subtotal :  ${{
                        Math.ceil(
                          singleProduct.price -
                            singleProduct.price * (singleProduct.discountPercentage / 100)
                        ) * quntity
                      }} 
                  </v-card-text>
                <v-card-actions class="mt-7 w-100">
                  <v-btn @click="addToCart(singleProduct)" :loading="btnLoading" class="w-75 text-white px-0" variant="outlined" density="compact" height="50" style="text-transform: none; border-radius: 30px; background-color: black;">Add To Cart</v-btn>
                </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products.js";
import { cartStore } from "@/stores/cart.js";
import { mapActions, mapState } from "pinia";
// import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
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
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  data: () => ({
    loading: false,
    tap: "",
    quntity: 1,
    btnLoading: false,
  }),
  components: {
    // VSkeletonLoader,
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
};
</script>
