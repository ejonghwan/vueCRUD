<template>
    


    <h3>반응성 테스트 1 - ref 일반 변수로 하면 반응 x </h3>
    <div>count: {{ count }}</div>
    <button type="button" @click="handleInc">inc</button>
    <button type="button" @click="handleDec">dec</button>


    <h3>반응성 테스트2 - reative 불변성 테스트 </h3>
    <strong>일반 객체 - 클릭 해도 변경 x </strong>
    <div v-for="test in dd" :key="test.name" @click="test.age++" style="cursor: pointer; border: 1px solid #ddd;">{{ test.age }}</div>

    <strong>반응성 객체 - 클릭 시 변경 됨</strong>
    <div v-for="test in react" :key="test.name" @click="test.age++" style="cursor: pointer; border: 1px solid #ddd;">{{ test.age }}</div>



    <div v-for="use in getDD" :key="use.id">name - {{ use.name }}</div>
    <!-- <div v-for="use in getDD" :key="use.id">phone - {{ use.phone }}</div> -->
    <!-- <div v-for="use in getDD" :key="use.id">website - {{ use.website }}</div> -->

    <h1>부모컴포</h1>
    <ListChild v-for="user in dd" :key="user.name" :data="user" @send-evt="fn"/>
    <br /><br />
    <!-- <ListChild /> -->


</template>

<script setup lang="ts">
    import { ref, onBeforeMount, reactive } from 'vue';
    import ListChild from './ListChild.vue';
    import axios from 'axios'

    // console.log(ListChild) //필수값이 뭔지 찍힘

  
    const dd = [
        { id: 0, name: 'a1', age: 21, info: { address: 'busan1', zz: 'hoho' } },
        { id: 1, name: 'a2', age: 22, info: { address: 'busan2', zz: 'hoho' } },
        { id: 2, name: 'a3', age: 23, info: { address: 'busan3', zz: 'hoho' } },
        { id: 3, name: 'a4', age: 24, info: { address: 'busan4', zz: 'hoho' } },
        { id: 4, name: 'a5', age: 25, info: { address: 'busan5', zz: 'hoho' } },
        { id: 5, name: 'a6', age: 26, info: { address: 'busan6', zz: 'hoho' } },
        { id: 6, name: 'a7', age: 27, info: { address: 'busan7', zz: 'hoho' } },
        { id: 7, name: 'a8', age: 28, info: { address: 'busan8', zz: 'hoho' } },
    ]


    
    // const menu = [
    //     { icon: 'Dashboard', label: 'Dashboard' },
    //     { icon: 'Index', label: 'Index' },
    //     { icon: 'Calender', label: 'Calender' },
    //     { icon: 'Jobs', label: 'Jobs' },
    //     { icon: 'Reference', label: 'Reference' },
    //     { icon: 'Document', label: 'Document' },
    //     { icon: 'CareerSite', label: 'CareerSite' },
    //     { icon: 'Employee', label: 'Employee' },
    //     { icon: 'Structure', label: 'Structure' },
    //     { icon: 'Settings', label: 'Settings' },
    // ]





    





    // 반응성 테스트 1
    // const count = ref(0)
    let count = 0; // 반응성 없는걸로 하면 업데이트가 안됨. 그냥 useRef + useState 합쳐져있는거네 

    function handleInc() {
        // count.value++
        count++
    }
    function handleDec() {
        // count.value--
        count--
    }

    // 반응성 테스트..불변성과 깊은복사 옅은복사 테스트.  reactive / ref.. ref는 수정가능하지만 리액티브는 데이터 들어오면 수정불가
    const react = reactive([
        { id: 0, name: 'a1', age: 21, info: { address: 'busan1', zz: 'hoho' } },
        { id: 1, name: 'a2', age: 22, info: { address: 'busan2', zz: 'hoho' } },
        { id: 2, name: 'a3', age: 23, info: { address: 'busan3', zz: 'hoho' } },
        { id: 3, name: 'a4', age: 24, info: { address: 'busan4', zz: 'hoho' } },
        { id: 4, name: 'a5', age: 25, info: { address: 'busan5', zz: 'hoho' } },
        { id: 5, name: 'a6', age: 26, info: { address: 'busan6', zz: 'hoho' } },
        { id: 6, name: 'a7', age: 27, info: { address: 'busan7', zz: 'hoho' } },
        { id: 7, name: 'a8', age: 28, info: { address: 'busan8', zz: 'hoho' } },
    ])


    const getDD:object = ref([])
    async function getData():Promise<object> {
        const pjson = await axios.get('https://jsonplaceholder.typicode.com/users/')
        const da = pjson.data;

        console.log(getDD)

        getDD.value = da;
        return da;
    } 

    onBeforeMount(():void => {
        getData()
    })



    // emit 
    const childDD = reactive([])
    const fn = (a:object) => {
        console.log('a?', a[0].name)
        // 이거 테스트 
        // childDD = a;
        // console.log(childDD)
    }

</script>


<style lang="scss" scoped></style>