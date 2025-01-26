<template>
  <div class="text-center site-header-title pb-3 pb-lg-4 mb-3 mb-lg-4">
    <h4 class="fs-4 text-uppercase">
      {{ title }} <span class="text-primary">{{ highlight }}</span>
    </h4>
    <p class="mb-0 mx-auto sub-title">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
})
</script>

<style scoped>
.site-header-title {
  --line-width: 9.375rem;
  --line-height: 3px;
  position: relative;
  &::after {
    position: absolute;
    height: var(--line-height);
    width: var(--line-width);
    bottom: 0;
    left: calc(50% - calc(var(--line-width) / 2));
    background-color: var(--color-primary);
    content: '';
  }
}
.sub-title {
  max-width: 540px;
}
</style>
