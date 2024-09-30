<script setup lang="ts"> //setup indicates that we are using the composition API**
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />

  </header>

  <RouterView />
</template>


