<template>
    <div class="s-cart">

        <div class="s-cart__list">
            <s-cart-item v-for="(cartProduct, index) in this.$store.state.cart" 
                         :key="index"
                         :cartProduct="cartProduct">
            </s-cart-item>
        </div>

        <div class="s-cart__value">
            <span> Cart Value: <strong> {{ totalToPay }}$ </strong></span>
        </div>

        <s-cart-list-submit></s-cart-list-submit>

    </div>
</template>

<script>
import sCartListSubmit from "./cart-list-submit.component.vue"
import sCartItem from './cart-item.component.vue'
import { mapGetters } from "vuex";

export default {
    name: 'sCart',

    computed: {
        ...mapGetters(['totalToPay'])
    },

    components: {
        sCartListSubmit,
        sCartItem
    }
}
</script>

<style lang="scss" scoped>
    @import "@/variables.scss";

.s-cart {

    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 15;
    top: 6.4rem;
    right: 0;
    width: 35vw;
    height: 40vh;
    background-color: #fff;
    box-shadow: 0px 0px 3px $secondary-color;
     
        &__list {

            display: flex;
            flex-direction: column;
            width: 90%;
            height: 70%;
        }

        &__value {

            display: flex;
            width: 90%;
            height: 10%;
            justify-content: center;
        }
}


</style>
