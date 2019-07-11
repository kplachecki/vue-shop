<template>
    <div class="s-cart"
        @mouseover="showCart(true)">

        <span class="s-cart__counter">{{ cartCounter }}</span>

        <i class="material-icons s-cart__icon">
          shopping_cart    
        </i>

        <span class="s-cart__amount">{{ totalToPay | cartEmpty | moneyFormat }}</span>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'sCart',

    computed: {
        ...mapGetters(['totalToPay', 'cartCounter'])
    },

    methods: {
      showCart(visible) {
        this.$store.commit("showCart", visible)
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "@/variables.scss";

.s-cart {

    height: 100%;
    width: 10rem;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &:hover {

        background-color: $secondary-color;
        cursor: pointer;
      }  

        &__icon {

            font-size: 3.6rem;
        }

        &__counter {

          position: absolute;
          right: 2.6rem;
          top: 0.3rem;
          font-size: 1.3rem;
          background-color: #fff;
          color: #1890ff;
          font-weight: bold;
          border: 1px solid #1890ff;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 2rem;
        }

        &__amount {

          font-size: 1.4rem;
        }

      }
</style>
