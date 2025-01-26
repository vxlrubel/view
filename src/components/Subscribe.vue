<template>
  <form class="subscribe-form" @submit.prevent="handleSubmit">
    <div class="input-group flex-nowrap border">
      <span class="input-group-text border-0 rounded-0 bg-primary text-white">@</span>
      <input
        type="email"
        class="form-control shadow-none rounded-0 border-0"
        placeholder="Email Address"
        v-model="emailAddress"
        required
      />
    </div>

    <div
      class="mt-2 d-flex align-items-center gap-3 justify-content-center justify-content-sm-start"
    >
      <button
        type="submit"
        class="btn btn-primary rounded-0 px-3"
        :disabled="loading ? true : false"
      >
        <PaperPlane />
        Subscribe
      </button>
      <div class="spinner-border text-primary" role="status" v-if="loading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div
      v-if="notice"
      class="alert alert-success rounded-0 py-2 mt-2 border-0 border-start border-5 border-success"
    >
      Subscription Successfull.
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import PaperPlane from '@/components/icons/PaperPlane.vue'
const emailAddress = ref('')
const loading = ref(false)
const notice = ref('')

const handleSubmit = () => {
  loading.value = true

  // Simulate API call or processing
  setTimeout(() => {
    emailAddress.value = ''
    loading.value = false
    notice.value = true
  }, 1000)

  setTimeout(() => {
    notice.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.input-group:has(:focus) {
  border-color: var(--color-primary) !important;
  box-shadow: 0 0 5px 0 var(--color-primary);
}
.spinner-border {
  --bs-spinner-width: 1.5rem;
  --bs-spinner-height: 1.5rem;
}
</style>
