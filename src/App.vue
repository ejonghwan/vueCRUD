

<template>
  <div class="hoho">
    asdasd
  </div>
  <input type="text" ref="inp">
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>


<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue';

const inp = ref(null)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  document.querySelector('.hoho').style.border = '1px solid red';
  console.log('inp ref??', inp.value)
  console.log('onMounted')

})



onUpdated(() => {
  document.querySelector('.hoho').style.border = '1px solid blue';
  // console.log('onUpdated')
  alert('updated?')
})


onUnmounted(() => {
  document.querySelector('.hoho').style.border = '1px solid yellow';
  console.log('onUnmounted')
  alert('unmounted')
})


</script>


<style scoped>

</style>
