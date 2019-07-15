<template>
    <div class="s-cart-item-action"> 

        <i class="material-icons s-cart-item-action__icon" 
            :class="{'disabled-icon': cartProduct.ordered <= 1}"
            @click="quantityChanged(cartProduct, 'decrease')">
                remove
        </i>

        <span> {{ cartProduct.ordered }} </span>

        <i class="material-icons s-cart-item-action__icon" 
            :class="{'disabled-icon': cartProduct.ordered >= cartProduct.quantity}"
            @click="quantityChanged(cartProduct, 'increase')">
                add
        </i>

    </div>
</template>

<script>
export default {
    name: 'sQuantityAction',
    props: ['cartProduct'],

    methods: {
        
        quantityChanged(cartProduct, method) {

            if((cartProduct.ordered === 1 && method === 'decrease') 
                || (cartProduct.ordered === cartProduct.quantity && method === 'increase')){
                return

            } else { 
                let actionDetail = {
                method: method,
                id: cartProduct.id
                }

                this.$store.commit("quantityChanged", actionDetail)}
            
        },
    }
    
}
</script>

<style lang="scss" scoped>
    @import "@/styles.scss";

.s-cart-item-action {
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;


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
