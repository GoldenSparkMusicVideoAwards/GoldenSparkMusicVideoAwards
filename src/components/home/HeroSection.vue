<script setup lang="ts">
// Hero Section Component
</script>

<template>
  <section class="hero-section w-full relative h-full lg:max-h-screen">
    <img src="@/assets/images/main2.png" alt="2025金電光主視覺" class="w-full h-full object-cover">
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
</style>
