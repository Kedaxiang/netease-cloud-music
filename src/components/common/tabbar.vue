<template>
  <div class="tab-bar" ref="tabbar">
    <div class="tab-bar-item"
         v-for="(item, index) in discoveryList"
         :key="item.name"
         @click="toDetail(index)">
      {{item.name}}
      <div class="redLine" v-show="item.isShow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discoveryList: [
        {name: '个性推荐', path: '/discovery/recommend', isShow: false},
        {name: '歌单', path: '/discovery/songList', isShow: false},
        {name: '主播电台', path: '/discovery/DJstation', isShow: false},
        {name: '排行榜', path: '/discovery/rank', isShow: false},
        {name: '歌手', path: '/discovery/singers', isShow: false},
        {name: '最新音乐', path: '/discovery/newMusic', isShow: false}
      ]
    }
  },
  methods: {
    toDetail(index) {
      this.clearSelected()
      let selected = this.$refs.tabbar.querySelectorAll('div.tab-bar-item')[index];
      selected.style.color = '#c62f2f';
      this.discoveryList[index].isShow = true;
      this.$router.push({
        path: this.discoveryList[index].path
      })
    },
    clearSelected() {
      for(let item of this.$refs.tabbar.querySelectorAll('div.tab-bar-item')) {
        item.style.color = '#333'
      }
      for(let item of this.discoveryList) {
        item.isShow = false
      }
    }
  },
  mounted() {
    this.toDetail(0);
  }
}
</script>

<style lang="less" scoped>
  .tab-bar {
    height: 56px;
    width: calc(100% - 60px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 320px;
    border-bottom: 1px solid #e1e1e2;
    .tab-bar-item {
      height: 100%;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      .redLine {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #c62f2f;
      }
    }
  }
</style>