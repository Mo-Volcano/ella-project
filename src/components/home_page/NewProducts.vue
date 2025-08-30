<template>
  <div class="new-products pt-12">
    <div class="title px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px">New Products</h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length" class="pt-14">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="image, article , button">
              </v-skeleton-loader
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="7" class="pt-14 order-1 order-md-0" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between-slides="20"
            :breakpoints="breakpoints"
            class="pb-9 px-5"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="py-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative"
                    style="height: 160px; overflow: hidden"
                  >
                    <img
                      :src="
                        shownItem[item.title]
                          ? shownItem[item.title]
                          : item.thumbnail
                      "
                      class="w-100"
                      :style="`height: 100% ; transition:0.5s all ease-in-out; scale:${
                        isHovering ? 1.05 : 1
                      }; curser:pointer`"
                      alt=""
                      v-bind="props"
                    />
                    <v-btn
                      variant="outlined"
                      class="quick-view-btn bg-white"
                      density="compact"
                      width="60"
                      height="30"
                      style="
                        text-transform: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-size: 12px;
                        transition: all 0.3s ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  {{
                    `(${item.title}) ${item.description}`.length <= 47
                      ? `(${item.title}) ${item.description}`
                      : `(${item.title}) ${item.description}`.substring(0, 47) +
                        "..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="compact"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </span></v-card-text
                >
                <v-btn-toggle
                  v-model="shownItem[item.title]"
                  style="overflow-x: hidden; flex-wrap: wrap"
                  mandatory
                >
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    rounded="xl"
                    :ripple="false"
                    size="x-small"
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="
                        border-radius: 50%;
                        border: 1px solid #ccc;
                        overflow: hidden;
                      "
                  /></v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="compact"
                    class="py-3 px-12"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'product_detalis',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card></swiper-slide
            >
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col> </v-row
    ></v-container>
  </div>
</template>

<script>
// import ProductsSwiper from "./ProductsSwiper.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
// import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data: () => ({
    shownItem: [],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }),
  mounted() {
    // Initialize the shownItem object with keys from products
    console.log(" NEwwwwwww" + this.products);
    console.log("from NEw Products");
  },
};
</script>
<style lang="scss">
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
@media (max-width: 580px) {
  .img-parent {
    height: 300px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 60%;
  }
}
</style>
