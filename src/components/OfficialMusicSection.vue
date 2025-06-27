<script setup lang="ts">
// Official Music Section Component
</script>

<template>
  <section class="official-music-section py-16 px-4 text-center">
    <div class="container mx-auto max-w-6xl">
      <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">
        OFFICIAL MUSIC
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
        官方音樂庫
      </h3>

      <!-- <div class="music-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
        <div
          v-for="track in musicTracks"
          :key="track.id"
          class="music-card"
        >
          <div class="music-cover-container">
            <img
              :src="track.cover"
              :alt="track.title"
              class="music-cover"
            />
            <div class="play-overlay">
              <div class="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div class="duration-badge">{{ track.duration }}</div>
          </div>
          <div class="music-info">
            <h4 class="music-title">{{ track.title }}</h4>
            <p class="music-artist">{{ track.artist }}</p>
          </div>
        </div>
      </div> -->

      <div class="music-bg container mx-auto max-w-6xl my-10 py-10 flex flex-col justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto my-10 md:gap-15 lg:gap-25">
          <div class="flex flex-col justify-center items-center w-60 h-60">
            <div class="overflow-hidden rounded-full">
              <img class="w-full h-full object-cover aspect-square transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3" src="@/assets/images/officialMusic-01.svg" alt="滅火器">
            </div>
            <div class="text-3xl md:text-4xl font-bold my-2">滅火器</div>
          </div>
          <div class="flex flex-col justify-center items-center w-60 h-60">
            <div class="overflow-hidden rounded-full">
              <img class="w-full h-full object-cover aspect-square transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3" src="@/assets/images/officialMusic-02.svg" alt="孩子王">
            </div>
            <div class="text-3xl md:text-4xl font-bold my-2">孩子王</div>
          </div>
          <div class="flex flex-col justify-center items-center w-60 h-60">
            <div class="overflow-hidden rounded-full">
              <img class="w-full h-full object-cover aspect-square transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3" src="@/assets/images/officialMusic-03.svg" alt="普通隊長">
            </div>
            <div class="text-3xl md:text-4xl font-bold my-2">普通隊長</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto my-10 md:gap-15 lg:gap-25">
          <div class="flex flex-col justify-center items-center w-60 h-60">
            <div class="overflow-hidden rounded-full">
              <img class="w-full h-full object-cover aspect-square transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3" src="@/assets/images/officialMusic-04.svg" alt="Gummy B">
            </div>
            <div class="text-3xl md:text-4xl font-bold my-2">Gummy B</div>
          </div>
          <div class="flex flex-col justify-center items-center w-60 h-60">
            <div class="overflow-hidden rounded-full">
              <img class="w-full h-full object-cover aspect-square transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3" src="@/assets/images/officialMusic-05.svg" alt="夕陽武士">
            </div>
            <div class="text-3xl md:text-4xl font-bold my-2">夕陽武士</div>
          </div>
        </div>

        <div class="mx-auto md:me-10 ms-auto">
          <div class="text-3xl md:text-4xl font-bold">版權音樂提供</div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

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

/* RWD */
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

  /* .section-title::before, .section-title::after {
    width: 2rem;
  } */

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
