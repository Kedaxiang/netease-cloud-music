<template>
  <div class="list-wrap">
    <div class="list-item"
        v-for="item in list"
        :key="item.name">
      <div class="img-wrap">
        <img :src="item.sPicUrl" alt="">
        <PlayIcon class="play-icon" :size='30'>
          <i class="el-icon-video-camera"></i>
        </PlayIcon>
      </div>
      <p class="name">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import PlayIcon from '@/common/play-icon'

export default {
  components: {
    PlayIcon
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    Axios.defaults.baseURL = 'http://localhost:3000'
    Axios({
      url: '/personalized/privatecontent'
    }).then(res => {
      this.list = res.data.result;
    }).catch(err => {
      console.log(err)
    })
  }

}
</script>

<style lang="less" scoped>
  .list-wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    cursor: pointer;
    margin: 10px 0 50px;
    width: 100%;
    .list-item {
      width: calc(33% - 8px);
      .img-wrap {
        position: relative;
        .play-icon {
          position: absolute;
          top: 4px;
          left: 6px;
          color: #fff;
        }
        img {
          height: 100%;
          width: 100%;
          border: 1px solid #e5e5e5;
        }
      }
      .name {
        font-size: 14px;
        color: #333;
      }
    }
  }
</style>