<script setup>
import { RouterView } from 'vue-router';
import MainHeader from '@/components/Header/MainHeader.vue';
import MainFooter from '@/components/MainFooter/MainFooter.vue';
import CookieBar from '@/components/CookieBar/CookieBar.vue';
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
  <CookieBar id="cookies" />
</template>

<style scoped lang="scss">
#cookies {
  z-index: 9999;
}
</style>
