<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <div class="texture-overlay"></div>
    <router-view />
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
  background: url('/src/assets/images/texture.svg') repeat;
  background-position: center;
  opacity: 0.14;
  background-size: 1920px 7868px;
}
</style>
