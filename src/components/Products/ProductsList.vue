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

<style scoped lang="scss">
article {
  display: flex;
  align-items: center;
  margin-bottom: 52px;
  flex-direction: column;

  img, div {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  img {
  border-radius: 50%;
  margin-right: 1rem;
  width: 300px;
  height: 300px;
  object-fit: cover;
  }

  div{
    background-color: var(--bg-button);
    color: var(--text-light);
    margin-top: 1rem;
    min-width: 235px;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h3, p {
      margin: 0;
    }


    h3 {
      font-size: var(--fs-200);
      line-height: 150%;
      font-weight: 500;
    }

    p{
      font-size: var(--fs-100);
    }
  }
}
</style>
