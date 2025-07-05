<template>
  <div class="p-14">
    <picture>
      <!-- md (1200px 以上) 換成 GSMVLibrary_02.jpg -->
      <source media="(min-width: 1200px)" :srcset="imageLg" />
      <!-- 其餘情況顯示 GSMVLibrary_01.jpg -->
      <img
        :src="imageDefault"
        alt="GSMVLibrary"
        class="w-full h-full object-cover"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
const imageDefault = new URL('@/assets/images/GSMVLibrary_02.jpg', import.meta.url).href
const imageLg = new URL('@/assets/images/GSMVLibrary_01.jpg', import.meta.url).href
</script>
