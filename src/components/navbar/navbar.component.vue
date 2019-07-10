<template>
  <nav class="s-navbar" @click="showCart(false)">
    <div class="s-navbar__container">

      <s-cart></s-cart>

    </div>
  </nav>
</template>

<script>
import sCart from "./navbar-item-cart.component.vue"
export default {
    name: 'sNavbar',
    methods: {
      showCart(visible) {
        this.$store.commit("showCart", visible)
      }
    },
    components: {
      sCart
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
  justify-content: center;
  height: 6.4rem;
  background-color: $primary-color;
  color: #fff;
  box-sizing: border-box;
  z-index: 4;

  &__container {

    display: flex;
    justify-content: flex-end;
    width: 85%;

    @include phone {

      width: 100%
    }

    @include tablet {

      width: 95%;
    }

    @include ipad {

      width: 90%;
    }
  }
}

</style>





