<template>
    
    <div class="s-cart-list-submit">
        <button class="s-cart-list-submit__button" 
                :class="{ 'disabled-button': this.$store.state.cart.length <= 0 }"
                :disabled="this.$store.state.cart.length <= 0"
                @click="goToCheckout">
            Checkout
        </button>
    </div>

</template>

<script>
export default {
    name: 'sCartListSubmit',
    methods: {
        goToCheckout() {
            this.$router.push("/checkout")
            this.$store.commit('showCart')
        }
    }
    
}
</script>

<style lang="scss" scoped>
    @import "@/variables.scss";
    @import "@/styles.scss";

    .s-cart-list-submit {

        display: flex;
        width: 90%;
        height: 10%;
        justify-content: center;

        &__button {

            border: none;
            color: #fff;
            width: 50%;
            background-color: $primary-color;
            font-family: inherit;
            cursor: pointer;

            &:hover {
                background-color: $secondary-color
            }

            &:active {
                transform: scale(0.95);
            }
            
            &:focus {
                outline: 0;
            }
        }
    }

</style>

