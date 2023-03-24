<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <svg>
    <use xlink:href="#icon_details"></use>
  </svg>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import './assets/icons-svg/icon_details.svg'
// eslint-disable-next-line no-unused-vars
// import test  from  '@/assets/icons-svg/icon_details.svg'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
