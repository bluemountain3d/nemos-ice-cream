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
  <CookieBar />
</template>

<style scoped lang="scss"></style>
