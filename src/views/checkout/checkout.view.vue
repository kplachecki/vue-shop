<template>
    <div class="s-checkout">

        <div class="s-checkout__list">
            <div class="list__header">

                <span>Product Name</span>
                <span>Color</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total Price</span>

            </div>

            <hr style="width: 100%"/>
                    
            <div class="list__item"
                v-for="(product, index) in this.$store.state.cart" 
                :key="index">

                <router-link :to="{ name: 'sProductDetail', params: { id: product.id } }" 
                            tag="div">

                    <span class="item__name">{{ `${product.brand} ${product.model}` }}</span>

                </router-link>

                <span> {{product.pickedColor }} </span>

                <input  type="number"   
                        :value="product.ordered" 
                        min="0"
                        :max="product.quantity"
                        @change="checkoutQtChange(product)"
                        required>

                <span>{{ product.price | moneyFormat }}</span>
                <span>{{ product.price * product.ordered | moneyFormat}}</span>
                        

            </div>
        </div>  
        
            <hr style="width: 100%"/>

            <div class="s-checkout__total">

                <button @click="placeOrder" 
                        class="s-button"
                        :class="{ 'disabled-button': this.$store.state.cart.length <= 0 }"
                        :disabled="this.$store.state.cart.length <= 0">    

                        Place Order
                        
                </button>
                <span class="total__message"> Total to pay: </span>
                <span class="total__price">{{ totalToPay | moneyFormat}} </span>

            </div>
          

    </div>
</template>

<script>
import { mapGetters } from'vuex';

export default {
    name: 'sCheckout',

    computed: {
        ...mapGetters(['totalToPay'])
    },
    methods: {

        checkoutQtChange(product){

            if(Number(event.target.value) <= product.quantity){
                let productDetails = {
                id: product.id,
                newOrderedQt: Number(event.target.value)
            }
            this.$store.commit('checkoutQtChange', productDetails)
            } else return
        },

        placeOrder(){
            this.$store.commit('placeOrder')
            this.$router.push('/products')
        }


    }
    
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
@import "@/styles.scss";

.s-checkout {

    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;

        &__list {
            display: flex;
            overflow-y: auto;
            overflow-x: hidden;
            flex-direction: column;
        
            .list { 

                &__header {
    
                    display: grid;
                    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
                }

                &__item {
    
                    display: grid;
                    align-items: center;
                    grid-template-columns: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
                    margin: .5rem 0 1rem;
                    height: 3.5rem;
                }

                &__item:nth-child(even) {  
                    background-color: rgba(64, 169, 255, 0.2);
                }
            }
        }

        

        &__total {

            display: grid;
            align-items: center;
            grid-template-columns: minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
            margin: .5rem 0 1rem;
            height: 3.5rem;
        }

}

.item {

    &__name {

        cursor: pointer;

    }
}

.total {

    &__price {
        grid-column: 4;
        font-weight: bold;
    }

    &__message {
        grid-column: 3;
    }
        
}

</style>
