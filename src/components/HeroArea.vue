
<template>
  <section class="clearfix hero-area">
    <div class="container">

      <div class="hero-content">
        <h2>Web Design & Development</h2>
        <p>Web Design & Development involves crafting visually appealing, responsive, and user-friendly websites tailored to meet diverse needs. From intuitive layouts and innovative designs to robust functionality and seamless performance, it blends creativity with technical expertise to deliver engaging digital experiences that leave a lasting impression."</p>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">

.hero-area{
  background-image: url(https://img.freepik.com/free-photo/stylish-young-modern-woman-look-amazed-pointing-finger-left-aside-copyspace-showing-promo-text-st_1258-122339.jpg?t=st=1735574630~exp=1735578230~hmac=cda00c8793e39cc55ee544d6d474b22170e2a947fd4fe8907c9594976965383f&w=1800);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  .container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    height: calc(100dvh - var(--header-height));

  }
}

.hero-content{
  width: 100%;
  max-width: 540px;
  background-color: hsla(0, 0%, 0%, 0.3);
  backdrop-filter: blur(5px);
  padding: 2rem;
}

</style>
