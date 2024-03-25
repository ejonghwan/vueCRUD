<script setup lang="ts">

import List from './test/List.vue'

</script>

<template>

  <List />
  <RouterView />

  

</template>

<style>
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  width: 100%; 
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
