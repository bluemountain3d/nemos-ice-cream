<script setup>
import products from '/src/components/Products/products.js';
</script>

<template>
    <article v-for="product in products" :key="product.id">
      <img :src="product.img.src" :alt="product.img.alt" :loading="product.img.loading" :width="product.img.width" :height="product.img.height">
      <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.flavor }}</p>
      </div>
    </article>
</template>

<style scoped lang="scss"></style>
