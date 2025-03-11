<script setup>
import { RouterView } from 'vue-router';
import MainHeader from '@/components/Header/MainHeader.vue';
import MainFooter from '@/components/MainFooter/MainFooter.vue';
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>
