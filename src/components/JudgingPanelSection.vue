<script setup lang="ts">
// Judging Panel Section Component
import folderImage from '@/assets/images/folder.svg';
import judge1 from '@/assets/images/judge-01.svg';
import judge2 from '@/assets/images/judge-02.svg';
import judge3 from '@/assets/images/judge-03.svg';
const judges = [
  {
    id: 1,
    name: '劉立',
    title: '知名導演',
    image: judge1
  },
  {
    id: 2,
    name: 'Remii Huang',
    title: '音樂製作人',
    image: judge2
  },
  {
    id: 3,
    name: '郭佩萱',
    title: '影像創作家',
    image: judge3
  },
  {
    id: 4,
    name: '劉立',
    title: '影像創作家',
    image: judge1
  },
  {
    id: 5,
    name: 'Remii Huang',
    title: '影像創作家',
    image: judge2
  },
  {
    id: 6,
    name: '郭佩萱',
    title: '影像創作家',
    image: judge3
  }
]
</script>

<template>
  <section class="judging-panel-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        JUDGING PANEL
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        評審陣容
      </h3>

      <div class="judges-grid justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div
          class="flex flex-col items-center"
          v-for="judge in judges"
          :key="judge.id"
        >
          <div class="judge-image-container">
            <!-- 評審照片 -->
            <div class="judge-image-clip">
              <img :src="judge.image" alt="judge.name" class="judge-image">
              <div class="image-overlay"></div>
            </div>
            <!-- 資料夾外框疊裝在最上層 -->
            <img :src="folderImage" class="folder-frame" alt="folder">
          </div>
          <div class="judge-info">
            <h4 class="judge-name">{{ judge.name }}</h4>
            <!-- <p class="judge-title">{{ judge.title }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 移除 mask 相關樣式 */

.judging-panel-section {
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.section-title {
  position: relative;
  display: inline-block;
  padding: 0 2rem;
}

/* .section-title::before, .section-title::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
  transform: translateY(-50%);
} */

.section-title::before {
  right: 100%;
  margin-right: 1rem;
}

.section-title::after {
  left: 100%;
  margin-left: 1rem;
}

.judge-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.judge-card:hover {
  transform: translateY(-12px);
  filter: brightness(1.1);
}

.judge-image-container {
  position: relative;
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 資料夾作為外框，最上層 */
.folder-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none; /* 允許點擊穿透 */
}

/* 裁切過的照片容器 */
.judge-image-clip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* 用 clip-path 精確控制照片面積，使其符合資料夾形狀 */
  /* 這是一個資料夾形狀的多邊形，細節調整可需要精細調整 */
  clip-path: polygon(
    6% 33%,   /* 左上角 */
    34% 33%,
    55% 12%,
    94% 12%,   /* 右上角 */
    94% 70%,  /* 右下角前 */
    94% 88%,  /* 右下角穿出點 */
    6% 88%   /* 左下角 */
  );
  overflow: hidden;
}

.judge-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.judge-card:hover .judge-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(255, 215, 0, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.judge-card:hover .image-overlay {
  opacity: 1;
}

.judge-info {
  max-width: 12rem;
}

.judge-name {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.judge-title {
  color: #FFD700;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
}

/* RWD */
@media (max-width: 768px) {
  .judges-grid {
    gap: 2rem;
  }

  .judge-image-container {
    width: 15rem;
    height: 15rem;
  }

  .judge-name {
    font-size: 1.125rem;
  }

  .judge-title {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .judges-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  /* .section-title::before, .section-title::after {
    width: 2rem;
  } */
}
</style>
