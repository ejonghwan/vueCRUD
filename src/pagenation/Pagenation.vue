<template>
    <div class="pagenation">
        <button class="pagenation__button" @click="moveToPrev">&lt;</button>
        <button class="pagenation__button" v-for="(index) in pages[step]" :key="index" @click="movePage(index)" :class="{ active: index === page }">{{ index }}</button>
        <button class="pagenation__button" @click="moveToNext">&gt;</button>
    </div>
</template>

<script setup lang="ts">
import { log } from "console";
import { computed, toRefs, ref } from "vue";

    interface Props {
        totalPage: number;
    }

    const props = defineProps<Props>();
    const { totalPage } = toRefs(props);
    const step = ref<number>(0);
    const pages = computed(() => { // computed에 넣은 이유는 한번만 계산하기 위해, computed는 리턴값이 항시 있음
        const newArr: number[] = new Array();
        
        for(let i = 1; i <= totalPage.value; i++) {
            newArr.push(i);
        };

        console.log('????', totalPage.value, newArr)

        const length = newArr.length;
        const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1: 0)
        const res = new Array();

        for(let i = 0; i <= divide; i++) {
            res.push(newArr.splice(0, 10))
        }

        return res;
    })


    const page = ref<number>(1);
    const emit = defineEmits(['sendPage'])

    const movePage = (pageIndex: number) => {
        emit('sendPage', pageIndex);
        page.value = pageIndex
    }

    const moveToPrev = () => {
        if(page.value <= 1) return;
        else page.value--;

        emit('sendPage', page.value);
    }

    const moveToNext = () => {
        if(page.value < pages.value.length) page.value++;
        else return;

        emit('sendPage', page.value);
    }
    

</script>

<style scoped lang="scss">
    .pagenation {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;
        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            padding: 3px 7px;
            color: red;
            font-size: 16px;
            font-weight: 700;
            line-height: 16px;
            background-color: transparent;
            border: none;
            outline: none;

            &:hover {
                background-color: #aaa;
            }
            &.active {
                background-color: #333;
                color: white;
            }
        }
    }
</style>