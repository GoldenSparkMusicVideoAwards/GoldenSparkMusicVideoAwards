<script setup lang="ts">
// Competition Section Component
import IconRight from "./icons/IconRight.vue";
</script>

<template>
  <section class="competition-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        COMPETITION
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        競賽須知
      </h3>

      <!-- Competition Info Cards -->
      <div class="competition-info grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
        <div class="info-card">
          <div class="icon-circle">
            <span class="icon-text">報名文件<br>下載專區</span>
          </div>
          <!-- <div class="card-content">
            <p class="card-text">以各種形式詮釋「光」</p>
          </div> -->
        </div>

        <div class="info-card">
          <div class="icon-circle">
            <span class="icon-text">線上報名<br>表單</span>
          </div>
          <!-- <div class="card-content">
            <p class="card-text">原創MV作品</p>
          </div> -->
        </div>

        <div class="info-card">
          <div class="icon-circle">
            <span class="icon-text">官方<br>音樂庫</span>
          </div>
          <!-- <div class="card-content">
            <p class="card-text">1080p以上</p>
          </div> -->
        </div>
      </div>

      <!-- Date Range -->
      <div class="date-range-container mx-auto position-relative">
        <div class="flex items-center w-full mb-4">
          <p class="date-label text-white text-start text-5xl font-bold">報名時間</p>
          <!-- 上紅線，從文字右側開始 -->
          <div class="flex-grow h-1 bg-white ml-3"></div>
        </div>

        <div class="date-range-display">
          <div class="date-item">
            <span class="text-6xl font-bold lg:text-8xl">2025.06.27</span>
            <!-- <span class="date-text">2025.06.27</span> -->
          </div>

          <IconRight class="w-20 h-20 rotate-90 md:w-30 md:h-30 md:rotate-0"/>

          <div class="date-item">
            <span class="text-6xl font-bold lg:text-8xl">2025.09.28</span>
            <!-- <span class="date-text">2025.09.28</span> -->
          </div>
        </div>

        <p class="date-label text-white text-end mb-0 text-4xl font-bold mt-4">徵件截止至2025/09/28</p>

        <!-- 下紅線 -->
        <div class="w-full h-1 bg-white mt-4"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.competition-section {
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

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-8px);
}

.icon-circle {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  /* background: linear-gradient(90deg, #606060, #afafaf); */
  background: linear-gradient(90deg, rgba(96, 96, 96, 0.63) 0%, rgba(127, 127, 127, 0.63) 12.5%, rgba(175, 175, 175, 0.63) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 8px 25px rgba(120, 120, 120, 0.3);
  position: relative;
  overflow: hidden;
  border: 5px solid #bababa;
}

.icon-circle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s ease-in-out infinite;
}

.icon-text {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  position: relative;
}

.card-content {
  max-width: 12rem;
}

.card-text {
  color: white;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 300;
}

.date-range-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.date-label {
  font-weight: 500;
  letter-spacing: 1px;
}

.date-range-display {
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 8rem; */
}

.date-item {
  backdrop-filter: blur(10px);
}

.date-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

@keyframes shimmer {
  0% { transform: translateX(-150%) rotate(45deg); }
  100% { transform: translateX(150%) rotate(45deg); }
}

/* RWD */
@media (max-width: 768px) {
  .competition-info {
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .icon-circle {
    margin-bottom: 1.5rem;
  }

  .icon-text {
    font-size: 2rem;
  }

  .card-text {
    font-size: 1rem;
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

  .date-range-display {
    flex-direction: column;
    gap: 1rem;
  }

  .date-item {
    padding: 1.5rem 0;
  }

  .date-text {
    font-size: 1.125rem;
  }
}
</style>
