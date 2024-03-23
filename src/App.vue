

<template>

  부모컴포 
  <Evt @send-evt="parentEvt"/>

  {{ hoho }}

</template>


<script setup lang="ts">

import { ref } from 'vue';
import Evt from './Evt.vue';


// let tt = ref<string>()

const parentEvt = (evt: string):string => {
  console.log(evt)
  return evt;
}

const hoho = ref(parentEvt());

console.log('hoho??', hoho.value)

</script>


<style scoped>

</style>
