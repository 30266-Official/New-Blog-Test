<script lang="ts">
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
<!--<script setup lang="ts">
const { data } = await useFetch('/api/TencentAPI')
</script>-->
<template>
  <!--<p>服务器到期时间：{{ data }}</p>-->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!--<top_bar />-->
  <bottom_bar />
</template>