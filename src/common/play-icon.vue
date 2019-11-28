<template>
  <div :style="wrapStyle" class="icon-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 24,
    }
  },
  computed: {
    wrapStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    }
  }
}
</script>

<style scoped lang="less">
  .icon-wrap {
    border: 1px solid #fff;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
  }
  .icon-wrap:hover {
    background-color: rgba(0, 0, 0, .7);
  }
</style>