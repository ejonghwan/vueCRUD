<template>
    
    <h1>자식컴포</h1>
    <!-- {{ data }} -->
    <div>name - {{ data.name }}</div>
    <div>age - {{ data.age }}</div>
    <div>address - {{ data.info.address }}</div>
    <div>zz - {{ data.info.zz }}</div>
    <button @click="handleInfoClick(data.id)">click</button>
    <!-- {{ data.name }} -->
</template>

<script setup lang="ts">
import { toRefs } from "vue";


    interface Info {
        address: string;
        zz?: string;
    }

    interface User {
        name: string;
        age: number;
        info: Info;
        id: number;
    }

    interface Props {
        data: User;
    }

    const props = defineProps<Props>()
    const { data } = toRefs(props)
    // console.log(props)



    function handleInfoClick(idx: number) {
        console.log('click?', idx)
    }



    // interface Button {
    //     icon: string;
    //     label: string;
    // }

    // interface Props {
    //     data: Button
    // }

    // const props = defineProps<Props>()
    // const { data } = toRefs(props)



</script>


<style lang="scss" scoped></style>