<template>
    <div class="s-cart">

        <div class="s-cart__list">
            <div class="list__item"    
                    v-for="(cartProduct, index) in this.$store.state.cart" 
                    :key="index">

                    <span>{{ `${cartProduct.brand} ${cartProduct.model}` }}</span>
                    <span>{{ cartProduct.price }}$</span>

                    <s-quantity-action :cartProduct="cartProduct"></s-quantity-action>

                    <span>
                        <i class="material-icons item__icon"
                            @click="removeFromCart(cartProduct)">
                            remove_shopping_cart
                        </i>
                    </span>

            </div>
        </div>

        <div class="s-cart__value">
            <span> Cart Value: <strong> {{ totalToPay }}$ </strong></span>
        </div>

        <s-checkout-button></s-checkout-button>

    </div>
</template>

<script>
import sCheckoutButton from "./sCheckoutButton"
import sQuantityAction from '@/components/sActions/quantity-action'
import { mapGetters } from "vuex";

export default {
    name: 'sCart',

    methods: {

        removeFromCart(cartProduct) {

            this.$store.commit("removeFromCart", cartProduct)
        }
    },

    computed: {
        ...mapGetters(['totalToPay'])
    },

    components: {
        sCheckoutButton,
        sQuantityAction
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

            .list {

                &__item {

                    display: grid;
                    align-items: center;
                    font-size: 1.4rem;
                    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
                    grid-gap: 1rem;
                    margin: .5rem 0 0.5rem;
                    height: 3rem;

                    .item {

                        &__icon {
                            cursor: pointer;
                            transition: transform 0.3s;

                            &:hover {
                            transform: scale(1.1)
                            }

                            &:active {
                                transform: scale(0.95)
                            }
                        }
                    }    
                }
            }
        }

        &__value {

            display: flex;
            width: 90%;
            height: 10%;
            justify-content: center;
        }

    }


</style>
