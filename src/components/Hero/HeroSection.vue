<script setup>
import iceCreamFishSm from '@/assets/images/ice-cream-fish-w440.webp';
import iceCreamFishMd from '@/assets/images/ice-cream-fish-w660.webp';
import iceCreamFishLg from '@/assets/images/ice-cream-fish-w880.webp';
</script>

<template>
  <section class="hero">
    <picture class="hero__image">
      <source media="(max-width: 540px)" :srcset="iceCreamFishSm" type="image/webp" />
      <source media="(max-width: 960px)" :srcset="iceCreamFishMd" type="image/webp" />
      <img
        :src="iceCreamFishLg"
        alt="en hand som håller i en glassstrut med vaniljglasskulor i sams en tecknat clownfisk silhuett över "
      />
    </picture>
    <div class="hero__content">
      <div class="hero__title">
        <h1 class="hero__heading">nemo</h1>
        <h2 class="hero__byline heading-3">Just keep scoopoing</h2>
      </div>
      <div class="hero__cta">
        <p class="hero__cta-text">Check out or new and<br />yummy flavours!</p>
        <button class="primary-btn">Click here</button>
      </div>
    </div>
  </section>
</template>

<!-- Local Component Specific styling -->
<style scoped lang="scss">
.hero {
  overflow: clip;
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(ellipse, #ffaf50 15%, var(--bg-section) 85%);
  background-size: 157% 100%;
  background-position: center;

  @media screen and (min-width: 720px) {
    padding-inline-start: calc(4.8261rem + 4.2904vw);
  }

  &__image {
    z-index: 0;
    display: block;
    position: absolute;
    bottom: -2px;
    right: -10%;
    height: 64vmax;
    width: auto;

    & img {
      height: 100%;
      width: auto;
    }

    @media screen and (min-width: 720px) {
      right: -5%;
      height: 64vmax;
    }

    @media screen and (min-width: 1200px) {
      right: 1%;
      height: 87.6vmin;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__title {
    padding-block-start: 27.725118vmax;
    width: 100%;
    display: grid;
    justify-content: center;

    @media screen and (min-width: 720px) {
      justify-content: start;
      padding-block-start: 29.4vmax;
      padding-block-end: 25vmax;
    }

    @media screen and (min-width: 1200px) and (orientation: landscape) {
      padding-block-start: 31.64vmin;
      padding-block-end: 4vmin;
    }
  }

  &__heading {
    margin: 0 0 -0.242em;
    font-family: var(--ff-tertiary);
    font-size: clamp(6rem, 4.5143rem + 6.0952vw, 10rem); //25vmin;
    font-weight: 400;
    line-height: 1;
  }

  &__byline {
    margin: 0;
    line-height: 2.0625;
  }

  &__cta {
    width: 100%;
    display: none;

    @media screen and (min-width: 720px) {
      display: block;
    }
  }

  &__cta-text {
    font-size: var(--fs-300);
    margin: 0 0 0.8125rem;
  }
}
</style>
