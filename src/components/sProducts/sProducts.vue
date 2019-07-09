<template>

    <div class="s-products">
        <div class="s-products__list-header">

            <span>Product Name</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Actions</span>

        </div>

        <hr style="width: 100%"/>
                
        <div class="s-products__item"
            v-for="(product, index) in this.$store.state.products" 
            :key="index">

            <router-link :to="{ name: 'sProduct', params: { id: product.id } }" 
                         tag="div">

                <span class="item__name">{{ `${product.brand} ${product.model}` }}</span>

            </router-link>

            <span>{{ product.qt }}</span>
            <span>{{ product.price }}$</span>
            <s-actions :product="product"></s-actions>
                    

        </div>
    </div>

</template>

<script>
import products from "@/products.json"
import sActions from "@/components/sActions/sActions"

export default {

    name: 'sProducts',
    components: {
                sActions
        }
                
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.s-products {

    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;

        &__list-header {
  
            display: grid;
            grid-template-columns: minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);

        }

        &__item {
  
            display: grid;
            align-items: center;
            grid-template-columns: minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
            margin: .5rem 0 1rem;
            height: 3.5rem;

        }

        &__item:nth-child(even) {
               
            background-color: rgba(64, 169, 255, 0.2);
        }

}

.item {

    &__name {

        cursor: pointer;

    }
}    
</style>
