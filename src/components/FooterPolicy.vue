<template>
  <ul class="list-unstyled p-0 m-0 text-center text-sm-start">
    <li><RouterLink to="/privacy-policy" class="text-decoration-none text-dark text-capitalize">Privacy Policy</RouterLink></li>
    <li><RouterLink to="/terms-conditions" class="text-decoration-none text-dark text-capitalize">Terms and Conditions</RouterLink></li>
    <li><RouterLink to="/refund-policy" class="text-decoration-none text-dark text-capitalize">Refund Policy</RouterLink></li>
    <li><RouterLink to="/service-provision-policy" class="text-decoration-none text-dark text-capitalize">Service Provision Policy</RouterLink></li>
    <li><RouterLink to="/cookie-policy" class="text-decoration-none text-dark text-capitalize">Cookie Policy</RouterLink></li>
  </ul>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>
<style scoped lang="scss">
  a:hover{
    color: var(--color-primary) !important;
  }
</style>
