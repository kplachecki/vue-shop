<template>

    <div class="s-product-list">
        <div class="s-product-list__header">

            <span>Brand</span>
            <span>Model</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Actions</span>

        </div>

        <hr style="width: 100%"/>
                
        <div class="s-product-list__item"
            v-for="(product, index) in this.$store.state.products" 
            :key="index">

            <router-link class="item__name" 
                         :to="{ name: 'sProductDetail', params: { id: product.id } }" 
                         tag="span">
                {{product.brand}}
            </router-link>

            <router-link class="item__name" 
                         :to="{ name: 'sProductDetail', params: { id: product.id } }" 
                         tag="span">
                {{product.model}}
            </router-link>

            <span>{{ product.qt }}</span>
            <span>{{ product.price | moneyFormat }}</span>
            <s-actions :product="product"></s-actions>
                    

        </div>
    </div>

</template>

<script>
import sActions from "./components/product-item-action.component.vue"

export default {

    name: 'sProductList',
    components: {
                sActions
    },

                
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.s-product-list {

    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    

        &__header {
  
            display: grid;
            grid-template-columns: minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);

        }

        &__item {
  
            display: grid;
            align-items: center;
            grid-template-columns: minmax(0, 2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
            margin: .5rem 0 1rem;
            height: 3.5rem;

                &:nth-child(even) {
               
                    background-color: rgba(64, 169, 255, 0.2);
                }
        }



}

.item {

    &__name {

        cursor: pointer;

    }
}    
</style>
