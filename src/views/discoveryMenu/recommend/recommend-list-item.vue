<template>
  <div class="list-item">
    <div class="img-wrap">
      <img :src="img" alt="">
      <div class="desc-wrap">
        <span class="desc">{{desc}}</span>
      </div>
      <PlayIcon class="play-icon">
        <i class="el-icon-caret-right"></i>
      </PlayIcon>
    </div>
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
import PlayIcon from '@/common/play-icon'
export default {
  props: {
    img: {
      type: String,
      default() {
        return ''
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    },
    desc: {
      type: String,
      default() {
        return ''
      }
    }
  },
  components: { 
    PlayIcon
  }
}
</script>

<style lang="less" scoped>
  .list-item {
    width: calc(20% - 8px);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    margin: 12px 0 32px;
    .img-wrap {
      width: 100%;
      margin-bottom: 8px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #e5e5e5;
      }
      .desc-wrap {
        padding: 6px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .4);
        transform: translateY(-100%);
        transition: all .3s;
        span {
          color: white;
        }
      }
      .play-icon {
        opacity: 0;
        position: absolute;
        right: 6px;
        bottom: 10px;
        font-size: 24px;
        transition: all .3s;
        color: #fff;
      }
      &:hover {
        .desc-wrap {
          transform:  translateY(0);
        }
        .play-icon {
          opacity: 1;
        }
      }
    }
    .name {
      font-size: 14px;
      color: #333;
    }
  }
</style>