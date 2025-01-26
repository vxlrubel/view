<template>
  <ul class="list-unstyled p-0 m-0 text-center text-sm-start">
    <li>
      <RouterLink to="/" class="text-decoration-none text-dark text-capitalize">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/services" class="text-decoration-none text-dark text-capitalize"
        >services</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/portfolio" class="text-decoration-none text-dark text-capitalize"
        >portfolio</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/about" class="text-decoration-none text-dark text-capitalize"
        >about</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/blog" class="text-decoration-none text-dark text-capitalize"
        >blog</RouterLink
      >
    </li>
    <li>
      <RouterLink to="/contact" class="text-decoration-none text-dark text-capitalize"
        >contact</RouterLink
      >
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
a:hover {
  color: var(--color-primary) !important;
}
</style>
