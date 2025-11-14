<script>
import bottom_bar from './layouts/bottom_bar.vue'

export default {
  name: 'App',
  components: {
    bottom_bar
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <bottom_bar />
</template>