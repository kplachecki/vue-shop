<template>
    <div class="s-cart-item">

        <span>{{ `${cartProduct.brand} ${cartProduct.model}` }}</span>
        <span>{{ cartProduct.price | moneyFormat }}</span>

        <s-cart-item-action :cartProduct="cartProduct"></s-cart-item-action>

        <span>
            <i class="material-icons s-cart-item__icon"
                @click="removeFromCart(cartProduct)">
                    remove_shopping_cart
            </i>
        </span>

    </div>
</template>

<script>
import sCartItemAction from './cart-item-action.component.vue'

export default {
    name: 'sCartItem',
    props: ['cartProduct'],

    methods: {

        removeFromCart(cartProduct) {

            this.$store.commit("removeFromCart", cartProduct)
        }
    },
    components: {
        sCartItemAction
    }
}
</script>

<style lang="scss" scoped>


.s-cart-item {

    display: grid;
    align-items: center;
    font-size: 1.4rem;
    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
    grid-gap: 1rem;
    margin: .5rem 0 0.5rem;
    height: 3rem;

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

</style>
