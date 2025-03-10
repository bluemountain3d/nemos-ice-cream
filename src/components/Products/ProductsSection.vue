<script setup>
import ProductsList from '@/components/Products/ProductsList.vue';
</script>

<template>

  <!-- <div id="headerBackground">
    <p>Nemo's Ice Cream</p>
  </div> -->
  <section class="page-section" id="products">
    <section class="product-list-section">
      <h2>Our flavors</h2>
      <div>
        <ProductsList />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

// #headerBackground {
//   background-color: var(--bg-header);
//   height: 50px;
//   width: 100%;
//   position: sticky;
//   margin-bottom: 30px; // - Tillfälligt, ändra till rätt marginal sedan -
// }

// #headerBackground p { // Header text
//   color: var(--text-light);
//   font-family: var(--ff-secondary);
//   font-size: 24px;
//   padding-left: 24px;
//   position: fixed;
//   top: -24px;
//   height: 50px;
//   width: 100%;
//   font-weight: 800;
//   padding-top: 7px;
//   background-color: var(--bg-header);
// }

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
  .product-list-section h2 {
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
  .product-list-section {
    background-image: url('/assets/images/Fish-background.png');

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }
}


</style>
