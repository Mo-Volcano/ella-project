<template>
  <div class="shop-withus py-14">
    <div class="title">
      <h2 class="text-center mb-5">Why shop <span>with us ?</span></h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
            style="font-weight: 700"
          >
            <div class="img-parent px-1">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >Free Shipping On First Order
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 16px"
              >Lorem, ipsum dolor sit amet
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
            style="font-weight: 700"
          >
            <div class="img-parent px-1">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >Cashback Reward Program
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 16px"
              >Lorem, ipsum dolor sit amet
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
            style="font-weight: 700"
          >
            <div class="img-parent px-1">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >Weekly Flash sale
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 16px"
              >Lorem, ipsum dolor sit amet
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
            style="font-weight: 700"
          >
            <div class="img-parent px-1">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >Anul Payment Discount
            </v-card-title>
            <v-card-text class="pb-0" style="font-size: 16px"
              >Lorem, ipsum dolor sit amet
            </v-card-text>
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.shop-withus {
  background-image: url("@/assets/images/why-shop-with-us-banner.webp");
  background-size: cover;
  background-repeat: repeat-x;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 30px;
    span {
      color: rgb(45, 251, 223);
    }
  }
}
</style>
