import sMain from '@/components/main.vue'
import sProductList from '@/views/product-list/product-list.view.vue'
const sProductDetail = () => import("@/views/product-detail/product-detail.view.vue")
import sSidebar from "@/components/sidebar"
const sCheckout = () => import("@/views/checkout/checkout.view.vue")


export const routes = [
  {
    path: "/products",
    components: {
      default: sMain,
      sSidebar: sSidebar
    },
    children: [
        {
          path: "",
          component: sProductList,
          name: "sProductList",   
        },
              
        {
            path: "product/:id",
            component: sProductDetail,
            name: "sProductDetail"
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
