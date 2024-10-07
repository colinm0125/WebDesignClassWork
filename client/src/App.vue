<script setup lang="ts">
//setup indicates that we are using the composition API**
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>
<style scoped>
body {
  background-color: whitesmoke;
}
.container {
  margin-top: 20px;
  background-color: whitesmoke;
  box-shadow: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
  min-height: 100vh;
}
</style>
