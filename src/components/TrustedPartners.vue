<template>
  <div class="clearfix partners-area bg-light py-4 py-lg-5">
    <div class="container">
      <TitleSubtitle
        title="Our Trusted"
        highlight="Partners"
        subtitle="Empowering Innovation Together - Collaborating with Industry Leaders to Deliver Exceptional Tech Solutions."
       />

      <div class="css-image-slider user-select-none">
        <div :class="`items-${partner.id}`" v-for="(partner, index) in partners" :key="index" :style="`--slide-items: ${partner.id}`">
          <img :src="partner.src" :alt="partner.title" class="slider-image">
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';
import TitleSubtitle from '@/components/TitleSubtitle.vue';

  const partners = ref([
    {
      id: 1,
      title: 'image 1',
      src: 'image-1.jpg'
    },
    {
      id: 2,
      title: 'image 2',
      src: 'image-2.jpg'
    },
    {
      id: 3,
      title: 'image 3',
      src: 'image-3.jpg'
    },
    {
      id: 4,
      title: 'image 4',
      src: 'image-4.jpg'
    },
    {
      id: 5,
      title: 'image 5',
      src: 'image-5.jpg'
    },
    {
      id: 6,
      title: 'image 6',
      src: 'image-6.jpg'
    },
    {
      id: 7,
      title: 'image 7',
      src: 'image-7.jpg'
    },
    {
      id: 8,
      title: 'image 8',
      src: 'image-8.jpg'
    },
  ]);
</script>


<style scoped lang="scss">
  .css-image-slider{
    --item-height: 6rem;
    --total-item: 8;
    --item-width: 15rem;
    --border-radius: .5rem;
    --animation_duration: 30s;
    position: relative;
    height: var(--item-height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        rgba(0,0,0,0),
        rgba(0,0,0,1) 20%,
        rgba(0,0,0,1) 80%,
        rgba(0,0,0,0)
    );
  }

  .css-image-slider [class*="items-"]{
      position: absolute;
      width: var(--item-width);
      height: var(--item-height);
      border-radius: var(--border-radius);
      background: var(--theme);
      left: max(calc(var(--item-width) * var(--total-item)), 100%);
      animation-name: scroll-left;
      animation-duration: var(--animation_duration);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-delay: calc(var(--animation_duration) / var(--total-item) * (var(--total-item) - var(--slide-items)) * -1);
      -webkit-border-radius: var(--border-radius);
      -moz-border-radius: var(--border-radius);
      -ms-border-radius: var(--border-radius);
      -o-border-radius: var(--border-radius);
  }
  .css-image-slider [class*="items-"]:nth-child(odd){
      background: hsl(var(--hue), var(--saturation), 70%);
  }
  .css-image-slider [class*="items-"]:nth-child(even){
      background: hsl(var(--hue), var(--saturation), 90%);
  }

  .css-image-slider:hover [class*="items-"]{
      animation-play-state: paused;
  }

  @keyframes scroll-left {
      to{
          left: -18.75rem;
      }
  }
  .css-image-slider .slider-image{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 1.5rem;
      -webkit-border-radius: 1.5rem;
      -moz-border-radius: 1.5rem;
      -ms-border-radius: 1.5rem;
      -o-border-radius: 1.5rem;
  }

</style>
