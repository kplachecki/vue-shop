<template>
    
    <div class="s-checkout-button">
        <button class="s-checkout-button__button"
                @click="goToCheckout">
            Checkout
        </button>
    </div>

</template>

<script>
export default {
    name: 'sCheckoutButton',
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

    .s-checkout-button {

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

