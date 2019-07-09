<template>
    <div class="s-sidebar">
        <ul class="s-sidebar__list">

            <li class="">
                Products
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import "@/variables.scss";

.s-sidebar {

    width: 15vw;
    box-sizing: border-box;
    border-right: 2px solid $primary-color;

    &__list {

        list-style: none;
        padding: 0;

    }
}
</style>
