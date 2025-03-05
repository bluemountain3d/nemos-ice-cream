<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <h1>Nemo´s Ice Cream</h1>
    <img src="../../../assets/images/BurgerMenuWhite.svg" alt="Menu" class="whitehamburger">
    <img src="../../../assets/images/BurgerMenuBrown.svg" alt="White clown fish" class="darkhamburger">

    <nav>
      <img src="../../../assets/images/nemo-solid.PNG" alt="" class="solidnemo">
      <img src="../../../assets/images/silly-starfish.PNG" alt="A white starfish" class="sillystarfish">
      <div class="navlinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Products</RouterLink>
      </div>
    </nav>
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
  position: absolute; // ändra sedan?
  margin-top: 8px;
  display: none; // Toggla vid knapptryck
}

nav {
  display: none; // Toggla vid knapptryck
}

nav .solidnemo {
  width: 74px;
  height: 44px;
  position: absolute;
  transform: scaleX(-1);
  top: 17vh;
  left: 4vw;
}

nav .sillystarfish {
  width: 73px;
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

}

nav a {
  color: #402F17;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 70px;
  text-decoration: none;
  margin: 40px;
}

img {
  width: 50px;
  height: 50px;
  float: right;
  padding-right: 15px;
}

.whitehamburger {
  display: none; // Toggla vid knapptryck
}


</style>
