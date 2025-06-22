<script setup lang="ts">
// Hero Section Component
</script>

<template>
  <section class="hero-section w-full relative min-h-screen">
    <div class="hero-content w-full flex flex-col items-center justify-center py-20 px-4">
      <!-- Logo -->
      <div class="logo-container mb-8">
        <img
          src="https://placehold.co/500x200/FFD700/000000?text=GOLDEN+SPARK"
          alt="Golden Spark Music Video Awards"
          class="w-full max-w-lg mb-4"
        />
      </div>

      <!-- Main Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-yellow-400 mb-6 tracking-wider">
        Golden Spark<br>
        Music Video Award
      </h1>

      <!-- Date Range with decorative styling -->
      <div class="date-container flex items-center justify-center mb-8">
        <div class="date-box">
          <span class="date-number">06.27</span>
        </div>
        <div class="date-separator mx-6">
          <span class="text-2xl text-yellow-400">至</span>
        </div>
        <div class="date-box">
          <span class="date-number">09.28</span>
        </div>
      </div>

      <!-- GSMVA Logo with styling -->
      <div class="gsmva-container mb-6">
        <h2 class="gsmva-title text-4xl md:text-6xl font-black text-yellow-400 tracking-widest">
          GSMVA
        </h2>
        <div class="gsmva-underline"></div>
      </div>

      <!-- Subtitle -->
      <p class="subtitle text-xl md:text-2xl text-center text-gray-300 font-light tracking-wide">
        金電光全國青年MV大賽
      </p>

      <!-- Coming Soon Badge -->
      <div class="coming-soon-badge mt-8">
        <span class="badge-text">COMING SOON!</span>
      </div>
    </div>

    <!-- Background overlay -->
    <div class="hero-overlay"></div>
  </section>
</template>

<style scoped>
.hero-section {
  animation: gradientShift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.date-box {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
  border: 2px solid #FFD700;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  backdrop-filter: blur(10px);
}

.date-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.gsmva-container {
  position: relative;
  text-align: center;
}

.gsmva-title {
  text-shadow:
    0 0 20px rgba(255, 215, 0, 0.8),
    0 0 40px rgba(255, 215, 0, 0.4),
    0 0 60px rgba(255, 215, 0, 0.2);
  margin-bottom: 0.5rem;
}

.gsmva-underline {
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
  border-radius: 2px;
  animation: glow 2s ease-in-out infinite alternate;
}

.coming-soon-badge {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transform: rotate(-2deg);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.badge-text {
  color: #000;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 2px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes glow {
  from { opacity: 0.6; }
  to { opacity: 1; }
}

/* RWD */
@media (max-width: 768px) {
  .hero-content {
    padding: 3rem 1rem;
  }

  .date-box {
    padding: 0.75rem 1rem;
  }

  .date-number {
    font-size: 1.25rem;
  }

  .gsmva-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero-content h1 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.125rem;
  }

  .date-container {
    flex-direction: row;
    gap: 1rem;
  }

  .date-separator {
    margin: 0 1rem;
  }
}
</style>
