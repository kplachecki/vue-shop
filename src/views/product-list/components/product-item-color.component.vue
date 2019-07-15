<template>
    <div class="s-product-item-color">

        <div v-for="(color, index) in product.color" 
             :key="index"
             class="container">

            <input type="radio"
                    :name="'radio' + product.id"
                    class="s-product-item-color__input"
                    :id="color + product.id"
                    :value="color.trim()"
                    @click="colorPicked">

            <label class="s-product-item-color__label"
                    :style="{ backgroundColor: color.toLowerCase().replace(' ', '') }"
                    :for="color + product.id">
                    &nbsp;
            </label>

        </div>

    </div>
</template>

<script>
export default {
    name: 'sProductItemColor',
    props: ['product'],

    methods: {
        colorPicked() {
            let productDetails = {
                id: this.product.id,
                pickedColor: event.target.value
            }
            this.$store.commit('colorPicked', productDetails)
        }
    }

}
</script>

<style lang="scss" scoped>

.s-product-item-color {

    display: flex;
    justify-content: space-evenly;

        &__input {
            display: none;

            &:checked + label {
                opacity: 1
            }
        }
        
        &__label {

            display: flex;
            border: .1rem solid #000;
            width: 100%;
            border-radius: 1rem 0;
            opacity: .4;
            cursor: pointer;
            transition: opacity .3s;

            &:hover {
                opacity: 1

            }         
        }
}

.container {
    display: flex;
    width: 2rem;

}

</style>
