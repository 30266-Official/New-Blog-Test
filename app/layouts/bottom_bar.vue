import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


<template>
  <footer class="footer">
    <div class="copyright">
      <p>© 2024-{{ currentYear }} 林七湖 | <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans" target="_blank">CC BY-NC 4.0</a> | <a href="https://icp.gov.moe/?keyword=20246111" target="_blank">萌ICP备20246111号</a></p>
      <p>Theme Test By 林七湖 | Powered By <a href="https://nuxtjs.org.cn/" target="_blank">Nuxt.js</a> | Lastest 2025.11.13</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}

.copyright {
  line-height: 1.6;
  color: #6c757d;
  font-size: 14px;
}

.copyright p {
  margin: 4px 0;
}

.copyright a {
  color: #6c757d;
  text-decoration: none;
}

.copyright a:hover {
  text-decoration: underline;
  color: #495057;
}
</style>