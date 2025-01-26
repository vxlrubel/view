<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
let toggleMenu = ref(false)
</script>

<template>
  <header class="clearfix fixed-top header-area">
    <div class="container h-100">
      <div class="navigation-bar h-100 align-items-center justify-content-between">
        <div class="logo">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/img/logo-dark.webp" />
          </RouterLink>
        </div>

        <div class="menu d-none d-lg-block">
          <ul
            class="d-flex align-items-center justify-content-center gap-1 h-100 list-unstyled p-0 m-0"
          >
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="menu-last-item h-100 d-flex align-items-center justify-content-end">
          <button class="btn btn-primary rounded-0">Get Free Quote</button>
          <button
            class="btn btn-primary d-lg-none toggle-menu-button d-inline-flex align-items-center justify-content-center p-1 rounded-0"
            @click.stop.prevent="toggleMenu = !toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              v-if="!toggleMenu"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
              v-else
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mobile-menu shadow border-bottom d-lg-none" v-if="toggleMenu">
      <div class="container py-3">
        <ul class="m-0 p-0">
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/"
              @click.prevent="toggleMenu = !toggleMenu"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/services"
              @click.prevent="toggleMenu = !toggleMenu"
              >Services</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/portfolio"
              @click.prevent="toggleMenu = !toggleMenu"
              >Portfolio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/about"
              @click.prevent="toggleMenu = !toggleMenu"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/blog"
              @click.prevent="toggleMenu = !toggleMenu"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="text-dark text-decoration-none py-1 d-block px-3"
              to="/contact"
              @click.prevent="toggleMenu = !toggleMenu"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="header-space"></div>

  <RouterView />

  <!-- footer section -->
  <Footer />
</template>
