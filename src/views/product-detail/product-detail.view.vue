<template>

    <div class="s-product-detail">
        <span> ID: {{ this.productDetails.id }} </span>
        <span> Category: {{ this.productDetails.category }} </span>
        <span> Model: {{ this.productDetails.model }} </span>
        <span> Price: {{ this.productDetails.price | moneyFormat }} </span>
        <span> Quantity: {{ this.productDetails.quantity }} </span>
    </div>

</template>

<script>

export default {
    name: 'sProductDetail',
    computed: {
        productDetails() {
            return this.$store.getters.productDetails(this.$route.params.id)
        }
  }
}
</script>

<style lang="scss" scoped>

    .s-product-detail {
        display: flex;
        flex-direction: column;
    }

</style>

