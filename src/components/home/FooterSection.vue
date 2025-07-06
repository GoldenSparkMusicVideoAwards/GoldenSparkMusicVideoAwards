<script setup lang="ts">
// Footer Section Component
</script>

<template>
  <footer class="bg-white py-8 px-4 md:py-12 md:px-8">
    <div class="max-w-full mx-auto flex flex-col lg:flex-row justify-around gap-8">
      <!-- 主辦單位 -->
      <div class="flex-1 min-w-0">
        <h3 class="text-2xl font-bold text-black mb-4 text-center sm:text-left">主辦單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-2 md:gap-4 flex-col md:flex-row">
          <img src="@/assets/images/logo/logo1.png" alt="文藻外語大學" class="h-20 mb-2 object-contain max-w-full">
          <img src="@/assets/images/logo/logo2.png" alt="文藻外語大學傳播藝術系/ 創意藝術產業碩士在職專班" class="h-20 mb-2 object-contain max-w-full">
        </div>
      </div>

      <!-- 協辦單位 -->
      <div class="flex-4 min-w-0">
        <h3 class="text-2xl font-bold text-black mb-4 text-center md:text-left">協辦單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-1 md:gap-2 lg:gap-4 flex-col md:flex-row flex-shrink-0">
          <img src="@/assets/images/logo/logo3.png" alt="高雄市政府文化局" class="h-14 mb-2 md:h-16 xl:h-20 object-contain max-w-full flex-shrink-0">
          <img src="@/assets/images/logo/logo4.png" alt="高雄市政府青年局" class="h-16 mb-2 md:h-16 xl:h-20 object-contain max-w-full flex-shrink-0">
          <img src="@/assets/images/logo/logo5.png" alt="高雄市流行音樂中心" class="h-18 mb-2 md:h-16 xl:h-20 object-contain max-w-full flex-shrink-0">
          <img src="@/assets/images/logo/logo6.png" alt="火氣音樂" class="h-20 mb-2 md:h-16 xl:h-20 object-contain max-w-full flex-shrink-0">
        </div>
      </div>

      <!-- 贊助單位 -->
      <div class="flex-1 min-w-0">
        <h3 class="text-2xl font-bold text-black mb-4 text-center md:text-left">贊助單位</h3>
        <div class="flex items-center justify-center md:justify-start gap-2 md:gap-4 flex-col md:flex-row">
          <img src="@/assets/images/logo/logo7.png" alt="八曜和茶" class="h-16 md:h-16 pr-10 object-contain max-w-full">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 確保容器不會溢出 */
.flex-4 {
  flex: 4;
  overflow: hidden;
}

/* 小螢幕時垂直排列 */
@media (max-width: 767px) {
  .flex-col {
    align-items: center;
  }
}

/* md 以上強制單行且防止重疊 */
@media (min-width: 768px) {
  .flex-4 > div {
    flex-wrap: nowrap;
    overflow: visible;
  }

  /* 確保圖片能夠縮小以適應容器 */
  .flex-4 img {
    min-width: 0;
    width: auto;
    max-width: calc(25% - 0.5rem);
  }
}

/* 大螢幕時增加圖片尺寸 */
@media (min-width: 1024px) {
  .flex-4 img {
    max-width: calc(25% - 1rem);
  }
}

@media (min-width: 1280px) {
  .flex-4 img {
    max-width: calc(25% - 1.5rem);
  }
}
</style>
