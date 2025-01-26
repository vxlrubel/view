<template>
  <section class="clearfix py-4 py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3 class="text-uppercase fs-6 text-primary what-we-do">What we do</h3>
        </div>
        <div class="col-md-9">
          <h3 class="fs-1 text-uppercase mb-3">Discover the Range of Services We Offer to Transform Your Digital Presence and Drive Success</h3>
          <p class="mb-4">
            We provide a comprehensive range of services designed to meet all your digital needs. From creating visually stunning and user-friendly websites to developing powerful, robust web applications, our expertise ensures your online presence is not just effective but exceptional. Whether you're looking to enhance user engagement, streamline business processes, or boost your brand's visibility, we have the skills and solutions to help your business grow and thrive in the digital world.
          </p>

          <div class="row" style="--bs-gutter-x: 1.5rem;--bs-gutter-y:1.5rem;">
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">Web Development</h2>
                <p class="m-0">
                  We build dynamic and responsive websites tailored to your brand, ensuring functionality and an exceptional user experience.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">Web Application Development</h2>
                <p class="m-0">
                  Our custom web applications are designed to streamline your operations and provide scalable solutions for your business.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">UI/UX Design</h2>
                <p class="m-0">
                  We create user-friendly designs that captivate your audience, delivering seamless and visually appealing experiences.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">E-Commerce Solutions</h2>
                <p class="m-0">
                  We design and develop e-commerce platforms that drive sales, offering secure payment integration and robust functionality.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">SEO Optimization</h2>
                <p class="m-0">
                  Our SEO strategies ensure your website ranks higher in search results, driving more organic traffic to your business.
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-xl-4">
              <div class="p-3 bg-light h-100 border service-box">
                <h2 class="fs-5">Maintenance & Support</h2>
                <p class="m-0">
                  We provide ongoing support and maintenance to keep your website running smoothly and up-to-date.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .service-box{
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
      box-shadow: 0px 48px 96px -24px rgba(0, 0, 0, 0.16);
      border-color: transparent !important;
    }
  }
  .what-we-do {
      position: sticky;
      top: var(--header-height);
  }
</style>
