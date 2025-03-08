<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const showElement = ref(false);

function hideElement() {
  showElement.value = !showElement.value;
}
</script>

<template>
  <header>
    <button
      @click="hideElement"
      id="menuButton"
      :style="{
        backgroundImage: showElement
          ? 'url(../../../assets/images/x.svg)'
          : 'url(../../../assets/images/BurgerMenuBrown.svg)',
      }"
    ></button>

    <transition name="fade">
      <nav v-if="showElement">
        <p>Nemo's Ice Cream</p>
        <img src="../../../assets/images/nemo-solid.PNG" alt="" id="solidnemo" />
        <img
          src="../../../assets/images/silly-starfish.PNG"
          alt="A white starfish"
          id="sillystarfish"
        />
        <div class="navlinks">
          <RouterLink to="/" @click="hideElement">Home</RouterLink>
          <RouterLink to="/about" @click="hideElement">About</RouterLink>
          <RouterLink to="/#products" @click="hideElement">Products</Routerlink>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: transparent;
 // height: 50px;
  position: sticky;
  top: 0;
  z-index: 10;
  max-width: 100vw;
}

p {
  color: var(--text-light);
  font-family: var(--ff-secondary);
  font-size: 24px;
  padding-left: 24px;
  position: absolute; // ändra sedan.................................................
  margin-top: 0px;
  background-color: var(--bg-header);
  height: 50px;
  width: 100%;
  font-weight: 800;
  padding-top: 7px;
}


nav #solidnemo {
  width: 67px;
  height: 44px;
  position: absolute;
  transform: scaleX(-1);
  top: 17vh;
  left: 4vw;
}

nav #sillystarfish {
  width: 63px;
  height: 64px;
  position: absolute;
  top: 78vh;
  right: 6vw;
}

.navlinks {
  background-color: var(--bg-main);
  z-index: 9;
  flex-direction: column;
  position: absolute;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: -1;
overflow-x: hidden;
}

nav a {
  color: var(--text-primary);
  font-family: var(--ff-primary);
  font-size: 70px;
  text-decoration: none;
  margin: 40px;
}

button {
  z-index: 1;
  width: 50px;
  height: 50px;
  right: 15px;
  background-color: transparent;
  background-position: center;
  background-size: cover;
  border: 0;
  transition:
    background-image 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  position: absolute;
}

// __________Fade in / out___________
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
