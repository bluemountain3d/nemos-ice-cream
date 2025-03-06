<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const showElement = ref(false);

function hideElement() {
  console.log('Klick!');
  showElement.value = !showElement.value;
}

//document.getElementById('darkHamburger').addEventListener('click', openIt(theNavPage))
</script>

<template>
  <header>
    <h1 v-if="showElement">Nemo's Ice Cream</h1>
    <button @click="hideElement"></button>

    <transition name="fade">
    <nav v-if="showElement">
      <img src="../../../assets/images/nemo-solid.PNG" alt="" id="solidnemo" />
      <img
        src="../../../assets/images/silly-starfish.PNG"
        alt="A white starfish"
        id="sillystarfish"
      />
      <div class="navlinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Products</RouterLink>
      </div>
    </nav>
</transition>
  </header>
</template>

<style scoped lang="scss">

header {
  background-color: transparent;
  height: 50px;
}

h1 {
  color: #fff3e0;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  padding-left: 24px;
  position: absolute; // ändra sedan.................................................
  margin-top: 8px;
  display: none; // DISPLAY NONE <-------------------
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
  flex-direction: column;
  position: absolute;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}

nav a {
  color: #402f17;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 70px;
  text-decoration: none;
  margin: 40px;
}

button {
  z-index: 1;
  width: 50px;
  height: 50px;
  float: right;
  padding-right: 15px; // funkar inte nu...............................................
  background-color: transparent;
  background-image: url('../../../assets/images/BurgerMenuBrown.svg');
  background-position: center;
  background-size: cover;
  border: 0;
}

// __________Fade in / out___________
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
