<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="text-red"
      :index="0"
    />
    <TopCats />
    <NewProducts :products="newProducts" :index="1" />
    <QuailatyFeatures />
    <ProductsComponent
      :products="mobilePhones"
      title="Top Mobile phones"
      titleColor="text-black"
      :index="2"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pr-5">
          <img
            src="@/assets/images/band-left-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
        <v-col cols="6" class="pl-5">
          <img
            src="@/assets/images/band-right-cover.webp"
            alt=""
            class="w-100"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="mobilePhones"
      title="Top its clone phones"
      titleColor="text-black"
      :index="3"
    />
    <img src="@/assets/images/tv-banner.webp" class="w-100" alt="" />
    <ProductsComponent
      :products="mobilePhones"
      title="Top Mobile phones"
      titleColor="text-black"
      :index="4"
    />
  </div>
  <WhyShopWithus />
  <QuickView />
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProductsComponent from "@/components/home_page/ProductsSwiper.vue";
import TopCats from "@/components/home_page/TopCategories.vue";
import QuailatyFeatures from "@/components/home_page/QuailatyFeatures.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import WhyShopWithus from "@/components/home_page/WhyShopWithus.vue";
// import QuickView from "@/components/home_page/QuickView.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCats,
    NewProducts,
    QuailatyFeatures,
    WhyShopWithus,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals", "newProducts", "mobilePhones"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
