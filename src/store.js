import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],

    cartVisible: false
  },

  getters: {

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
        if(foundProduct.ordered < cartProduct.qt){
            foundProduct.ordered += 1;

        } else return

      } else {
        state.cart.push(cartProduct);
      }
    },

    removeFromCart: (state, product) => {
      state.cart = state.cart.filter(el => el.id !== product.id)
    },

    qtChanged: (state, actionDetail) => {

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
              productEl.qt = productEl.qt - cartEl.ordered
          }
          state.cart = [];
        })
      })
    },

    getData: state => {
      const token = '4d6b2c5e91d9419c84a5d82107a6c35010b7556c12933757'
      const brands = ['sony', 'samsung']
      let counter = 0;

      brands.forEach(brand => {
        axios.
        get(`https://fonoapi.freshpixl.com/v1/getlatest?token=${token}&brand=${brand}&limit=10`)
        .then(res => {
          res.data.forEach(el => {
            counter += 1;
            let colorArr = el.colors.split(',')
            colorArr = colorArr.map(col => col.trim())

            let newSmartphone = {
              brand: el.Brand,
              model: el.DeviceName,
              price: Number((Math.random() * (10000 - 500) + 500).toFixed(2)),
              qt: Math.floor(Math.random() * 20),
              id: counter,
              color: colorArr,
              pickedColor: null
            }
            state.products.push(newSmartphone)
          })
        })
        .catch(err => console.log(err))
      })
      
    }

  }
});
