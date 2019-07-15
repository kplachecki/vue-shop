<template>
    <div class="s-product-list-header">

        <div class="s-product-list-header__item"
            v-for="(column, index) in this.list"
            :key="index">

            <span>{{ column.columnName }}</span>

            <i class="material-icons"
                @click="setSort('increase', column.columnName)"
                :class="{'disabled-icon': !column.sortType}"
                :style="{cursor: 'pointer !important', 
                        display: column.sortType === 'increase' ? 'none' : 'unset'}"
                v-if="column.sortType !== 'none'"        
                >
                    expand_less
            </i>

            <i class="material-icons"
                @click="setSort('decrease', column.columnName)"
                :style="{cursor: 'pointer !important'}"                
                v-if="column.sortType === 'increase'">
                    expand_more
            </i>

        </div>

    </div>
</template>

<script>
export default {
    name: 'sProductListHeader',
    data() {
        return {
            list: [
                {
                    columnName: 'Brand',
                    sortType: null
                },
                {
                    columnName: 'Model',
                    sortType: null
                },
                {
                    columnName: 'Color',
                    sortType: 'none'
                },
                {
                    columnName: 'Quantity',
                    sortType: null
                },
                {
                    columnName: 'Price',
                    sortType: null
                },
                {
                    columnName: 'Actions',
                    sortType: 'none'
                }
            ]  
        }
    },
    methods: {

        setSort(sortType, columnName){

            let sortDetails = {
                sortBy: columnName.toLowerCase(),
                sortType: sortType
            }

            this.$store.commit('sortData', sortDetails)

            this.list.forEach(el => {
                if(el.columnName === columnName){
                    el.sortType = sortType
                }else if(el.sortType !== 'none'){
                    el.sortType = null
                }
            })
    }
    },
    
    
}
</script>

<style lang="scss" scoped>
 @import "@/styles.scss";

.s-product-list-header {
  
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);

                &__item {

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
        }
        
.disabled-icon:hover {
    color: unset;
}        
</style>
