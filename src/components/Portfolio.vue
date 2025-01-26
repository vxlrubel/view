<template>
  <section class="clearfix portfolio py-4 py-lg-5 bg-info">
    <div class="container">
      <TitleSubtitle
        title="Our"
        highlight="portfolio"
        subtitle="Showcasing Our Excellence – A Collection of Projects That Reflect Innovation, Creativity, and Dedication."
       />

       <div class="row" style="--bs-gutter-x: 1rem; --bs-gutter-y: 1rem;">
        <div class="col-md-6 col-lg-3" v-for="(item, index) in items" :key="index">
          <div class="border bg-white">
            <div class="ratio ratio-16x9 overflow-hidden">
              <div>
                <img :src="item?.src || 'placeholder.jpg'" alt="" class="w-100 h-100 object-fit-cover">
              </div>
            </div>
            <h3 class="fs-6 text-uppercase py-2 m-0 px-3 bg-light border-bottom text-truncate">{{ item.title }}</h3>
            <div class="p-3 pt-2">
              <div class="description">{{ item.desc }}</div>
            </div>
          </div>
        </div>
       </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import TitleSubtitle from '@/components/TitleSubtitle.vue';
  const items = ref([
    {
      id: 1,
      title: 'Innovative Web Solutions',
      desc: 'Explore our cutting-edge web development projects that combine creativity with functionality to deliver seamless user experiences.',
      src: 'https://img.freepik.com/free-vector/creative-web-homepage-illustration_52683-79847.jpg?t=st=1737915069~exp=1737918669~hmac=f923f90fe243bed7d94a8f3b51e03010dc91e8d5af7dcd7c32ee854d54b5c517&w=1380',
    },
    {
      id: 2,
      title: 'Mobile App Mastery',
      desc: 'Discover our expertise in crafting intuitive and high-performance mobile apps tailored to meet diverse business needs.',
      src: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149053807.jpg?t=st=1737915175~exp=1737918775~hmac=262333dfe480e250cb6a674e167062100df37ef74bf4c33499147f5dc2592425&w=1380',
    },
    {
      id: 3,
      title: 'Creative Design Excellence',
      desc: 'Dive into our portfolio of visually stunning designs that captivate audiences and convey powerful brand messages.',
      src: 'https://img.freepik.com/premium-photo/composite-image-furious-businesswoman-looking-camera_1134-49097.jpg?w=1380',
    },
    {
      id: 4,
      title: 'Tailored Tech Solutions',
      desc: 'Take a look at our custom technology solutions that empower businesses to overcome challenges and achieve their goals.',
      src: 'https://img.freepik.com/free-photo/hand-touching-screen-rpa-concept_23-2149311915.jpg?t=st=1737915315~exp=1737918915~hmac=ac5593d20c87b495035db79e4fe9ea0549cd8c17bae49a6caef72c36cd38232a&w=1380',
    },
  ]);
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>
