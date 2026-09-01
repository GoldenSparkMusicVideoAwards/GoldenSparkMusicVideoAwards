<script setup lang="ts">
import FloatingHeader from '@/components/FloatingHeader.vue';
import SidePanel from '@/components/home/SidePanel.vue';
</script>

<template>
  <div class="app-container">
    <FloatingHeader />
    <div class="texture-overlay"></div>
    <router-view />
    <SidePanel />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  width: 100%;
  background: black;
  position: relative;
  overflow: hidden;
}
</style>


<style>
.texture-overlay {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  background: url('/src/assets/images/texture.jpg') repeat;
  background-position: center;
  opacity: 0.14;
  background-size: 1920px 2735px;
}
</style>
