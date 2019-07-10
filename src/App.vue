<template>
  <div class="app">

    <s-navbar></s-navbar>
    
    <div class="main-view">
      <div class="main-view__backdrop" 
            @click="showCart(false)"
            v-if="this.$store.state.cartVisible">
      </div>

      <s-cart v-if="this.$store.state.cartVisible"></s-cart>
      <router-view name='sSidebar'></router-view>
      <router-view ></router-view>

    </div>
    
  </div>
</template>

<script>
import sNavbar from "./components/navbar/navbar.component.vue";
import sCart from "./components/cart/cart-list.component.vue";


export default {
  name: "app",

  components: {
    sNavbar,
    sCart

  },

  methods: {
      showCart(visible) {
        this.$store.commit("showCart", visible)
      }
    }

};
</script>

<style lang="scss">
@import "./styles.scss";
@import "./variables.scss";

.app {
  display: flex;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  background-color: $app-bg-color;

}

.main-view {
  display: flex;
  flex: 1;
  padding-top: 6.4rem;

    &__backdrop {
      width: 100%;
      height: 100%;
      z-index: 5;
      position: fixed;
    }
}

</style>
