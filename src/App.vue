<template>
  <div id="app">
    <main-layout></main-layout>
  </div>
</template>

<script>
  import MainLayout from './components/layout/MainLayout'

  export default {
    name: 'app',
    components: {
      MainLayout
    }
  }
</script>

<style lang="less">
  @import "assets/css/base.css";

  #app {
    height: 100%;
  }
</style>
