<script setup lang="ts">
// Competition Section Component
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
      <div class="date-range-container">
        <p class="date-label text-white text-center mb-6 text-xl">報名時間</p>
        <div class="date-range-display">
          <div class="date-item">
            <span class="date-text">2025.06.27</span>
          </div>
          <div class="arrow-separator">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path d="M0 10H35M35 10L30 5M35 10L30 15" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="date-item">
            <span class="date-text">2025.09.28</span>
          </div>
        </div>
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
  background: linear-gradient(135deg, #FFD700, #FFA500);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
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
  gap: 2rem;
}

.date-item {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.05));
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 12px;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
}

.date-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.arrow-separator {
  display: flex;
  align-items: center;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(200%) rotate(45deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* RWD */
@media (max-width: 768px) {
  .competition-info {
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .icon-circle {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1.5rem;
  }

  .icon-text {
    font-size: 1rem;
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

  .arrow-separator {
    transform: rotate(90deg);
  }

  .date-item {
    padding: 0.75rem 1.5rem;
  }

  .date-text {
    font-size: 1.125rem;
  }
}
</style>
