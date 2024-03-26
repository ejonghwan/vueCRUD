import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue'
import axios from 'axios'


export const useUserStore = defineStore('user', () => {
//   let user = reactive<Object>([])
  let user = ref<Object>([])
  let pageNum = ref<number>(1)
  const isLoading = ref<boolean>(false)

  

  const getUser = async () => {
    try {
        isLoading.value = true;
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum.value}&_limit=10`)
        // console.log('res??????????????????', res)
        const data = res.data; 
        // user.value = data;
        user.value = [...user.value, ...data];
        pageNum.value++
        console.log('u???', user)
    } catch(e) {
        console.error(e)
    } finally {
        isLoading.value = false;
    }
  }

  const abc = computed(() => {
    return ''
  })
  
//   function increment():void {
//     count.value++
//   }


  return { user, isLoading, getUser }
})