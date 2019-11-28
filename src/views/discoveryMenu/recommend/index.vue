<template>
  <div class="recommend-box">
    <Banner/>
    <div class="recommond">
      <Title>推荐歌单</Title>
      <RecommendList/>
    </div>
    <div class="exclusive">
      <Title>独家放送</Title>
      <Exclusive/>
    </div>
    <div class="new-songs">
      <Title>最新音乐</Title>
      <NewSongs/>
    </div>
  </div>
</template>

<script>
import Banner from 'components/content/Banner'
import Title from '@/common/title'
import RecommendList from './recommend-list'
import Exclusive from './exclusive'
import NewSongs from './new-songs'

export default {
  components: {
    Banner,
    Title,
    RecommendList,
    Exclusive,
    NewSongs
  }
}
</script>

<style scoped>
  .recommend-box {
    padding: 0 185px;
  }
</style>