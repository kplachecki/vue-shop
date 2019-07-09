<template>
    <div class="s-quantity-action"> 

        <i class="material-icons s-quantity-action__icon"
            @click="qtChanged(cartProduct, 'decrease')">
                remove
        </i>

        <span> {{ cartProduct.ordered }} </span>

        <i class="material-icons s-quantity-action__icon"
            @click="qtChanged(cartProduct, 'increase')">
            add
        </i>

    </div>
</template>

<script>
export default {
    name: 'sQuantityAction',
    props: ['cartProduct'],

    methods: {
        
        qtChanged(cartProduct, method) {

            if((cartProduct.ordered === 1 && method === 'decrease') 
                || (cartProduct.ordered === cartProduct.qt && method === 'increase')){
                return

            } else { 
                let actionDetail = {
                method: method,
                id: cartProduct.id
                }

                this.$store.commit("qtChanged", actionDetail)}
            
        },
    }
    
}
</script>

<style lang="scss" scoped>

.s-quantity-action {
    
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
