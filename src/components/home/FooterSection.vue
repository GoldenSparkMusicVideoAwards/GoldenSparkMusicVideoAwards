<script setup lang="ts">
// Footer Section Component
</script>

<template>
  <footer class="bg-white py-8 px-4 md:py-12 md:px-8">
    <div class="max-w-full mx-auto flex flex-col lg:flex-row justify-around gap-8">
      <!-- 主辦單位 -->
      <div class="flex-1">
        <h3 class="text-2xl font-bold text-black mb-4 text-center sm:text-left">主辦單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-4 md:gap-6 flex-wrap xl:flex-row flex-col">
          <img src="@/assets/images/logo/logo1.png" alt="主辦單位logo1" class="h-20 object-contain mb-4 xl:mb-0">
          <img src="@/assets/images/logo/logo2.png" alt="主辦單位logo2" class="h-20 object-contain">
        </div>
      </div>

      <!-- 協辦單位 -->
      <div class="flex-4">
        <h3 class="text-2xl font-bold text-black mb-4 text-center sm:text-left">協辦單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-4 md:gap-6 flex-wrap xl:flex-row flex-col">
          <img src="@/assets/images/logo/logo3.png" alt="協辦單位logo1" class="h-15 md:h-12 object-contain mb-4 xl:mb-0">
          <img src="@/assets/images/logo/logo4.png" alt="協辦單位logo2" class="h-15 md:h-12 object-contain mb-4 xl:mb-0">
          <img src="@/assets/images/logo/logo5.png" alt="協辦單位logo3" class="h-15 md:h-12 object-contain mb-4 xl:mb-0">
          <img src="@/assets/images/logo/logo6.png" alt="協辦單位logo4" class="h-15 md:h-12 object-contain">
        </div>
      </div>

      <!-- 贊助單位 -->
      <div class="flex-1">
        <h3 class="text-2xl font-bold text-black mb-4 text-center sm:text-left">贊助單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-4 md:gap-6 flex-wrap xl:flex-row flex-col">
          <img src="@/assets/images/logo/logo7.png" alt="贊助單位logo1" class="h-15 md:h-12 object-contain">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* RWD 相關樣式 */
@media (max-width: 640px) {
  .flex-wrap {
    justify-content: center;
  }
}

/* 1500px 以下每排一張 logo */
@media (max-width: 1500px) {
  .flex-col {
    align-items: center;
  }
}
</style>
