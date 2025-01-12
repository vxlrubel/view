<template>
  <div class="d-flex align-items-center gap-1">
      <a href="javascript:void(0)" class="d-inline-flex align-items-center justify-content-center f_social-link">
        <Facebook />
      </a>
      <a href="javascript:void(0)" class="d-inline-flex align-items-center justify-content-center f_social-link">
        <Twitter />
      </a>
      <a href="javascript:void(0)" class="d-inline-flex align-items-center justify-content-center f_social-link">
        <Linkedin />
      </a>
      <a href="javascript:void(0)" class="d-inline-flex align-items-center justify-content-center f_social-link">
        <Whatsapp />
      </a>
  </div>
</template>

<script setup>
  import Facebook from '@/components/icons/Facebook.vue'
  import Twitter from '@/components/icons/Twitter.vue'
  import Linkedin from '@/components/icons/Linkedin.vue'
  import Whatsapp from '@/components/icons/Whatsapp.vue'
</script>

<style lang="scss" scoped>
  .f_social-link{
    --width: 2rem;
    height: var(--width);
    width: var(--width);
    background-color: var(--color-primary);
    overflow: hidden;
    border-radius: 0.2rem;
    color: white;
    border: 1px solid var(--color-primary);
    transition: backgroud-color 0.125s ease-in-out, color 0.15s ease-in-out;
    svg{
      fill: currentColor;
      height: calc(var(--width) - 12px);
      height: calc(var(--width) - 12px);
    }
    &:hover{
      color: var(--color-primary);
      background-color: #fff;
    }
  }
</style>
