<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
