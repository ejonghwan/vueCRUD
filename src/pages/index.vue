
<template>

    <div class="page">
        <BasicLayoutVue>    
            <div class="page__container">
                <section class="page__container__navigation">
                    <Navigation />
                </section>
                <section class="page__container__notice"></section>
            </div>
        </BasicLayoutVue>
    </div>

</template>


<script setup lang="ts">


import BasicLayoutVue from "@components/atoms/layout/BasicLayout.vue";
import Navigation from "../components/organisms/Navigation.vue";

</script>


<style lang="scss" scoped>

.page {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 100%;
    height: 100%;
    background-color: $color-black-900;
    // color: $color-white-000;

    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60vw;
        height: 61vh;

        &__navigation {
            width: 20%;
            height: 100%;
        }

        &__notice {
            width: 80%;
            height: 100%;
        }
    }
}

</style>
