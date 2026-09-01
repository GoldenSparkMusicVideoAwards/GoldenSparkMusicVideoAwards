<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(true);
const targetUrl = 'https://gsmv2026.zeabur.app/';

const closeBanner = (e: MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();
  isVisible.value = false;
};
</script>

<template>
  <Transition name="slide-fade">
    <aside
      v-if="isVisible"
      class="floating-header-wrapper"
      role="banner"
      aria-label="2026 金電光宣傳橫幅"
    >
      <a
        :href="targetUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-header-bar"
      >
        <!-- 頂部/底部的微光細線 -->
        <div class="glow-line"></div>

        <div class="content-wrapper">
          <!-- 極簡質感 Live 標籤 (取代原本粗糙的標籤) -->
          <div class="status-badge">
            <span class="radar-dot">
              <span class="radar-ping"></span>
              <span class="radar-core"></span>
            </span>
            <span class="badge-text">最新消息</span>
          </div>

          <!-- 主文案 -->
          <p class="announcement-text">
            <!-- <span class="brand-spark">2026</span> -->
            <span class="main-title">2026年金電光全國青年MV大賽開始徵件啦！</span>
          </p>

          <!-- 質感 CTA 按鈕 -->
          <div class="cta-link">
            <span class="cta-text">點我前往官網</span>
            <span class="arrow-wrap">
              <svg
                class="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>

        <!-- 關閉按鈕 -->
        <button
          type="button"
          @click="closeBanner"
          class="close-button"
          title="關閉"
          aria-label="關閉"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </a>
    </aside>
  </Transition>
</template>

<style scoped>
.floating-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}

.floating-header-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 8px 44px 8px 16px;
  background: rgba(12, 10, 8, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(245, 158, 11, 0.22);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.floating-header-bar:hover {
  background: rgba(18, 14, 10, 0.94);
  border-bottom-color: rgba(245, 158, 11, 0.5);
}

/* 底部流動金光細線 */
.glow-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(245, 158, 11, 0.2) 20%,
    rgba(251, 191, 36, 0.8) 50%,
    rgba(245, 158, 11, 0.2) 80%,
    transparent 100%
  );
  opacity: 0.75;
  transition: opacity 0.3s ease;
}

.floating-header-bar:hover .glow-line {
  opacity: 1;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(245, 158, 11, 0.4) 15%,
    rgba(253, 224, 71, 0.95) 50%,
    rgba(245, 158, 11, 0.4) 85%,
    transparent 100%
  );
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

/* 精緻的雷達脈衝狀態標籤 */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.1);
  transition: border-color 0.2s ease;
}

.floating-header-bar:hover .status-badge {
  border-color: rgba(245, 158, 11, 0.6);
  background: rgba(245, 158, 11, 0.18);
}

.radar-dot {
  position: relative;
  display: flex;
  width: 6px;
  height: 6px;
}

.radar-ping {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: #f59e0b;
  opacity: 0.75;
  animation: radar-wave 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.radar-core {
  position: relative;
  display: inline-flex;
  border-radius: 9999px;
  width: 6px;
  height: 6px;
  background-color: #fbbf24;
  box-shadow: 0 0 6px #f59e0b;
}

@keyframes radar-wave {
  75%, 100% {
    transform: scale(2.4);
    opacity: 0;
  }
}

.badge-text {
  font-size: 0.68rem;
  font-weight: 700;
  color: #fde68a;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* 主文案字體 */
.announcement-text {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #e5e7eb;
  letter-spacing: 0.02em;
}

.brand-spark {
  font-weight: 700;
  color: #fbbf24;
  letter-spacing: 0.05em;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
}

.main-title {
  color: #f3f4f6;
}

/* CTA 按鈕 */
.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 12px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.25) 100%);
  border: 1px solid rgba(245, 158, 11, 0.45);
  color: #fef3c7;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-header-bar:hover .cta-link {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #ffffff;
  border-color: #fcd34d;
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.5);
  transform: translateY(-0.5px);
}

.arrow-wrap {
  display: inline-flex;
  align-items: center;
  transition: transform 0.25s ease;
}

.floating-header-bar:hover .arrow-wrap {
  transform: translateX(3px);
}

/* 關閉按鈕 */
.close-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* 進退場動畫 */
.slide-fade-enter-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* 行動端適配 */
@media (max-width: 640px) {
  .floating-header-bar {
    padding: 6px 36px 6px 10px;
  }

  .content-wrapper {
    gap: 8px;
  }

  .status-badge {
    padding: 1px 6px;
  }

  .badge-text {
    font-size: 0.62rem;
  }

  .announcement-text {
    font-size: 0.8rem;
    gap: 4px;
  }

  .cta-link {
    font-size: 0.75rem;
    padding: 2px 8px;
  }
}
</style>
