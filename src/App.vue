<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, 'Times New Roman', serif;
  background-color: #fdf8f2;
  color: #3b2a1a;
  line-height: 1.7;
}

#app {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
