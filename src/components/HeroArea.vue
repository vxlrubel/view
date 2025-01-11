
<template>
  <section class="clearfix hero-area">
    <div class="container">
      <div class="hero-content">
        <div class="custom-line-height mb-3">
            <div class="hero-title fw-bold text-uppercase">Web <span class="text-primary">Development</span></div>
            <div class="hero-subtitle">Applications & Design</div>
        </div>
        <p class="hero-description">We specialize in creating innovative websites, powerful web applications, and stunning designs to bring your digital vision to life. Let us help you build a strong online presence that drives success.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero-area{
    --animation-time: 0.5s;
    background-image: url('../assets/img/hero-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .container{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      height: calc(100dvh - var(--header-height));
      z-index: 2;
    }
  }
  .hero-content{
    width: 100%;
    max-width: 470px;
  }
  .custom-line-height{
    line-height: 3rem;
  }
  .hero-title{
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
    background: linear-gradient(to right, var(--color-primary), #EC5E95);
    -webkit-background-clip: text;
    background-clip: text;
    opacity: 0;
    animation: fadeInUpTitle var(--animation-time) forwards calc((var(--animation-time) / 2));
  }
  .hero-description{
    font-size: 1.225rem;
    opacity: 0;
    animation: contentFadeIn var(--animation-time) forwards calc((var(--animation-time) * 2) / 1.8);
  }
  @media(width < 992px){
    .hero-area{
      position: relative;
    }
    .hero-area::after{
      position: absolute;
      inset: 0;
      background-color: hsla(0, 0%, 100%, 0.3);
      backdrop-filter: blur(2px);
      z-index: 1;
    }
  }
  @media(width >= 768px){
    .hero-title{
      --title-font-size: 2.5rem;
    }
  }
  @media(width >= 992px){
    .hero-title{
      --title-font-size: 2.8rem;
    }
    .hero-subtitle {
      --font-size: 2rem;
    }
  }
  @keyframes fadeInUpTitle {
    0%{
      opacity: 0;
      transform: translateY(50px);
    }100%{
      opacity: 1;
      transform: none;
    }
  }
  @keyframes contentFadeIn {
    100%{opacity: 1;}
  }
</style>
