<template>
  <header class="header">
    <div class="header__inner">
      <p class="header__brand">Nemos' Ice Cream</p>
      <button
        class="header__menu-toggle"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
      >
        <img :src="isMenuOpen ? closeMenuIcon : openMenuIcon" alt="" aria-hidden="true" />
      </button>
      <nav id="main-navigation" class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink to="/" class="header__menu-link" @click="toggleMenu"> Home </RouterLink>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/about" class="header__menu-link" @click="toggleMenu">
              About
            </RouterLink>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/#products" class="header__menu-link" @click="toggleMenu">
              Products
            </RouterLink>
          </li>
          <img class="header__fish-image" :src="nemoSolid" alt="" aria-hidden="true" />
          <img class="header__starfish-image" :src="sillyStarfish" alt="" aria-hidden="true" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

// TODO:

// fixa nav-width
// ----> pixelvärdet / 16 använd REM
// Skapa/fixa media queries.
// gör cookie-bar!!!!!!

import { ref, onMounted, onBeforeUnmount } from 'vue';
import openMenuIcon from '@/assets/images/BurgerMenuWhite.svg';
import closeMenuIcon from '@/assets/images/x.svg';
import nemoSolid from '@/assets/images/nemo-solid.webp';
import sillyStarfish from '@/assets/images/silly-starfish.webp';

const isMenuOpen = ref(false);

// Toggles the navigation-menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close menu on Escape key
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
     toggleMenu();
  }
};

// Add event listeners when the component is mounted
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

// Remove event listeners when the component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

</script>

<style scoped lang="scss">
// Local Component Specific styling

.header {
  z-index: 999;
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg-header);

  &__inner {
    width: min(100%, 1440px);
    margin-inline: auto;
    padding-inline: 5.7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    font-size: var(--fs-300);
    line-height: 1;
    margin: 0;
    color: var(--text-light);
    text-decoration: none;
    padding: 0.5rem 0;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid var(--text-link);
      outline-offset: 2px;
    }

    @media screen and (min-width: 720px) {
      font-size: var(--fs-400);
    }
  }

  &__menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    width: 4.6875rem;
    height: 4.6875rem;
    display: grid;
    place-content: center;

    &:focus {
      outline: 2px solid var(--text-light);
      outline-offset: 2px;
    }

    & * {
      pointer-events: none;
    }

    @media screen and (min-width: 1024px) {
      width: 3.75rem;
      height: 3.75rem;
    }
  }

  &__nav {
    // nav
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: calc(100vh - 100%);
    background-color: var(--bg-main);

    &--open {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__fish-image,
  &__starfish-image {
    display: block;
    position: absolute;
    height: auto;
  }

  &__fish-image {
    top: 0;
    left: 0;
    width: 16.41vw;
    @media screen and (min-width: 720px) {
      width: 22.78vw;
    }
    @media screen and (min-width: 1024px) {
      width: 18.82vw;
    }
  }

  &__starfish-image {
    bottom: 0;
    right: 0;
    width: 15.38vw;
    @media screen and (min-width: 720px) {
      width: 20.74vw;
    }
    @media screen and (min-width: 1024px) {
      width: 16.04vw;
    }
  }

  &__menu {
    // ul
    position: relative;
    list-style: none;
    padding: 4vh 0;
    width: 100%;
    margin: 0 7%;
    display: grid;
    justify-content: center;
  }

  &__menu-item {
    // li
    width: 100%;
    max-width: 29.25rem;

    &:not(:last-of-type) {
      margin-bottom: 7.5vh;

      @media screen and (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }

  &__menu-link {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    font-family: var(--ff-primary);
    text-decoration: none;
    color: var(--text-primary);
    filter: drop-shadow(0 0.25rem 0.125rem rgba(0, 0, 0, 0.25));
    padding-block: 0.5em;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
      //text-decoration: underline;
    }

    &:focus {
      outline: 2px solid var(--text-light);
      outline-offset: 2px;
      opacity: 0.7;
    }

    @media screen and (min-width: 720px) {
      font-size: 4.375rem;
    }
  }
}

:focus-visible {
  opacity: 0.7;
}
</style>
