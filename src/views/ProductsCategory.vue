<template>
  <div class="products-category mt-10">
    <h1 class="text-center">{{ $route.query.title }}</h1>
    <v-container>
      <v-card class="pt-5" min-height="700px" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image, article , button">
            </v-skeleton-loader
          ></v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in categoriesProducts.products"
            :key="item.id"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
          >
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
                    width="90"
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
                width="190"
                height="35"
              ></v-rating>
              <v-card-text class="pl-0 pt-0">
                <del>${{ item.price }}</del> From
                <span class="text-red" style="font-weight: 900; font-size: 16px"
                  >${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </span></v-card-text
              >
              <v-btn-toggle
                v-model="shownItem[item.title]"
                style="overflow-x: hidden; flex-wrap: wrap"
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
                  width="170"
                  height="35"
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
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products.js";
import { mapActions, mapState } from "pinia";
// import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

export default {
  inject: ["Emitter"],
  components: {
    // VSkeletonLoader,
  },

  data: () => ({
    shownItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoriesProducts"]),
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1);
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.query.category);
    this.loading = false;
  },
  watch: {
    async $route() {
      if (this.$route.name == "products_category") {
        document.documentElement.scrollTo(0, 0);
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}
</style>
