
<template>
  <footer class="clearfix footer-area">
      <div class="footer-top bg-light text-dark py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <RouterLink to="/" class="footer-logo d-inline-block user-select-none">
                <img alt="Vue logo" class="img-fluid" src="@/assets/logo.svg" />
              </RouterLink>
              <hr>
              <div class="mb-3">
                <i class="small"><span class="fw-bold">Address:</span> Uttara-6, Dhaka-1212</i><br>
                <i class="small"><span class="fw-bold">Phone:</span> +880 1625-601619</i><br>
              </div>
              <h4 class="fs-5 pb-1 border-bottom">Social Share:</h4>
              <SocialShare />
            </div>
            <div class="col-sm-6 col-lg-3">
              <h3 class="fs-4 text-capitalize user-select-none">Pages</h3>
              <hr>
              <FooterPageList />
            </div>
            <div class="col-sm-6 col-lg-3">
              <h3 class="fs-4 text-capitalize user-select-none">Policy Pages</h3>
              <hr>
              <FooterPolicy />
            </div>
            <div class="col-sm-6 col-lg-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui dignissimos voluptatem aperiam voluptate numquam quam consequatur repellat molestias, quisquam magni ipsum accusamus deleniti possimus.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area bg-white text-dark">
        <div class="container">
          <div class="text-center py-3">
            &copy;Copyright 2025. All right reserved by <a href="javascript:void(0)">Rubel Mahmud</a>
          </div>
        </div>
      </div>
    </footer>
</template>


<script setup>
  import { RouterLink } from 'vue-router';
  import SocialShare from '@/components/SocialShare.vue'
  import FooterPageList from '@/components/FooterPageList.vue'
  import FooterPolicy from '@/components/FooterPolicy.vue'
</script>

<style lang="scss" scoped>
  .footer-logo{
    width: 7.5rem;
  }

</style>
