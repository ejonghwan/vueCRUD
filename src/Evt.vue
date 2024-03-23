<template>
    
    <button @click="evt">부모로 보내기</button>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const data = ref<string>('자식 컴포 데이터')



const emit = defineEmits([ 'send-evt' ])
const evt = ():void => {
    return emit('send-evt', data.value);
}



</script>


<style lang="scss" scoped>
    
</style>