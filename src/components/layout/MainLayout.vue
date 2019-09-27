<template>
  <div class="layout">
    <Header/>
    <div class="layout-body">
      <Aside class="aside"/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Aside from './Aside'

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="less" scoped>
  .layout {
    height: 100%;
    .layout-body {
      display: flex;
      height: calc(100% - 60px);
      .aside {
        flex: 1;
        max-width: 200px
      }
      .content {
        flex: 1;
        overflow-y: auto;
      }
    }
  }
</style>