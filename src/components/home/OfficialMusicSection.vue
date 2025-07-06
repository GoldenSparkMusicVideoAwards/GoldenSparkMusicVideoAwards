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
            <div class="flex flex-col justify-center items-center w-60 h-60">
              <div class="image-container">
                <img
                  class="image-content transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                  :src="item.image"
                  :alt="item.name"
                >
              </div>
              <div class="text-3xl md:text-4xl font-bold my-2">{{ item.name }}</div>
            </div>
          </template>
        </div>

        <!-- 第二組：2個項目 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto my-10 md:gap-15 lg:gap-25">
          <template v-for="item in secondGroup" :key="item.id">
            <div class="flex flex-col justify-center items-center w-60 h-60">
              <div class="image-container">
                <img
                  class="image-content transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                  :src="item.image"
                  :alt="item.name"
                >
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
/* 圖片容器 - 使用 CSS Grid 確保圓形 */
.image-container {
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  /* isolation: isolate; */
  transform: translateZ(0);
  -webkit-transform: rotate(0deg);
  /* -webkit-appearance: none; */
}

.image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: 1 / 1;
}

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

.music-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.music-card:hover {
  transform: translateY(-8px);
}

.music-cover-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.music-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.music-card:hover .music-cover {
  transform: scale(1.1);
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
  transition: transform 0.2s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.duration-badge {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.music-info {
  text-align: center;
}

.music-title {
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.music-artist {
  color: #9CA3AF;
  font-size: 0.75rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .music-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 640px) {

  .section-title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  .music-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .music-title {
    font-size: 0.8rem;
  }

  .music-artist {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .play-button {
    width: 2.5rem;
    height: 2.5rem;
  }

  .play-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
