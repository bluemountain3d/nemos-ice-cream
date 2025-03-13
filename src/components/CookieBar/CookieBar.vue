<template>
  <Transition name="fade">
    <div v-if="isVisible" class="cookie-bar">
      <div class="cookie__content">
        <h3>We value your privacy</h3>
        <p>
          We use cookies to enhance your browsing experience. By clicking "Accept" you consent to
          our use of cookies.
        </p>
      </div>
      <div class="cookie__buttons">
        <button @click="declineCookies" class="cookie__decline primary-btn">Decline</button>
        <button @click="acceptCookies" class="primary-btn">Accept</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (!cookiesAccepted) {
    isVisible.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem('cookiesAccepted', 'true');
  isVisible.value = false;
};

const declineCookies = () => {
  localStorage.setItem('cookiesAccepted', 'declined'); // Stores the decline choice
  isVisible.value = false;
};
</script>

<style scoped lang="scss">
.cookie-bar {
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto; /* Flexible height */
  background: var(--bg-section);
  border: solid 1px var(--bg-footer);
  color: var(--text-primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 0.6rem;

  @media screen and (min-width: 720px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.cookie__text {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 70%;
}

.cookie__text h3 {
  margin: 0;
  font-size: 1rem;
}

.cookie__text p {
  margin: 1rem;
  font-size: 0.5rem;
}

.cookie__buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    gap: 1rem;
  }
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
