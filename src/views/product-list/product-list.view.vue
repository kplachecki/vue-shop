<template>

    <div class="s-product-list">

        <s-product-list-header :products='this.products'></s-product-list-header>

        <hr style="width: 100%"/>
                
        <div class="s-product-list__item"
            v-for="(product, index) in this.products" 
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

            <s-product-item-color :product="product"></s-product-item-color>

            <span>{{ product.quantity }}</span>
            <span>{{ product.price | moneyFormat }}</span>
            <s-actions :product="product"></s-actions>
                    

        </div>
    </div>

</template>

<script>
import sActions from "./components/product-item-action.component.vue"
import sProductItemColor from './components/product-item-color.component.vue'
import sProductListHeader from './components/product-list-header.component'

export default {

    name: 'sProductList',
    components: {
                sActions,
                sProductItemColor,
                sProductListHeader
    },
    computed: {
            products() {
               return this.$store.getters.filteredProducts
            }

    }              
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.s-product-list {

    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;

        &__item {
  
            display: grid;
            align-items: center;
            grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
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
