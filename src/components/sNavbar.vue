<template>
  <nav class="s-navbar" @click="showCart(false)">
    <div class="s-navbar__container">

      <div class="s-navbar__item"
            @mouseover="showCart(true)">

        <i class="material-icons item__icon">
          shopping_cart
        </i>

      </div>

    </div>
  </nav>
</template>

<script>
export default {
    name: 'sNavbar',
    methods: {
      showCart(visible) {
        this.$store.commit("showCart", visible)
      }
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

  &__item {

    height: 100%;
    width: 10rem;
    display: flex;
    justify-content: center;

      &:hover {

        background-color: $secondary-color;
        cursor: pointer;
      }  

      .item {

        &__icon {

          font-size: 3.6rem;
          align-self: center;
        }

      }
  }
}

</style>





