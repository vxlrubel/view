<template>
  <footer class="clearfix footer-area">
    <div class="footer-top text-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center text-sm-start">
            <RouterLink to="/" class="footer-logo d-inline-block user-select-none">
              <img alt="Vue logo" class="img-fluid" src="@/assets/img/logo-dark.webp" />
            </RouterLink>
            <hr />
            <div class="mb-3">
              <i class="small"><span class="fw-bold">Address:</span> Uttara-6, Dhaka-1212</i><br />
              <i class="small"><span class="fw-bold">Phone:</span> +880 1625-601619</i><br />
            </div>
            <h4 class="fs-5 pb-1 border-bottom">Social Share:</h4>
            <SocialShare />
          </div>
          <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <h3 class="fs-4 text-capitalize user-select-none text-center text-sm-start">Pages</h3>
            <hr />
            <FooterPageList />
          </div>
          <div class="col-sm-6 col-lg-3 mb-4 mb-sm-0">
            <h3 class="fs-4 text-capitalize user-select-none text-center text-sm-start">
              Policy Pages
            </h3>
            <hr />
            <FooterPolicy />
          </div>
          <div class="col-sm-6 col-lg-3">
            <h3 class="fs-4 text-capitalize user-select-none text-center text-sm-start">
              Subscribe Us
            </h3>
            <hr />
            <p class="small text-italic text-center text-sm-start">
              Stay updated with the latest news, updates, and exclusive content. Subscribe to us and
              never miss out!
            </p>
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area text-dark">
      <div class="container">
        <div class="text-center py-3">
          &copy;Copyright {{ currentYear }}. All right reserved by
          <a href="javascript:void(0)" class="text-decoration-none text-primary fw-bold"
            >Rubel Mahmud</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SocialShare from '@/components/SocialShare.vue'
import FooterPageList from '@/components/FooterPageList.vue'
import FooterPolicy from '@/components/FooterPolicy.vue'
import Subscribe from '@/components/Subscribe.vue'

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer-area {
  .footer-top {
    background-color: hsl(var(--hue), var(--saturation), 97%);
  }
  .footer-logo {
    width: 7.5rem;
  }
  .copyright-area {
    background-color: hsl(var(--hue), var(--saturation), 93%);
  }
}
</style>
