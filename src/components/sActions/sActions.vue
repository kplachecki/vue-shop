<template>
    <div class="s-actions">

        <i class="material-icons s-actions__icon" 
            @click="addToCart">
            add_shopping_cart
        </i>

    </div>
</template>

<script>
export default {
    name: 'sActions',
    props: ["product"],
    methods: {

        addToCart() {

            if(this.product.qt > 0) {
            this.$store.commit("addToCart", this.product);

            }else {
                alert("Product unavailable")
            }

        }
    }
    
}
</script>

<style lang="scss" scoped>

    .s-actions {

        display: flex;
        justify-content: center;
        align-items: center;

        &__icon {
            transition: transform .3s;
            cursor: pointer;

                &:hover {
                    transform: scale(1.2);
                }
        }
    }

</style>
