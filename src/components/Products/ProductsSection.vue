<script setup>
import ProductsList from '@/components/Products/ProductsList.vue';
</script>

<template>
  <section class="page-section">
    <section class="product-list-section">
      <h2>Our flavors</h2>
      <div>
        <ProductsList />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.page-section {
  padding-top: 15vw;

  .product-list-section {
    background-color: var(--bg-section);
    color: var(--text-primary);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-image: url('/assets/images/Fish-background.png');

    h2 {
      margin-top: 1rem;
      text-transform: uppercase;
      text-align: center;
      font-family: var(--ff-primary);
      font-size: 2.5rem;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (min-width: 768px) {
    .product-list-section h2 {
      font-size: var(--heading-1);
    }

    div {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      align-self: center;
      gap: 3.75rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .product-list-section {
      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
    }
  }
}
</style>
