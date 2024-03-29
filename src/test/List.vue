<template>

    <!-- <h3>스토어 테스트 state 함수</h3> 
    <div>a??? {{ testState }}</div>
    <div>b??? {{ testState2 }}</div>
    <button type="button" @click="stateAdd">store change</button> -->

    <!-- <br /><br /> -->


    <h3>v-show v-if test</h3> 
    <div>
        boolean?
        <span v-show="ishoho">true</span>
        <span v-show="!ishoho">false</span>
    </div>
    <div v-if="ishoho">is hoho 참</div>
    <div v-else>is hoho 거짓</div>
    <button type="button" @click="hohoToggle">toggle</button>

    <br /><br />
    
    <h3>v-show v-if test</h3> 
    <div> nnn? {{ nnn }}</div>
    <div v-if="nnn === 5">5임</div>
    <div v-else-if="nnn === 6">6임</div>
    <div v-else-if="nnn === 7">7임</div>
    <div v-else>5,6,7 다 아님</div>
    <button type="button" @click="nnninc">dddinc</button>
    <button type="button" @click="nnndec">ddddec</button>

    <br /><br />

    <h3>스토어 테스트 - count</h3>    
    <div>name? {{ name }}</div>
    <div>count? {{ count }}</div>
    <div>doubleCount? {{ doubleCount }}</div>
    <button type="button" @click="inc">count++</button>
    <button type="button" @click="resetNumber">reset</button>

    <br /><br />

    <h3>스토어 테스트 - post</h3>    

    <div>
        title - <input type="text" name="title" :value="objs.title" @input="handleChange"/>
        content - <input type="text" name="body" :value="objs.body" @input="handleChange"/>
        {{ objs.title }}{{ objs.body }}
    </div>

    <div class="loadingbar" :class="{ active: isLoading }">로딩중!!!!!!!!!!</div>
    <button type="button" @click="allppp">all post 불러오기</button>
    <button type="button" @click="gtuser">post 불러오기</button>
    <button type="button" @click="postupd">post 업데이트</button>
    <ul>
        <li v-for="u in post" :key="u.title">
            <div>{{ u.id }} - {{ u.title }}</div>
        </li>
    </ul>
    <br /><br />

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




    <!-- 팁!!! -->

    <!-- class 조건부 렌더링  -->
    <!-- <div v-if="data.userSkill === 'senior'" class="list_item__chip senior">{{ data.userSkill }}</div> -->
    <!-- <div v-if="data.userSkill === 'junior'" class="list_item__chip junior">{{ data.userSkill }}</div> -->

    <!-- style 조건부 렌더링 %를 이렇게 처리하면 개편할듯-->
    <!-- <div v-if="data > 80" class="gauge" :style="{ width: data + '%' }">{{ data }}%</div> -->
    <!-- <div v-else class="gauge" :style="{ width: data + '%', backgroundColor: 'red' }">{{ data }}%</div> -->



    <!-- var은 ref -->
    <!-- obj는 reactive -->
    <!-- fn은 computed -->
    <!-- dom은 ref 
        <p ref="pTag">
        const pTag = ref() 
    -->

    <!-- watch 페이지네이션 강의 다시 보기 -->

    <!-- 하나의 watch로 스토어 하나 감시 가능 -->
    <!-- watch(
        pinia.state,
        (state) => {
            // 변경될 때마다 전체 상태를 로컬 스토리지에 유지
            localStorage.setItem('piniaState', JSON.stringify(state))
        },
        { deep: true }
    ) -->


</template>

<script setup lang="ts">
    import { ref, onBeforeMount, reactive, computed, onUpdated, onMounted } from 'vue';
    import ListChild from './ListChild.vue';
    import axios from 'axios'

    // console.log(ListChild) //필수값이 뭔지 찍힘

    // v-show v-if test 
    const ishoho = ref<boolean>(false)

    function hohoToggle() {
        ishoho.value = !ishoho.value
        console.log(ishoho.value)
    }
    
    const nnn = ref<number>(0)
    function nnninc() {
        nnn.value++
    }
    function nnndec() {
        nnn.value--
    }

    


    // ######################################################### 피니아 오브젝트형 
    import { useObjStore } from '../store/objStore.ts'
    const objStore = useObjStore();
    // const { userList, user } = storeToRefs(objStore)
    
    console.log('uu?', objStore.userList)


    // ########################################################################  피니아 스토어 사용
    import { useCounterStore } from '../store/testStore'
    import { storeToRefs } from 'pinia'
    const store = useCounterStore();
    // ❌ 반응성을 깨뜨리기 때문에 작동하지 않습니다.
    // `props`에서 디스트럭처링하는 것과 동일합니다.
    // const { name, doubleCount, count } = store;
    // console.log('name???', name) // 언제나 "Eduardo"
    // console.log('dbcount???', doubleCount) // 언제나 0
    
    const { name, doubleCount, count, increment, reset } = storeToRefs(store) // 반응성 유지하려면 이렇게
    
    
    function inc() {
        store.increment()
        console.log(count)
    }

    function resetNumber() {
        store.reset();
    }

    
    
    // ########################################################################  피니아 스토어 데이터 사용 
    import { useUserStore } from '../store/userStore'
    const userStore = useUserStore();
    const { isLoading, post, pageNum } = storeToRefs(userStore)
    const { getPost, updatePost, allPost } = userStore; 
    

    console.log('?????', pageNum.value)

    function allppp() {
        allPost()
    }

    function gtuser():void {
        getPost()
        // console.log('get user?', isLoading, post)
    }

    interface ReqData {
        id: number;
        userId: string;
        title: string;
        body: string;
    }
    let objs = ref<ReqData>({
        id: 3,
        userId: 'hoho',
        title: '',
        body: '',
    })
    function handleChange(e) {
        objs.value = {
            ...objs.value,
            [e.target.name]: e.target.value,
        }
        console.log(objs.value)
    }

    function postupd() {
        updatePost({ 
            id: objs.value.id, 
            userId: objs.value.userId, 
            title: objs.value.title, 
            body: objs.value.body 
        })
    }


    // onMounted(() => {
    //     const s = state();
    //     console.log('mounted??', s)
    // })

    // function stateAdd() {
    //     // const s = state();
    //     // s.testState++;
    //     // s.testState2 = 'change state'
    //     // console.log('s??', s)
    //     // return { a: s.testState, b:  s.testState2 }

       
    //     userStore.$patch(state => { 
    //         // testState: userStore.testState++,
    //         // testState2: '변경 됐음'
    //         console.log('state?', state)
    //     })
    //     // console.log('피니아 상태 ? ', userStore)
    // }
    // // const { a, b } = stateAdd()

    

    // setTimeout(() => {
    //     store.increment()
    // }, 1000)

    // ✅ 이것은 반응적일 것입니다
    // 💡 또한 `store.doubleCount`로 직접 사용할 수도 있습니다.
    // const doubleValue = computed(() => store.doubleCount)


    interface ListDDINfo {
        address: string;
        zz?: string;
    }
    interface ListDD {
        id: number, 
        name: string, 
        age: number, 
        info: ListDDINfo
    }
    const dd: ListDD[] = [
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
    // let count = 0; // 반응성 없는걸로 하면 업데이트가 안됨. 그냥 useRef + useState 합쳐져있는거네 

    // function handleInc() {
    //     // count.value++
    //     count++
    // }
    // function handleDec() {
    //     // count.value--
    //     count--
    // }

    // 반응성 테스트..불변성과 깊은복사 옅은복사 테스트.  reactive / ref.. ref는 수정가능하지만 리액티브는 데이터 들어오면 수정불가
    const react = reactive<ListDD[]>([
        { id: 0, name: 'a1', age: 21, info: { address: 'busan1', zz: 'hoho' } },
        { id: 1, name: 'a2', age: 22, info: { address: 'busan2', zz: 'hoho' } },
        { id: 2, name: 'a3', age: 23, info: { address: 'busan3', zz: 'hoho' } },
        { id: 3, name: 'a4', age: 24, info: { address: 'busan4', zz: 'hoho' } },
        { id: 4, name: 'a5', age: 25, info: { address: 'busan5', zz: 'hoho' } },
        { id: 5, name: 'a6', age: 26, info: { address: 'busan6', zz: 'hoho' } },
        { id: 6, name: 'a7', age: 27, info: { address: 'busan7', zz: 'hoho' } },
        { id: 7, name: 'a8', age: 28, info: { address: 'busan8', zz: 'hoho' } },
    ])


    const getDD = ref<object[]>([])
    async function getData():Promise<object> {
        const pjson = await axios.get('https://jsonplaceholder.typicode.com/users/')
        const da = pjson.data;

        // console.log(getDD)

        getDD.value = da;
        return da;
    } 

    onBeforeMount(():void => {
        getData()
    })



    // emit 
    const childDD = reactive([])
    const fn = (a:object) => {
        // console.log('a?', a[0].name)
        // 이거 테스트 
        // childDD = a;
        // console.log(childDD)
    }




</script>


<style lang="scss" scoped>

    .loadingbar {border: 1px solid red; display: none;}
    .loadingbar.active {background-color: red; color: #fff; display: block}

</style>