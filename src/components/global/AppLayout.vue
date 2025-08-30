<template>
  <v-app class="position-relative">
    <div class="layout">
      <v-layout>
        <CartDrawer :windowWidth="windowWidth" />
        <MenuDrawer :windowWidth="windowWidth" />

        <v-main
          :style="`padding-top: ${
            $route.name == 'checkout'
              ? '0px'
              : windowWidth <= 990
              ? '60px'
              : '150px'
          }`"
        >
          <slot></slot>
        </v-main>

        <!-- ✅ نغلف الـ AppNav و FixedNav بـ Transition -->
        <transition name="fade" mode="out-in">
          <AppNav
            v-show="!scrolled && $route.name != 'checkout' && windowWidth > 990"
            key="appnav"
          />
        </transition>

        <transition name="fade" mode="out-in">
          <FixedNav
            v-show="scrolled && $route.name != 'checkout' && windowWidth > 990"
            key="fixednav"
          />
        </transition>
        <transition name="fade" mode="out-in">
          <ResponsiveNav
            v-show="windowWidth <= 990 && $route.name != 'checkout'"
            key="appnav"
          />
        </transition>

        <AppFooter v-show="$route.name != 'checkout'" />
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";

export default {
  data: () => ({
    drawer: false,
    scrolled: false, // ✅ لمعرفة حالة النزول
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
/* ✅ أنيميشن لطيف للظهور والاختفاء */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
