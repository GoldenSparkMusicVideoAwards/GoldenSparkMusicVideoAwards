<script setup lang="ts">
// 引入需要的組件
</script>

<template>
  <div class="text-white">
    <!-- Hero Section -->
    <HeroSection />

    <TitleSection />

    <!-- Registration Section -->
    <RegistrationSection />

    <!-- Competition Section -->
    <CompetitionSection />

    <!-- Judging Panel -->
    <JudgingPanelSection />

    <!-- Official Music -->
    <OfficialMusicSection />

    <!-- Latest News -->
    <LatestNewsSection />

    <!-- End Section -->
    <EndSection />
  </div>
</template>

<script lang="ts">
import HeroSection from '../components/home/HeroSection.vue';
import TitleSection from '../components/home/TitleSection.vue';
import RegistrationSection from '../components/home/RegistrationSection.vue';
import CompetitionSection from '../components/home/CompetitionSection.vue';
import JudgingPanelSection from '../components/home/JudgingPanelSection.vue';
import OfficialMusicSection from '../components/home/OfficialMusicSection.vue';
import LatestNewsSection from '../components/home/LatestNewsSection.vue';
import EndSection from '../components/home/EndSection.vue';

export default {
  components: {
    HeroSection,
    TitleSection,
    RegistrationSection,
    CompetitionSection,
    JudgingPanelSection,
    OfficialMusicSection,
    LatestNewsSection,
  },
};
</script>

<style scoped>
</style>
