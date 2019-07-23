<template>
    <div class="s-sidebar">
        
        <div class="s-sidebar__list">
            <span>Products({{this.products.length}})</span>
                
                    <multiselect v-model="selectedBrands" 
                                 placeholder="Select brand"
                                 :options="brands" 
                                 :multiple="true"
                                 track-by="brandName" 
                                 :custom-label="customLabel"
                                 :show-labels="false"
                                 :close-on-select="false"
                                 :taggable="true"
                                 @input="filterList"
                                 >
                    </multiselect>

                    <div class="s-sidebar__list__input">
                        <label>Price:</label>
                        <input type="number" 
                               placeholder="from"
                               v-model="priceBetween.from">
                        <span>-</span>
                        <input type="number" 
                               placeholder="to"
                               v-model="priceBetween.to">
                    </div>

                    <button @click="filterPrice">Filter By Price</button>
                    <input v-model="modelSearch" type="text" placeholder="Search Model">


        </div>
            

        
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    name: 'sSidebar',
    data() {
        return {
            selectedBrands: null,
            priceBetween: {
                from: null,
                to: null
            },
        }
    },

    computed:{
        products() {
            return this.$store.getters.filteredProducts
        },

        brands() {
            const brands = []
            
            this.$store.state.products.forEach(el => {
                let foundItem = brands.find( item => item['brandName'] === el.brand)

                foundItem ? foundItem.counter ++ : brands.push({
                                                        brandName: el.brand,
                                                        counter: 1
                                                    })
    
            })
            return brands
        },
        modelSearch: {
            get () {
                return this.$store.state.filters.search
            },
            set (value) {
                this.$store.commit('filterModel', value)
            }
        }
    },
    methods: {

        customLabel ({brandName, counter}){
            return `${brandName}(${counter})`
        },

        filterList() {
            const newSelectedBrands = this.selectedBrands.map(el => el.brandName) 
            this.$store.commit('filterData', newSelectedBrands)
        },

        filterPrice() {
            this.$store.commit('filterPrice', this.priceBetween)
        }
    },
    components: {
        Multiselect
    }    
    
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
    @import "@/variables.scss";

.s-sidebar {

    width: 15vw;
    box-sizing: border-box;
    border-right: 2px solid $primary-color;
    display: flex;
    flex-direction: column;

    &__list {
        display: flex;
        flex-direction: column;

        &__input {
            display: flex;
            width: 100%;
            justify-content: space-evenly;

        & > input {
            width: 30%;
        }
        }

    }
    
}
</style>
