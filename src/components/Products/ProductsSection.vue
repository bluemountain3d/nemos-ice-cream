<script setup>
import ProductsList from '@/components/Products/ProductsList.vue';
</script>

<template>
  <section class="products__page-section" id="products-section">
    <section class="products__product-list-section">
      <h2>Our flavors</h2>
      <div>
        <ProductsList />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.products__page-section {
  padding-top: 18.5vw;

  .products__product-list-section {
    background-color: var(--bg-section);
    color: var(--text-primary);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-image: url('@/assets/images/fish-background.webp');

    h2 {
      margin-top: 16px;
      text-transform: uppercase;
      text-align: center;
      font-family: var(--ff-primary);
      font-size: 2.5rem;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (min-width: 768px) {
    .products__product-list-section h2 {
      font-size: var(--heading-1);
    }

    div {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      align-self: center;
      gap: 60px;
    }
  }

  @media screen and (min-width: 1024px) {
    .products__product-list-section {
      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
    }
  }
}
</style>
