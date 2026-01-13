<template>
  <div class="background-animation">
    <BackgroundAnimation/>
  </div>  
  <AppHeader class="app-header"/>
  <div class="container">

    <main>
      <router-view/>
    </main>
  </div>
  <AppFooter class="app-footer"/>
</template>

<script>
import './assets/styles/fonts.css';
import BackgroundAnimation from './components/BackgroundAnimation.vue';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';

export default {
    components: {
      BackgroundAnimation,
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.app-header,
.app-footer {
  position: relative;
  z-index: 3;
}

.container {
  width: 100%;
  max-width: 1620px;
  margin: 0 auto;
  position: relative;
}
</style>
