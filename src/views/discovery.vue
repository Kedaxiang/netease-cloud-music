<template>
  <div>
    <div class="banner-wrap">
      <Banner class="banner"/>
    </div>
  </div>
</template>

<script>
import Banner from 'components/content/Banner'

export default {
  data() {
    return {
      
    }
  },
  components: {
    Banner
  },
  methods: {

  },
}
</script>

<style>
  .banner {
    margin: 0 auto;
    width: 1000px;
  }
</style>