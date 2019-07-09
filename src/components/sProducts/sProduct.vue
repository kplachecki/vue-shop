<template>

    <div class="s-product">
        <span> ID: {{ this.productDetails.id }} </span>
        <span> Category: {{ this.productDetails.category }} </span>
        <span> Model: {{ this.productDetails.model }} </span>
        <span> Price: {{ this.productDetails.price }} </span>
        <span> Quantity: {{ this.productDetails.qt }} </span>
    </div>

</template>

<script>

export default {
    name: 'sProduct',
    computed: {
        productDetails() {
            return this.$store.getters.productDetails(this.$route.params.id)
        }
  }
}
</script>

<style lang="scss" scoped>

    .s-product {
        display: flex;
        flex-direction: column;
    }

</style>

