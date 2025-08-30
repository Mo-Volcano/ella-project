<template>
  <div>
    <app-layout>
      <router-view></router-view>
      <QuickView />
      <VSnackbar
        v-model="bar"
        location="left bottom "
        max-width="300"
        timeout="3000"
      >
        {{ itemTitle }} has been added to your cart successfully
        <template v-slot:actions>
          <VIcon @click="bar = false">mdi-close</VIcon>
        </template>
      </VSnackbar>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/components/global/AppLayout";
import QuickView from "@/components/global/QuickView.vue";
export default {
  inject: ["Emitter"],
  components: {
    AppLayout,
    QuickView,
  },
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>
<style>
.v-rating__wrapper {
  margin-right: 5px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
