<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'
  let toggleMenu = ref( false );

</script>

<template>
  <header class="clearfix fixed-top header-area">
    <div class="container h-100">
      <div class="navigation-bar h-100 align-items-center justify-content-between">
        <div class="logo">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
          </RouterLink>
        </div>

        <div class="menu d-none d-lg-block">
          <ul class="d-flex align-items-center justify-content-center gap-1 h-100 list-unstyled p-0 m-0">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><RouterLink to="/video">Video</RouterLink></li>
          </ul>
        </div>

        <div class="menu-last-item h-100 d-flex align-items-center justify-content-end">
          <button class="btn btn-primary rounded-0">Get Free Quote</button>
          <button class="btn btn-primary d-lg-none toggle-menu-button d-inline-flex align-items-center justify-content-center p-1 rounded-0" @click.stop.prevent="toggleMenu = !toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" v-if="!toggleMenu">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" v-else>
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
    <div class="mobile-menu shadow border-bottom d-lg-none" v-if="toggleMenu">
      <div class="container py-3">
        <ul class="m-0 p-0">
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/">Home</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/services">Services</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/about">About</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/blog">Blog</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/contact">Contact</RouterLink></li>
          <li><RouterLink class="text-dark text-decoration-none py-1 d-block px-3" to="/video">Video</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="header-space"></div>

  <RouterView />


  <footer class="clearfix footer-area">
    <div class="footer-top bg-light text-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui dignissimos voluptatem aperiam voluptate numquam quam consequatur repellat molestias, quisquam magni ipsum accusamus deleniti possimus.</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui dignissimos voluptatem aperiam voluptate numquam quam consequatur repellat molestias, quisquam magni ipsum accusamus deleniti possimus.</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui dignissimos voluptatem aperiam voluptate numquam quam consequatur repellat molestias, quisquam magni ipsum accusamus deleniti possimus.</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui dignissimos voluptatem aperiam voluptate numquam quam consequatur repellat molestias, quisquam magni ipsum accusamus deleniti possimus.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area bg-white text-dark">
      <div class="container">
        <div class="text-center py-3">
          &copy;Copyright 2025. All right reserved by <a href="javascript:void(0)">Rubel Mahmud</a>
        </div>
      </div>
    </div>
  </footer>

</template>
