<script>
import bottom_bar from './layouts/bottom_bar.vue'
//import top_bar from './layouts/top_bar.vue'

export default {
  name: 'App',
  components: {
    bottom_bar,
    //top_bar
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!--<top_bar />-->
  <bottom_bar />
</template>