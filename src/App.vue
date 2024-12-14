<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="clearfix fixed-top header-area">
    <div class="container h-100">
      <div class="navigation-bar h-100">
        <div class="logo">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
          </RouterLink>
        </div>
        <div class="menu">
          <ul class="d-flex align-items-center justify-content-center gap-1 h-100 list-unstyled p-0 m-0">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="menu-last-item h-100 d-flex align-items-center">
          <button class="btn btn-primary rounded-0">Get Free Quote</button>
        </div>
      </div>
    </div>
  </header>
  <div class="header-space"></div>

  <RouterView />
</template>

<style scoped>

</style>
