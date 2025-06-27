<script setup lang="ts">
// Hero Section Component
</script>

<template>
  <section class="hero-section w-full relative h-full lg:min-h-screen">
    <img src="@/assets/images/main.png" alt="2025GSMA visual" class="w-full h-full object-cover">
  </section>
</template>

<style scoped>
.hero-section {
  animation: gradientShift 15s ease infinite;
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
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes glow {
  from { opacity: 0.6; }
  to { opacity: 1; }
}
</style>
