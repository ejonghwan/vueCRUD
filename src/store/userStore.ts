import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue'
import axios from 'axios'


export const useUserStore = defineStore('post', () => {
//   let user = reactive<Object>([])
  let post = ref<Object>([])
  let pageNum = ref<number>(1)
  const isLoading = ref<boolean>(false)

  const allPost = async () => {
    try {
        isLoading.value = true;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

        const data = res.data; 
        post.value = [...post.value, ...data];
        pageNum.value++
        console.log('u???', post)

    } catch(e) {
        console.error(e)
    } finally {
        isLoading.value = false;
    }
  }

  const getPost = async () => {
    try {
        isLoading.value = true;
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum.value}&_limit=10`)

        const data = res.data; 
        post.value = [...post.value, ...data];
        pageNum.value++
        console.log('u???', post)

    } catch(e) {
        console.error(e)
    } finally {
        isLoading.value = false;
    }
  }
  
  // 의문점 1. 반응성 유지하는 데이터는 화면에서도 업데이트가 필요한데 스토어에서 관리 안하는가 ? 
  // 리액트도 화면에서 관리해서 리덕스와 리듀서로 넘겨주는 방식이었음
  const updatePost = async data => {
    const {id, userId, title, body} = data;
    
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', 
      { id, userId, title, body },
      { headers: { "Content-Type": "application/json", }, withCredentials: true, })
      const data = res.data
      console.log('dd?', res.data, data)


    } catch(e) {
      console.error(e)
    } finally {
      console.log('update finally')
    }
  }
  

  const abc = computed(() => {
    return ''
  })
  
//   function increment():void {
//     count.value++
//   }


  return { post, pageNum, isLoading, getPost, updatePost, allPost }
})