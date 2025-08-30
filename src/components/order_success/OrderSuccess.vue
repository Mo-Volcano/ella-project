<template>
  <div class="order-success">
    <VDialog
      v-model="dialog"
      scrollable
      persistent
      :overlay="false"
      width="50%"
      transition="dialog-transition"
    >
      <VCard class="text-center py-7">
        <div class="text-center">
          <VIcon
            style="
              background-color: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</VIcon
          >
        </div>
        <VCardTitle style="font-size: 30px; font-weight: bold" color="#333"
          >Order placed Successfully</VCardTitle
        >
        <VCardText style="font-size: 17px" color="#777"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit</VCardText
        >
        <VCardActions class="justify-center">
          <VBtn
            class="mt-5"
            color="green"
            variant="elevated"
            @click="restData()"
            >Got it</VBtn
          >
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
<script>
import { cartStore } from "@/stores/cart.js";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: Boolean,
  },
  methods: {
    ...mapActions(cartStore, ["restItems"]),
    restData() {
      this.restItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup", newVal);
        }, 300);
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
