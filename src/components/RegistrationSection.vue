<script setup lang="ts">
// Registration Section Component
</script>

<template>
  <section class="registration-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        REGISTRATION
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        我要報名
      </h3>

      <div class="registration-buttons flex flex-col items-center gap-6 max-w-md mx-auto">
        <button class="btn-primary w-full">
          <span class="btn-text text-white">我有MV作品<br>我想投件!</span>
        </button>
        <button class="btn-primary w-full">
          <span class="btn-text text-white">我有自創或自覓的音樂<br>準備開拍!</span>
        </button>
        <button class="btn-primary w-full">
          <span class="btn-text text-white">我想拍但我沒有音樂<br>想用金電光的官方音樂!</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.registration-section {
  border-top: 1px solid rgba(255, 215, 0, 0.2);
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

.btn-primary {
  /* background: linear-gradient(135deg, #FFD700, #FFA500); */
  background: #b28146;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(255, 215, 0, 0.1);
  transition: width 0.3s ease;
  z-index: 0;
}

.btn-secondary:hover::before {
  width: 100%;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
  border-color: #FFA500;
}

.btn-text {
  position: relative;
  z-index: 1;
}

/* RWD */
@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
    padding: 0 1rem;
  }

  /* .section-title::before, .section-title::after {
    width: 2rem;
  } */

  .btn-primary, .btn-secondary {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
