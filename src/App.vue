<template>
  <div class="app">

    <s-navbar></s-navbar>
    

    <div class="mainView">
      
      <div  class="mainView__backdrop" 
            v-if="this.$store.state.cartVisible"
            @click="showCart"></div>

      <router-view name='sCart' v-if="this.$store.state.cartVisible"></router-view>
      <router-view name='sSidebar'></router-view>
      <router-view ></router-view>

    </div>
    
  </div>
</template>

<script>
import sNavbar from "./components/sNavbar.vue";


export default {
  name: "app",

  components: {
    sNavbar

  },

  methods: {
      showCart() {
        this.$store.commit("showCart")
      }
    }

};
</script>

<style lang="scss">
@import "./styles.scss";
@import "./variables.scss";

.app {
  display: flex;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  background-color: $app-bg-color;

}

.mainView {
  display: flex;
  flex: 1;
  padding-top: 6.4rem;

    &__backdrop {
      width: 100%;
      height: 100%;
      z-index: 5;
      position: fixed;
      background-color: rgba(0, 0, 0, .5 )
    }
}

</style>
