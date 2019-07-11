<template>
    <div class="s-main">

        <div class="s-main__container">
            <router-view ></router-view>
            <router-view name='sCheckout'></router-view>
            <router-view name="sProducts"></router-view>
        </div>
    </div>
</template>

<script>

export default {

    name: 'sMain'

                
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.s-main {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 85vw;
    box-sizing: border-box;
    
    &__container {

        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 90%;
        background-color: #fff;
        border-radius: .4rem;
        box-shadow: 0 0 0.3rem $secondary-color;
        overflow: auto;
    }
}
</style>
