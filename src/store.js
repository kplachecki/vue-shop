import Vue from "vue";
import Vuex from "vuex";
import mockData from "./products.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [...mockData.products],
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

    showCart: (state, visible) => {
      state.cartVisible = visible;
    }

  }
});
