<template>
  <div class="news-detail-container py-16 px-4">
    <div class="container mx-auto max-w-4xl">
      <div class="mb-8 ms-8">
        <router-link to="/" class="back-link flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          返回首頁
        </router-link>
      </div>

      <div v-if="news" class="news-content bg-black/30 backdrop-blur-md border border-gold/10 rounded-xl p-6 md:p-8">
        <div class="news-header mb-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="category-badge">{{ news.category }}</span>
            <time class="text-gray-400 text-sm">{{ news.date }}</time>
          </div>
          <h1 class="text-2xl md:text-4xl font-bold mb-6 text-white">{{ news.title }}</h1>
        </div>

        <div class="news-image-container mb-8">
          <img v-if="imageUrl" :src="imageUrl" :alt="news.title" class="w-full h-auto rounded-lg" />
          <div v-else class="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <span class="text-gray-400">圖片載入中...</span>
          </div>
        </div>

        <div class="news-body prose prose-invert max-w-none">
          <!-- <p>{{ news.summary }}</p> -->
          <!-- <p>這是新聞詳情頁面，ID: {{ id }}</p> -->
          <p v-html="news.content"></p>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center py-16">
        <h2 class="text-2xl font-bold mb-4">找不到新聞</h2>
        <p class="text-gray-400 mb-6">無法找到ID為 {{ id }} 的新聞</p>
        <router-link to="/" class="btn-primary">返回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNewsStore } from '../stores/news';

const route = useRoute();
const id = computed(() => route.params.id as string);

const newsStore = useNewsStore();
const news = computed(() => {
  return newsStore.getNewsById(id.value);
});

// 動態導入圖片
const imageUrl = ref('');

// 監聽 news 變化，當 news 改變時更新圖片
watch(news, (newVal) => {
  if (newVal && newVal.image) {
    // 直接使用圖片路徑，因為圖片在 public 目錄下
    imageUrl.value = newVal.image;
  } else {
    imageUrl.value = '';
  }
}, { immediate: true });
</script>

<style scoped>
.news-detail-container {
  min-height: 80vh;
}

.back-link {
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-link:hover {
  transform: translateX(-4px);
}

.category-badge {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.btn-primary {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

:deep(.prose) {
  color: #D1D5DB;
}

:deep(.prose strong) {
  color: white;
}
</style>
