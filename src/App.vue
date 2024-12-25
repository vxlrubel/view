<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted, onBeforeUnmount } from 'vue'


  let mobileView = ref(window.innerWidth < 992);

  const updateMobileView = () => {
    mobileView.value = window.innerWidth < 992;
  };

  onMounted(() => {
    window.addEventListener('resize', updateMobileView);
    updateMobileView();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateMobileView);
  });

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
          <ul class="d-flex align-items-center justify-content-center gap-1 h-100 list-unstyled p-0 m-0" v-if="!mobileView">
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
        </div>
      </div>
    </div>
    <div class="mobile-menu shadow border-bottom" v-if="mobileView">
      <div class="container">
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
</template>
