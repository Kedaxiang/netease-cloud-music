<template>
  <div class="aside">
    <div class="bar-title">推荐</div>
    <div class="choose-bar" 
          v-for="(item, index) in recommendList"
          :key="index"
          ref="relist"
          @click="recommendSelected(index)">
      <div class="redBox" style="visibility: hidden"></div>
      <img :src="item.src" alt="">
      {{item.info}}
    </div>
    <div class="bar-title">我的音乐</div>
    <div class="choose-bar"
          v-for="(item, index) in myMusicList"
          :key="item.info"
          ref="musiclist"
          @click="musicListSelected(index)">
      <div class="redBox" style="visibility: hidden"></div>
      <img :src="item.src" alt="">
      {{item.info}}
    </div>
    <div class="bar-title">创建的歌单</div>
          <div class="choose-bar"
          v-for="(item, index) in songList"
          :key="item.defaultSrc"
          ref="songlist"
          @click="SongListselected(index)">
      <div class="redBox" style="visibility: hidden"></div>
      <img :src="item.src" alt="">
      {{item.info}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {src: '', defaultSrc: require('assets/img/discover.png'), activedSrc: require('assets/img/discover-actived.png'), info: '发现音乐', path: '/discovery'},
        {src: '', defaultSrc: require('assets/img/FM.png'), activedSrc: require('assets/img/FM-actived.png'), info: '私人FM', path: '/FM'},
        {src: '', defaultSrc: require('assets/img/live.png'), activedSrc: require('assets/img/live-actived.png'), info: 'LOOK直播', path: '/live'},
        {src: '', defaultSrc: require('assets/img/video.png'), activedSrc: require('assets/img/video-actived.png'), info: '视频', path: '/video'},
        {src: '', defaultSrc: require('assets/img/friends.png'), activedSrc: require('assets/img/friends-actived.png'), info: '朋友', path: '/friends'}
      ],
      myMusicList: [
        {src: '', defaultSrc: require('assets/img/local.png'), activedSrc: require('assets/img/local-actived.png'), info: '本地音乐', path: '/local'},
        {src: '', defaultSrc: require('assets/img/download.png'), activedSrc: require('assets/img/download-actived.png'), info: '下载管理', path: '/download'}
      ],
      songList: [
        {src: '', defaultSrc: require('assets/img/like.png'), activedSrc: require('assets/img/like-actived.png'), info: '我喜欢的音乐', path: '/like'},
      ]
    }
  },
  methods: {
    init() {
      for(let item of this.recommendList) {
        item.src = item.defaultSrc
      }
      for(let item of this.myMusicList) {
        item.src = item.defaultSrc
      }
      for(let item of this.songList) {
        item.src = item.defaultSrc
      }
    },
    //推荐下的点击事件以及hover事件
    recommendSelected(index) {
      this.clearAll()
      this.$refs.relist[index].style.color = '#000'
      this.$refs.relist[index].style.backgroundColor = '#e6e7ea'
      this.$refs.relist[index].querySelectorAll('div.redBox')[0].style.visibility = 'visible'
      this.recommendList[index].src = this.recommendList[index].activedSrc
      this.$router.push({
        path: this.recommendList[index].path
      })
    },
    //我的音乐下的点击事件以及hover事件
    musicListSelected(index) {
      this.clearAll()
      this.$refs.musiclist[index].style.color = '#000'
      this.$refs.musiclist[index].style.backgroundColor = '#e6e7ea'
      this.$refs.musiclist[index].querySelectorAll('div.redBox')[0].style.visibility = 'visible'
      this.myMusicList[index].src = this.myMusicList[index].activedSrc
      this.$router.push({
        path: this.myMusicList[index].path
      })
    },
    //歌单下的点击事件以及hover事件
    SongListselected(index) {
      this.clearAll()
      this.$refs.songlist[index].style.color = '#000'
      this.$refs.songlist[index].style.backgroundColor = '#e6e7ea'
      this.$refs.songlist[index].querySelectorAll('div.redBox')[0].style.visibility = 'visible'   
      this.songList[index].src = this.songList[index].activedSrc
      this.$router.push({
        path: this.songList[index].path
      })
    },
    //清除各个目录下的点击的样式
    clearAll() {
      for(let item of this.$refs.relist) {
        item.style.color = '#5c5c5c'
        item.style.backgroundColor = '#f5f5f7'
        item.querySelectorAll('div.redBox')[0].style.visibility = 'hidden'
      }
      for(let item of this.recommendList) {
        item.src = item.defaultSrc
      }
      for(let item of this.$refs.musiclist) {
        item.style.color = '#5c5c5c'
        item.style.backgroundColor = '#f5f5f7'
        item.querySelectorAll('div.redBox')[0].style.visibility = 'hidden'
      }
      for(let item of this.myMusicList) {
        item.src = item.defaultSrc
      }
      for(let item of this.$refs.songlist) {
        item.style.color = '#5c5c5c'
        item.style.backgroundColor = '#f5f5f7'
        item.querySelectorAll('div.redBox')[0].style.visibility = 'hidden'
      }
      for(let item of this.songList) {
        item.src = item.defaultSrc
      }
    },
  },
  created() {
    this.init()
  },
  mounted() {
    this.recommendSelected(0)
  }
}
</script>

<style lang="less" scoped>
.aside {
  width: 200px;
  background-color: #f5f5f7;
  border-right: 1px solid #e1e1e2;
  box-sizing: border-box;
  .bar-title {
    font-size: 13px;
    color: #7d7d7d;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f7;
    padding-left: 13px;
    box-sizing: border-box;
  }
  .choose-bar {
    height: 40px;
    widows: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #5c5c5c;
    cursor: pointer;
    .redBox {
      width: 4px;
      height: 100%;
      background-color: #c62f2f;
    }
    img {
      margin-left: 18px;
      margin-right: 15px;
    }
    &:hover {
      background-color: #e6e7ea;
    }
  }
}
</style>