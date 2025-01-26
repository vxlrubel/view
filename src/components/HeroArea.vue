<template>
  <section class="clearfix hero-area position-relative" ref="effectRefrence">
    <div class="container">
      <div class="hero-content">
        <div class="custom-line-height mb-3">
          <div class="hero-title fw-bold text-uppercase">
            Web <span class="text-primary">Development</span>
          </div>
          <div class="hero-subtitle">Applications & Design</div>
        </div>
        <p class="hero-description">
          We specialize in creating innovative websites, powerful web applications, and stunning
          designs to bring your digital vision to life. Let us help you build a strong online
          presence that drives success.
        </p>

        <div class="action-button mt-5">
          <RouterLink
            to="/services"
            class="btn btn-primary d-inline-flex align-items-center gap-2 text-uppercase py-2 px-4 rounded-0"
          >
            <span>See All Services</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { characterCursor } from 'cursor-effects'
const effectRefrence = ref(null)

onMounted(() => {
  new characterCursor({
    element: effectRefrence.value,
    characters: ['✩', '✰', '☆', '⛧', '⛤', '✶', '☆', 'T', 'E', 'C', 'H', 's', 'p', 'a'],
    font: '15px serif',
    colors: [
      '#843CDD',
      '#4379F2',
      '#E63870',
      '#006BFF',
      '#6C48C5',
      '#EF5A6F',
      '#615EFC',
      '#FC4100',
      '#D20062',
      '#FF407D',
      '#F4F27E',
      '#ff0054',
      '#7b2cbf',
      '#e0aaff',
    ],
    characterLifeSpanFunction: () => Math.floor(Math.random() * 60 + 80),
    initialCharacterVelocityFunction: () => ({
      x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
      y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
    }),
    characterVelocityChangeFunctions: {
      x_func: (age, lifeSpan) => (Math.random() < 0.5 ? -1 : 1) / 30,
      y_func: (age, lifeSpan) => (Math.random() < 0.5 ? -1 : 1) / 15,
    },
    characterScalingFunction: (age, lifeSpan) => {
      let lifeLeft = lifeSpan - age
      return Math.max((lifeLeft / lifeSpan) * 2, 0)
    },
    characterNewRotationDegreesFunction: (age, lifeSpan) => {
      let lifeLeft = lifeSpan - age
      return lifeLeft / 5
    },
  })
})
</script>

<style scoped lang="scss">
.hero-area {
  --animation-time: 0.5s;
  background-image: url('../assets/img/hero-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    height: calc(100dvh - var(--header-height));
    z-index: 2;
  }
}
.hero-content {
  width: 100%;
  max-width: 470px;
}
.custom-line-height {
  line-height: 3rem;
}
.hero-title {
  --title-font-size: 2.165rem;
  font-size: var(--title-font-size);
  text-shadow: 2px 3px 1px white;
  opacity: 0;
  animation: fadeInUpTitle var(--animation-time) forwards;
}
.hero-subtitle {
  --font-size: 1.7rem;
  font-size: var(--font-size);
  text-transform: uppercase;
  font-weight: 600;
  color: transparent;
  background: linear-gradient(to right, var(--color-primary), #ec5e95);
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0;
  animation: fadeInUpTitle var(--animation-time) forwards calc((var(--animation-time) / 2));
}
.hero-description {
  font-size: 1.225rem;
  opacity: 0;
  animation: contentFadeIn var(--animation-time) forwards calc((var(--animation-time) * 2) / 1.8);
}
.action-button {
  opacity: 0;
  animation: fadeInUpTitle var(--animation-time) forwards calc((var(--animation-time) * 3) / 2);
}
@media (width < 992px) {
  .hero-area {
    position: relative;
  }
  .hero-area::after {
    position: absolute;
    inset: 0;
    background-color: hsla(0, 0%, 100%, 0.3);
    backdrop-filter: blur(2px);
    z-index: 1;
  }
}
@media (width >= 768px) {
  .hero-title {
    --title-font-size: 2.5rem;
  }
}
@media (width >= 992px) {
  .hero-title {
    --title-font-size: 2.8rem;
  }
  .hero-subtitle {
    --font-size: 2rem;
  }
}
@keyframes fadeInUpTitle {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes contentFadeIn {
  100% {
    opacity: 1;
  }
}
</style>
