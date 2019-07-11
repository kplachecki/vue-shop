<template>
    <router-link :to="'/products'" 
                     tag="div"
                     class="s-navbar-item-logo">

            <img src="@/assets/logo.png" alt="logo" height="100%">

    </router-link>

  
</template>

<script>
export default {
    name: 'sNavbarItemLogo'
}
</script>


<style lang="scss" scoped>
@import "@/variables.scss";

.s-navbar-item-logo {
    display: flex;
    width: 15vw;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: $secondary-color;
    }
}

</style>
