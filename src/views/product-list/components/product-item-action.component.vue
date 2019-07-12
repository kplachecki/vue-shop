<template>
    <div class="s-product-item-action">

        <div class="material-icons icon" 
            :class="{'disabled-icon': product.qt < 1 || !product.pickedColor}"
            @click="addToCart">
            add_shopping_cart

            <span v-if="this.$store.state.cart.find(el => el.id === product.id)" 
                  class="icon__counter">
                  {{ this.itemCounter.ordered }}
            </span>

        </div>

    </div>
</template>

<script>
export default {
    name: 'sActions',
    props: ["product"],

    methods: {

        addToCart() {

            if(this.product.qt > 0 && this.product.pickedColor) {
                this.$store.commit("addToCart", this.product);

            }else if (!this.product.pickedColor){
                alert('Pick color first')
            }
            else {
                alert("Product unavailable")
            }

        }
    },

    computed: {
        itemCounter() {
           return this.$store.getters.itemCounter(this.product.id)
        }
    }
    
}
</script>

<style lang="scss" scoped>
 @import "@/styles.scss";

.s-product-item-action {

        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;


.icon {
    transition: transform .3s;
    cursor: pointer;
    position: absolute;

    &:hover {
        transform: scale(1.2);
    }

    &__counter {

        font-family: "Quicksand";
        position: absolute;
        left: 1.6rem;
        bottom: 1.1rem;
        font-size: 1.2rem;
        font-weight: bold;
        border: 1px solid #000;
        background-color: #fff;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 2rem;
        padding: 0.1rem;

    }
}

}

</style>
