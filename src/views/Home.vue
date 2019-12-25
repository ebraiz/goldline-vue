<template>
  <div id="app">
    <!-- <img alt="Vue Logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Newarrivals />
    <Stlth />
  </div>
</template>

<script>
import Newarrivals from './components/Newarrivals';
import Stlth from './components/Stlth';

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Newarrivals,
    Stlth
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
