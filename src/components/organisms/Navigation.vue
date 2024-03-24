<template>
    
    <BasicLayoutVue :theme="`blue`">
        <div class="navigation">
            <div class="navigation__sub-menu__button-box"></div>
            <div class="navigation__sub-menu__button-box">
                <span class="navigation__sub-menu__title">Recruitment</span>
                <div class="navigation__sub-menu__button-box"></div>
            </div>
            <div class="navigation__sub-menu__button-box">
                <span class="navigation__sub-menu__title">Oraganization</span>
                <div class="navigation__sub-menu__button-box"></div>
            </div>
        </div>
    </BasicLayoutVue>

</template>

<script setup lang="ts">
import BasicLayoutVue from "@components/atoms/layout/BasicLayout.vue";
</script>

<style lang="scss" scoped>

    .navigation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        gap: 40px;

        &__sub-menu {
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            justify-content: center;
            width: 100%;

            &__title {
                margin-bottom: 12px;
                font-family: 'SUITE-ragular';
                color: $color-white-000;

            }

            &__button-box {
                display: calc(100% - 24px);
            }
        }

    }

</style>