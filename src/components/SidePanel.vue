<script setup lang="ts">
import fbIcon from '@/assets/images/fb.png';
import igIcon from '@/assets/images/ig.png';
import ytIcon from '@/assets/images/yt.png';

// 定義回到頂部的功能
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const socialLinks = [
  // { name: 'Facebook', url: '', icon: 'facebook', imgSrc: fbIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/goldensparkmv?igsh=d3NsbW9jM2l5eGk1', icon: 'instagram', imgSrc: igIcon },
  { name: 'YouTube', url: 'https://www.youtube.com/@%E9%87%91%E9%9B%BB%E5%85%89GoldenSpark', icon: 'youtube', imgSrc: ytIcon },
]

</script>

<template>
  <div class="side-panel fixed right-4 bottom-20 flex flex-col gap-4 z-50">
    <!-- 社交媒體圖標 -->
    <div class="social-icons flex flex-col gap-3">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        class="social-icon flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300 hover:scale-110 hover:shadow-md"
      >
        <img
          :src="link.imgSrc"
          :alt="link.name"
          class="w-10 h-10"
        >
      </a>
    </div>

    <!-- 回到頂部按鈕 -->
    <button
      @click="scrollToTop"
      class="flex items-center justify-center w-10 h-10 rounded-md bg-[#a87942] text-white font-bold text-sm transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-[#c08b4f]"
    >
      TOP
    </button>
  </div>
</template>

<style scoped>
.side-panel {
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); */
}

.social-icon img {
  /* 保留此選擇器以便將來需要添加樣式 */
}

@media (max-width: 768px) {
  .side-panel {
    right: 1rem;
    bottom: 5rem;
  }
}
</style>
