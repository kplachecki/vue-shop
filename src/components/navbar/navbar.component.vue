<template>
  <nav class="s-navbar" @click="showCart(false)">

      <s-navbar-item-logo></s-navbar-item-logo>
      <s-navbar-item-cart></s-navbar-item-cart>

  </nav>
</template>

<script>
import sNavbarItemCart from "./navbar-item-cart.component.vue"
import sNavbarItemLogo from "./navbar-item-logo.component.vue"

export default {
    name: 'sNavbar',
    methods: {
      showCart(visible) {
        this.$store.commit("showCart", visible)
      }
    },
    components: {
      sNavbarItemCart,
      sNavbarItemLogo,
    }
};
</script>

<style lang="scss" scoped>
  @import "@/variables.scss";


.s-navbar {

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  height: 6.4rem;
  background-color: $primary-color;
  color: #fff;
  box-sizing: border-box;
  z-index: 4;

}

</style>





