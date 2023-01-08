<script setup lang="ts">
import VRenderTable from './components/VRenderTable/index.vue'

const column = [
  { label: 'test1', prop: 'test1' }
]

const tableData = [
  { test1: 1 }
]
</script>

<template>
  <VRenderTable :columns="column" :data="tableData" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
