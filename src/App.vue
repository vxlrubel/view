<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="clearfix fixed-top">
    <div class="container">
      <div class="navigation-bar">
        <div class="logo">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
        <div class="menu">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="header-space"></div>

  <RouterView />
</template>

<style scoped>

</style>
