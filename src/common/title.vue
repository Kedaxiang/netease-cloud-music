<template>
  <div class="title-wrap">
    <p class="title">
      <slot></slot>
    </p>
    <p class="more">
      更多>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style lang="less" scoped>
.title-wrap {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #e1e1e2;
  justify-content: space-between;
  .title {
    font-size: 20px;
    color: #333;
  }
  .more {
    font-size: 15px;
    color: #666;
  }
}
</style>