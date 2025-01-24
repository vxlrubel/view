<template>
  <div class="clearfix partners-area bg-light py-4 py-lg-5">
    <div class="container">
      <div class="text-center site-header-title pb-3 pb-lg-4 mb-3 mb-lg-4">
        <h4 class="fs-4 text-uppercase">Our Trusted <span class="text-primary">Partners</span></h4>
        <p class="mb-0 mx-auto sub-title">Empowering Innovation Together – Collaborating with Industry Leaders to Deliver Exceptional Tech Solutions.</p>
      </div>

      <div class="css-image-slider">
        <div class="items-1" style="--slide-items: 1">
          <img src="./assets/img/slider/image-1.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-2" style="--slide-items: 2">
          <img src="./assets/img/slider/image-2.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-3" style="--slide-items: 3">
          <img src="./assets/img/slider/image-3.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-4" style="--slide-items: 4">
          <img src="./assets/img/slider/image-4.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-5" style="--slide-items: 5">
          <img src="./assets/img/slider/image-5.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-6" style="--slide-items: 6">
          <img src="./assets/img/slider/image-6.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-7" style="--slide-items: 7">
          <img src="./assets/img/slider/image-7.jpg" alt="slider image" class="slider-image">
        </div>
        <div class="items-8" style="--slide-items: 8">
          <img src="./assets/img/slider/image-8.jpg" alt="slider image" class="slider-image">
        </div>
      </div>


    </div>
  </div>
</template>


<script setup>
  const partners = [
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
  ];
</script>


<style scoped lang="scss">
  .site-header-title{
    --line-width: 9.375rem;
    --line-height: 3px;
    position: relative;
    &::after{
      position: absolute;
      height: var(--line-height);
      width: var(--line-width);
      bottom: 0;
      left: calc( 50% - calc(var(--line-width) / 2 ));
      background-color: var(--color-primary);
      content: '';
    }
  }
  .sub-title{
    max-width: 540px;
  }


  // animation
  .css-image-slider{
    --item-height: 12.5rem;
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
      --total-item: 8;
      --item-width: 18.75rem;
      --item-height: 12.5rem;
      position: absolute;
      width: var(--item-width);
      height: var(--item-height);
      border-radius: 1.5rem;
      background: var(--theme);
      left: max(calc(var(--item-width) * var(--total-item)), 100%);
      animation-name: scroll-left;
      animation-duration: 30s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-delay: calc(30s / var(--total-item) * (var(--total-item) - var(--slide-items)) * -1);
      -webkit-border-radius: 1.5rem;
      -moz-border-radius: 1.5rem;
      -ms-border-radius: 1.5rem;
      -o-border-radius: 1.5rem;
  }
  .css-image-slider [class*="items-"]:nth-child(odd){
      background: hsl(240, 100%, 90%);
  }
  .css-image-slider [class*="items-"]:nth-child(even){
      background: hsl(240, 100%, 80%);
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
