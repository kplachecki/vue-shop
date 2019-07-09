import sMain from './containers/sMain.vue'
import sProducts from './components/sProducts/sProducts'
const sProduct = () => import("./components/sProducts/sProduct")
import sSidebar from "./components/sSidebar"
const sCart = () => import("./components/sCart/sCart")
const sCheckout = () => import("./components/sCheckout/sCheckout")


export const routes = [
  {
    path: "/products",
    components: {
      default: sMain,
      sSidebar: sSidebar,
      sCart: sCart
    },
    children: [
        {
          path: "",
          component: sProducts,
          name: "sProducts",   
        },
              
        {
            path: "product/:id",
            component: sProduct,
            name: "sProduct"
        }
      ]
  },

  {
    path: "/checkout",
    components: {
        default: sMain
    },
    children: [
        {
            path: "/checkout",
            component: sCheckout,
            name: "sCheckout"
        }
    ]
  },

  { path: "*", redirect: "/products" }
];
