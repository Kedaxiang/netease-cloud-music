<template>
  <div class="layout">
    <Header/>
    <div class="layout-body">
      <Aside/>
      <div class="content">
        <router-view></router-view>
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
      .menu {
        box-sizing: border-box;
      }
      .content {
        flex: 1
      }
    }
  }
</style>