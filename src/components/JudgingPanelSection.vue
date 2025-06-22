<script setup lang="ts">
// Judging Panel Section Component
const judges = [
  {
    id: 1,
    name: '評審委員 A',
    title: '知名導演',
    image: 'https://placehold.co/200x200/666/FFF?text=Judge+A'
  },
  {
    id: 2,
    name: '評審委員 B',
    title: '音樂製作人',
    image: 'https://placehold.co/200x200/666/FFF?text=Judge+B'
  },
  {
    id: 3,
    name: '評審委員 C',
    title: '影像創作家',
    image: 'https://placehold.co/200x200/666/FFF?text=Judge+C'
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
        評審團
      </h3>

      <div class="judges-grid grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div
          v-for="judge in judges"
          :key="judge.id"
          class="judge-card"
        >
          <div class="judge-image-container">
            <img
              :src="judge.image"
              :alt="judge.name"
              class="judge-image"
            />
            <div class="image-overlay"></div>
          </div>
          <div class="judge-info">
            <h4 class="judge-name">{{ judge.name }}</h4>
            <p class="judge-title">{{ judge.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 3px solid transparent;
  background: linear-gradient(135deg, #FFD700, #FFA500) padding-box,
              linear-gradient(135deg, #FFD700, #FFA500) border-box;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
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
  background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.2), transparent);
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
    width: 10rem;
    height: 10rem;
    margin-bottom: 1.5rem;
  }

  .judge-name {
    font-size: 1.125rem;
  }

  .judge-title {
    font-size: 0.875rem;
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

  .judge-image-container {
    width: 8rem;
    height: 8rem;
  }
}
</style>
