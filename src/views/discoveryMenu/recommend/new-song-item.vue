<template>
  <div class="song-item" :class="isHover()">
    <div class="order-wrap">
      <span class="order">{{getDoubleDigitOrder()}}</span>
    </div>
    <div class="img-wrap">
      <img :src="img" alt="">
      <PlayIcon class="play-icon">
        <i class="el-icon-caret-right"></i>
      </PlayIcon>
    </div>
    <div class="song-content">
      <p class="song-name">{{name}}</p>
      <p class="singer">{{getArtistsNames}}</p>
    </div>
  </div>
</template>

<script>
import PlayIcon from '@/common/play-icon'

export default {
  components: {
    PlayIcon
  },
  props: ["order", "name", "img", "artists","order","listLimit"], 
  methods: {
    isHover() {
      if(this.order % 2 === 0 && this.order <= this.listLimit) {
        return "deepBcg"
      } else if(this.order % 2 === 1 && this.order > this.listLimit) {
        return "deepBcg"
      } else {
        return "shallowBcg"
      }
    },
    getDoubleDigitOrder() {
      if(this.order < 10) {
        return `0${this.order}`
      } else {
        return this.order
      }
    }
  },
  computed: {
    getArtistsNames() {
      return (this.artists || []).map(({ name }) => name).join('/');
    },
  }
}
</script>

<style scoped lang="less">
  .deepBcg {
    background-color: #f5f5f7;
  }
  .shallowBcg {
    background-color: #fafafa;
  }
  .song-item {
    display: flex;
    cursor: pointer;
    padding: 8px;
    .order-wrap {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      .order {
        color: #999;
      }
    }
    .img-wrap {
      position: relative;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
      .play-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        color: red;
        font-size: 20px;
      }
    }
    .song-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      .song-name {
        font-size: 15px;
      }
      .singer {
        color: #968896;
        font-size: 12px;
      }
    }
    &:hover {
      background-color: #ebeced;
      .singer {
        color: #333;
      }
    }
  }
</style>