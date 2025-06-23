<script setup lang="ts">
// Footer Section Component
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'YouTube', url: '#', icon: 'youtube' },
  { name: 'Twitter', url: '#', icon: 'twitter' }
]

const footerLinks = [
  { title: '關於大賽', url: '#' },
  { title: '參賽辦法', url: '#' },
  { title: '評選標準', url: '#' },
  { title: '聯絡我們', url: '#' }
]
</script>

<template>
  <footer class="footer-section py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Main Footer Content -->
      <div class="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Logo and Description -->
        <div class="footer-brand">
          <h3 class="brand-title text-2xl font-bold text-yellow-400 mb-4">
            GSMVA 2025
          </h3>
          <p class="brand-description text-gray-300 text-sm leading-relaxed mb-6">
            金電光全國青年MV大賽致力於發掘與培育新世代的影像創作人才，
            透過「光」的主題詮釋，展現青年創作者的無限可能。
          </p>
          <!-- Social Links -->
          <div class="social-links flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
            >
              <div class="social-icon">
                <svg v-if="social.icon === 'facebook'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <svg v-else-if="social.icon === 'instagram'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg v-else-if="social.icon === 'youtube'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <svg v-else-if="social.icon === 'twitter'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="links-title text-lg font-semibold text-white mb-4">
            快速連結
          </h4>
          <ul class="links-list space-y-2">
            <li v-for="link in footerLinks" :key="link.title">
              <a
                :href="link.url"
                class="link-item text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-contact">
          <h4 class="contact-title text-lg font-semibold text-white mb-4">
            聯絡資訊
          </h4>
          <div class="contact-info space-y-3">
            <div class="contact-item">
              <span class="contact-label text-gray-400 text-sm">Email:</span>
              <a href="mailto:info@gsmva.com" class="contact-value text-gray-300 hover:text-yellow-400 transition-colors">
                info@gsmva.com
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-label text-gray-400 text-sm">電話:</span>
              <a href="tel:+886-2-1234-5678" class="contact-value text-gray-300 hover:text-yellow-400 transition-colors">
                +886-2-1234-5678
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-label text-gray-400 text-sm">地址:</span>
              <span class="contact-value text-gray-300">
                台北市中正區XXX路XXX號
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom pt-8 border-t border-gray-700">
        <div class="bottom-content flex flex-col md:flex-row justify-center items-center gap-4">
          <p class="copyright text-gray-400 text-sm">
            © {{ currentYear }} Golden Spark Music Video Awards. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
