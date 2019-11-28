<template>
  <div class="banner-container"
       :style="bannerStyle"
       ref="banner">
      <div class="banner-content" :class="mask ? 'mask' : ''">
        <div class="banner" 
             v-for="(item, index) in list" 
             :key="index"
             :class="setClass(index)"
             @click="onClick(index)"
             :style="setImg(item.imageUrl)"
             @mouseover="pause()"
             @mouseout="play()">
        </div>
        <i v-show="isShowArrow" 
           class="el-icon-arrow-left arrow"
           @click="prev()"
           @mouseover="pause()"
           @mouseout="play()"/>
        <i v-show="isShowArrow" 
           class="el-icon-arrow-right arrow"
           @click="next()"
           @mouseover="pause()"
           @mouseout="play()"/>
      </div>
      <div class="dots" v-if="showDots">
        <span v-for="(item, index) in list" 
              :key="index"
              :style="setActiveDot(index)"
              @mouseover="dotsHover(index)"
              @mouseout="play()">
        </span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      mask: true,
      autoPlay: true,
      showDots: true,
      isShowArrow: false,
      list: [

      ],
      bannerList: [],
      currentIndex: 0,
      timer: null,
    }
  },
  computed: {
    bannerStyle() {
      return {
        backgroundSize: '100% 100%'
      }
    }
  },
  methods: {
    setClass(index) {
      let next = this.currentIndex === (this.list.length - 1) ? 0 : this.currentIndex + 1;
      let pre = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
      switch(index) {
        case this.currentIndex:
          return 'active';
        case next:
          return 'next';
        case pre: 
          return 'pre';
      }
    },
    setActiveDot(index) {
      return index == this.currentIndex ? {
        backgroundColor: 'rgb(248, 85, 85)'
      } : {
        backgroundColor: '#ccc'
      }
    },
    setImg(src) {
      return {
        backgroundImage: `url(${src})`
      }
    },
    //轮播图自动轮播等业务逻辑
    play() {
      // this.pause();
      if(this.autoPlay) {
        this.timer = setInterval(() => {
          this.next();
        }, 4000)
      }
      this.isShowArrow = false
    },
    pause() {
      clearInterval(this.timer)
      this.isShowArrow = true
    },
    next() {
      this.currentIndex = ++this.currentIndex % this.list.length;
    },
    prev() {
      this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1
    },
    //点击事件
    onClick(index) {
      if(index == this.currentIndex) {
        console.log(index)
      } else {
        let clickClsname = this.bannerList[index].className.split(' ')[1]
        if(clickClsname === 'next') {
          this.next()
        } else {
          this.prev()
        }
      }
      console.log(this.isShowArrow)
    },
    dotsHover(index) {
      this.currentIndex = index;
      this.pause()
    }
  },
  mounted() {
    this.play()
    this.bannerList = this.$refs.banner.querySelectorAll('div.banner');
    axios.defaults.baseURL = 'http://localhost:3000'
    axios({
      url: '/banner?type=0'
    }).then(res => {
      console.log(res.data)
      this.list = res.data.banners
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scope>
  * {
    margin: 0;
    padding: 0;
  }
  .banner-container {
    height: 260px;
    text-align: center;
    position: relative;
    padding: 10px 0;
    margin: auto;
    -moz-perspective: 900px;
    perspective: 900px;
    .banner-content {
      position: relative;
      width: 100%;
      height: calc(100% - 20px);
      left: 0;
      top: 0;
      background-size: inherit;
      .banner {
        position: absolute;
        top: 0;
        left: 50%;
        width: 65%;
        height: 100%;
        transition: 500ms all ease-in-out;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: inherit;
        transform: translate3d(-70%, 0, -100px);
        -moz-transform: translate3d(-70%, 0, -100px);
        -webkit-transform: translate3d(-70%, 0, -100px);
        z-index: 1;
        &:before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0,0,0,0);
          transition-delay: 100ms!important;
          transition: all 500ms;
          cursor: pointer;
        }
      }
      .active {
        transform: translate3d(-50%, 0, 0);
        -moz-transform: translate3d(-50%, 0, 0);
        -webkit-transform: translate3d(-50%, 0, 0);
        z-index: 20;
      }
      .pre {
        transform: translate3d(-85%, 0, -100px);
        -moz-transform: translate3d(-85%, 0, -100px);
        -webkit-transform: translate3d(-85%, 0, -100px);
        z-index: 19;
      }
      .next {
        transform: translate3d(-15%, 0, -100px);
        -moz-transform: translate3d(-15%, 0, -100px);
        -webkit-transform: translate3d(-15%, 0, -100px);
        z-index: 18
      }
      .el-icon-arrow-left {
        position: absolute;
        z-index: 21;
        left: 7%;
      }
      .el-icon-arrow-right {
        position: absolute;
        z-index: 21;
        right: 7%;
      }
      .arrow {
        color: rgba(255, 255, 255, 0.5);
        width: 20px;
        height: 40px;
        font-size: 40px;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
        }
      }
    }
    .dots {
      width: 100%;
      height: 20px;
      span {
        display: inline-block;
        width: 20px;
        height: 5px;
        margin: 1px 3px;
        cursor: pointer;
      }
    }
  }
</style>