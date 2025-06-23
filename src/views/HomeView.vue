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

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script lang="ts">
import HeroSection from '../components/HeroSection.vue';
import TitleSection from '../components/TitleSection.vue';
import RegistrationSection from '../components/RegistrationSection.vue';
import CompetitionSection from '../components/CompetitionSection.vue';
import JudgingPanelSection from '../components/JudgingPanelSection.vue';
import OfficialMusicSection from '../components/OfficialMusicSection.vue';
import LatestNewsSection from '../components/LatestNewsSection.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
  components: {
    HeroSection,
    TitleSection,
    RegistrationSection,
    CompetitionSection,
    JudgingPanelSection,
    OfficialMusicSection,
    LatestNewsSection,
    FooterSection,
  },
};
</script>

<style scoped>
</style>
