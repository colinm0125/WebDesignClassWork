<script lang="ts">
import type { Product } from '@/models/products'

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="box">
    <div class="box-image">
      <img :src="product.thumbnail" :alt="product.name" />
    </div>
    <div class="box-content">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  font-weight: bold;
}
</style>
