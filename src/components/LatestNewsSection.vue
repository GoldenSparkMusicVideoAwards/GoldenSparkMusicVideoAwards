<script setup lang="ts">
// Latest News Section Component
const newsItems = [
  {
    id: 1,
    title: '2025 金電光 MV 大賽正式啟動',
    summary: '本屆大賽以「光」為主題，邀請全國青年創作者共同參與這場視覺盛宴...',
    image: 'https://placehold.co/400x250/333/FFF?text=News+1',
    date: '2025.06.15',
    category: '活動消息'
  },
  {
    id: 2,
    title: '評審團陣容正式公布',
    summary: '本屆評審團集結了業界知名導演、音樂製作人以及影像創作專家...',
    image: 'https://placehold.co/400x250/333/FFF?text=News+2',
    date: '2025.06.10',
    category: '評審資訊'
  },
  {
    id: 3,
    title: '參賽作品投稿須知',
    summary: '詳細的作品規格、投稿流程以及注意事項，請參賽者務必詳閱...',
    image: 'https://placehold.co/400x250/333/FFF?text=News+3',
    date: '2025.06.05',
    category: '參賽指南'
  },
  {
    id: 4,
    title: '官方音樂合作夥伴公布',
    summary: '與多位知名音樂人合作，提供參賽者豐富的音樂資源...',
    image: 'https://placehold.co/400x250/333/FFF?text=News+4',
    date: '2025.06.01',
    category: '合作夥伴'
  }
]
</script>

<template>
  <section class="latest-news-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        LATEST NEWS
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        最新消息
      </h3>

      <div class="news-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <article
          v-for="news in newsItems"
          :key="news.id"
          class="news-card"
        >
          <div class="news-image-container">
            <img
              :src="news.image"
              :alt="news.title"
              class="news-image"
            />
            <div class="category-badge">{{ news.category }}</div>
            <div class="image-overlay"></div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <time class="news-date">{{ news.date }}</time>
            </div>
            <h4 class="news-title">{{ news.title }}</h4>
            <p class="news-summary">{{ news.summary }}</p>
            <button class="read-more-btn">
              <span>閱讀更多</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.latest-news-section {
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

.news-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.news-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 12px 30px rgba(255, 215, 0, 0.15);
}

.news-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news-card:hover .image-overlay {
  opacity: 1;
}

.news-content {
  padding: 1.5rem;
}

.news-meta {
  margin-bottom: 0.75rem;
}

.news-date {
  color: #9CA3AF;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.news-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-summary {
  color: #D1D5DB;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FFD700;
  font-size: 0.875rem;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.read-more-btn:hover {
  color: #FFA500;
  transform: translateX(4px);
}

.read-more-btn svg {
  transition: transform 0.3s ease;
}

.read-more-btn:hover svg {
  transform: translateX(2px);
}

/* RWD */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .news-image-container {
    height: 180px;
  }

  .news-content {
    padding: 1.25rem;
  }

  .news-title {
    font-size: 1.125rem;
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

  .news-image-container {
    height: 160px;
  }

  .news-content {
    padding: 1rem;
  }

  .news-title {
    font-size: 1rem;
  }

  .news-summary {
    font-size: 0.8rem;
    -webkit-line-clamp: 2;
  }
}
</style>
