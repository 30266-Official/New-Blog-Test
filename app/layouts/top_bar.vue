<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <h1 class="site-title">我的网站</h1>
      </div>
    </header>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #f8f9fa;
  padding: 15px 0;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.site-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.main-content {
  flex: 1;
  width: 100%;
}

@media (max-width: 768px) {
  .header {
    padding: 12px 0;
  }
  
  .site-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 10px 0;
  }
  
  .site-title {
    font-size: 1.1rem;
  }
  
  .header-content {
    padding: 0 15px;
  }
}
</style>