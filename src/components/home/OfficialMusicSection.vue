<script setup lang="ts">
// 引入圖片
import img1 from '@/assets/images/滅火器.jpg';
import img2 from '@/assets/images/孩子王.jpg';
import img3 from '@/assets/images/普通隊長.jpg';
import img4 from '@/assets/images/Gummy.jpg';
import img5 from '@/assets/images/夕陽武士.jpg';

// 音樂項目資料
const musicItems = [
  { id: 1, name: '滅火器', image: img1 },
  { id: 2, name: '孩子王', image: img2 },
  { id: 3, name: '普通隊長', image: img3 },
  { id: 4, name: 'Gummy B', image: img4 },
  { id: 5, name: '夕陽武士', image: img5 }
];

// 將音樂項目分組，第一組3個，第二組2個
const firstGroup = musicItems.slice(0, 3);
const secondGroup = musicItems.slice(3);
</script>

<template>
  <section class="official-music-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        MUSIC PARTNERS
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        熱血應援
        <span class="px-2">|</span>
        音樂夥伴
      </h3>

      <div class="music-bg container mx-auto max-w-6xl my-10 py-10 flex flex-col justify-center items-center">
        <!-- 第一組：3個項目 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto my-10 md:gap-15 lg:gap-25">
          <template v-for="item in firstGroup" :key="item.id">
            <div class="flex flex-col justify-center items-center">
              <div class="image-container">
                <div class="image-wrapper">
                  <img
                    class="image-content"
                    :src="item.image"
                    :alt="item.name"
                  >
                </div>
              </div>
              <div class="text-3xl md:text-4xl font-bold my-2">{{ item.name }}</div>
            </div>
          </template>
        </div>

        <!-- 第二組：2個項目 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto my-10 md:gap-15 lg:gap-25">
          <template v-for="item in secondGroup" :key="item.id">
            <div class="flex flex-col justify-center items-center">
              <div class="image-container">
                <div class="image-wrapper">
                  <img
                    class="image-content"
                    :src="item.image"
                    :alt="item.name"
                  >
                </div>
              </div>
              <div class="text-3xl md:text-4xl font-bold my-2">{{ item.name }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 圖片容器 - 固定尺寸確保圓形 */
.image-container {
  width: 240px;
  height: 240px;
  margin: 0 auto;
}

/* 圖片包裝器 - 使用 padding-trick 確保正方形 */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  /* 使用 padding-trick 作為 Safari 的 fallback */
  aspect-ratio: 1;
}

/* Safari 和舊瀏覽器的 fallback */
@supports not (aspect-ratio: 1) {
  .image-wrapper {
    height: 0;
    padding-bottom: 100%; /* 創建 1:1 的長寬比 */
  }
}

/* 圖片內容 */
.image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  /* Safari fallback 時的絕對定位 */
  position: absolute;
  top: 0;
  left: 0;
}

/* 現代瀏覽器支援 aspect-ratio 時的樣式 */
@supports (aspect-ratio: 1) {
  .image-content {
    position: static;
  }
}

/* Hover 效果 */
.image-container:hover .image-content {
  transform: scale(1.1) rotate(3deg);
}

/* 背景樣式 */
.music-bg {
  background: linear-gradient(90deg, rgba(96, 96, 96, 0.63) 0%, rgba(127, 127, 127, 0.63) 12.5%, rgba(175, 175, 175, 0.63) 100%);
  border-radius: 36px;
  border: 2px solid #bababa;
}

.official-music-section {
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.section-title {
  position: relative;
  display: inline-block;
  padding: 0 2rem;
}

.section-title::before {
  right: 100%;
  margin-right: 1rem;
}

.section-title::after {
  left: 100%;
  margin-left: 1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .image-container {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .image-container {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .image-container {
    width: 160px;
    height: 160px;
  }
}
</style>
