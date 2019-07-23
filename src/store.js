import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],

    filters: {
      brandList: [],
      price: {
        from: null,
        to: null,
      },
      search: null,
    },

    cartVisible: false,
    filterEnabled: false
  },

  getters: {
    
    filteredProducts: state => {
      const brandList = state.filters.brandList;
      const priceFilter = state.filters.price;
      const modelName = state.filters.search

      return state.products
        .filter((p) => brandList.length > 0 ? brandList.includes(p.brand) : true)
        .filter((p) => {
          if(!priceFilter.from && !priceFilter.to){
            return true
          }else if(!priceFilter.from){
            return p.price <= Number(priceFilter.to)

          }else if(!priceFilter.to){
            return p.price >= Number(priceFilter.from)

          }else{
            return p.price >= Number(priceFilter.from) 
            && p.price <= Number(priceFilter.to)
          }
        }).filter((p) => modelName ? (p.model.toLowerCase()).includes(modelName.toLowerCase()) : true)
        
    },

    productDetails: state => id => {
      return state.products.find(el => el.id === id);
    },

    cartCounter: state => {
      let totalItems = 0;

      state.cart.forEach(el => {
        totalItems += el.ordered
    
      })
      return totalItems
    },

    itemCounter: state => id => {
      return state.cart.find(el => el.id === id);
    },

    totalToPay: state => {
      let totalPrice = 0;

      state.cart.forEach(el => {
        let unitPrice = (el.ordered * el.price);
        totalPrice += unitPrice
    
      })
      return totalPrice
    }
  },

  mutations: {
    addToCart: (state, product) => {

      const cartProduct = { 
        ...product,
        ordered: 1
      };

      const foundProduct = state.cart.find(el => el.id === product.id);

      if (foundProduct) {
        if(foundProduct.ordered < cartProduct.quantity){
            foundProduct.ordered += 1;

        } else return

      } else {
        state.cart.push(cartProduct);
      }
    },

    removeFromCart: (state, product) => {
      state.cart = state.cart.filter(el => el.id !== product.id)
    },

    quantityChanged: (state, actionDetail) => {

      const foundProduct = state.cart.find(el => el.id === actionDetail.id);
      actionDetail.method === 'increase' ? foundProduct.ordered += 1 : foundProduct.ordered -= 1;
    },

    checkoutQtChange: (state, productDetails) => {
      const foundProduct = state.cart.find(el => el.id === productDetails.id);
      foundProduct.ordered = productDetails.newOrderedQt
      
    },

    colorPicked: (state, productDetails) => {
      const foundProduct = state.products.find(el => el.id === productDetails.id);
      foundProduct.pickedColor = productDetails.pickedColor

    },

    showCart: (state, visible) => {
      state.cartVisible = visible;
    },

    placeOrder: state => {
      state.cart.forEach(cartEl => {
        state.products.forEach(productEl => {
          if(cartEl.id === productEl.id){
              productEl.quantity = productEl.quantity - cartEl.ordered
              productEl.pickedColor = null
          }
          state.cart = [];
        })
      })
    },

    getData: state => {
      const token = '4d6b2c5e91d9419c84a5d82107a6c35010b7556c12933757'
      const brands = ['sony', 'samsung', 'xiaomi']
      let counter = 0;

      brands.forEach(brand => {
        axios.
        get(`https://fonoapi.freshpixl.com/v1/getlatest?token=${token}&brand=${brand}&limit=10`)
        .then(res => {
          res.data.forEach(el => {
            counter += 1;
            let colorArr = el.colors.split(',')
            colorArr = colorArr.map(col => col.trim())

            let price = 0

            if(el.price){
              price = Number(el.price.replace(/\D+/g,'')) * 4.27
            } else price = Number((Math.random() * (10000 - 500) + 500).toFixed(2))

            let newSmartphone = {
              brand: el.Brand,
              model: el.DeviceName.replace(`${el.Brand} `, ''),
              price: price,
              quantity: Math.floor(Math.random() * 20),
              id: counter,
              color: colorArr,
              pickedColor: null
            }
            state.products.push(newSmartphone)
          })
        }).catch(err => console.log(err))
      })

    },

    sortData: (state, sortDetails) => {

      if(sortDetails.sortType === 'increase'){
        state.products.sort((a, b) => (a[sortDetails.sortBy] < b[sortDetails.sortBy]) ? 1 
                                    : ((b[sortDetails.sortBy] < a[sortDetails.sortBy]) ? -1 : 0))
      }else {
        state.products.sort((a, b) => (a[sortDetails.sortBy] > b[sortDetails.sortBy]) ? 1 
                                    : ((b[sortDetails.sortBy] > a[sortDetails.sortBy]) ? -1 : 0))
      }
    },

    filterData: (state, filteredBrands) => {
      state.filters.brandList = filteredBrands
    },

    filterPrice: (state, priceBetween) => {
      state.filters.price.from = priceBetween.from 
      state.filters.price.to = priceBetween.to

    },

    filterModel: (state, modelName) => {
      state.filters.search = modelName

    }
}
});
