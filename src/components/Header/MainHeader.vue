<template>
  <header class="header" id="header">
    <RouterLink to="/" class="header__brand">Nemos' Ice Cream</RouterLink>
    <button
      class="header__menu-toggle"
      @click="toggleMenu"
      aria-label="Toggle menu"
      :aria-expanded="isMenuOpen"
      aria-controls="main-navigation"
    >
      <img :src="isMenuOpen ? closeMenuIcon : openMenuIcon" alt="" aria-hidden="true" />
    </button>
    <Transition name="fade">
      <nav
        v-if="isMenuOpen"
        id="main-navigation"
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
      >
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
            <RouterLink to="/#products-section" class="header__menu-link" @click="toggleMenu">
              Products
            </RouterLink>
          </li>
          <img class="header__fish-image" :src="nemoSolid" alt="" aria-hidden="true" />
          <img class="header__starfish-image" :src="sillyStarfish" alt="" aria-hidden="true" />
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
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
  height: 3.125rem;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg-header);

  &__brand {
    font-size: var(--fs-300);
    line-height: 1;
    padding-left: 14px;
    color: var(--text-light);
    text-decoration: none;
    display: inline;
    position: absolute;
    top: 0.8rem;
    font-weight: 800;

    @media screen and (min-width: 720px) {
      font-size: var(--fs-400);
      left: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
      top: 1.3rem;
      left: 5.125rem;
    }
  }

  &__menu-toggle {
    display: absolute;
    background: none;
    border: none;
    cursor: pointer;
    width: 3.125rem;
    height: 3.125rem;
    position: absolute;
    right: 15px;

    & * {
      pointer-events: none;
    }

    // For the button
    @media screen and (min-width: 720px) {
      width: 3.75rem;
      height: 3.75rem;
      right: 1.2rem;
    }

    @media screen and (min-width: 1024px) {
      width: 4.688rem;
      height: 4.688rem;
      right: 2rem;
    }
  }

  // For the header
  @media screen and (min-width: 720px) {
    height: 3.75rem;
  }

  @media screen and (min-width: 1024px) {
    height: 4.688rem;
  }

  &__nav {
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
    top: 6vh;
    left: 0;
    width: 16.41vw;
    transform: scaleX(-1);

    @media screen and (min-width: 720px) {
      width: 22.78vw;
      top: 22vh;
    }
    @media screen and (min-width: 1024px) {
      width: 18.82vw;
      top: 5vh;
    }
  }

  &__starfish-image {
    bottom: 1vh;
    right: 0;
    width: 15.38vw;

    @media screen and (min-width: 720px) {
      width: 20.74vw;
      bottom: 22vh;
    }
    @media screen and (min-width: 1024px) {
      width: 16.04vw;
      bottom: 3vh;
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
    font-size: 4.375rem;
    font-family: var(--ff-primary);
    text-decoration: none;
    color: var(--text-primary);
    filter: drop-shadow(0 0.25rem 0.125rem rgba(0, 0, 0, 0.25));
    padding-block: 0.4em;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
      //text-decoration: underline;
    }

    &:focus-visible {
      outline: 2px solid var(--text-light);
      outline-offset: 2px;
      opacity: 0.7;
    }
  }
}

:focus-visible {
  opacity: 0.7;
}

// Fade transition styles
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
