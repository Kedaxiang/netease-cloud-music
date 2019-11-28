<template>
  <div class="list-wrap">
    <div class="list"
         v-for="(list, listIndex) in orderList"
         :key="listIndex">
      <NewSongItem v-for="(item, index) in list"
                   :key="item.id"
                   :listLimit="listLimit"
                   :order="getSongOrder(listIndex, index)"
                   v-bind="nomalizeSong(item)"/>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import NewSongItem from './new-song-item'

const songsLimit = 10;
export default {
  data() {
    return {
      listLimit: Math.ceil(songsLimit / 2),
      list: []
    }
  },
  created() {
    Axios({
      url: 'http://localhost:3000/personalized/newsong'
    }).then(res => {
      console.log(res.data.result)
      this.list = res.data.result;
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    nomalizeSong(song) {
      const {
        name,
        song: {
          mvid,
          artists,
          album: { blurPicUrl },
        }
      } = song
      return {
        name,
        mvid,
        artists,
        img: blurPicUrl
      }
    },
    getSongOrder(listIndex, index) {
      return listIndex * this.listLimit + index + 1
    }
  },
  computed: {
    orderList() {
      return [
        this.list.slice(0, this.listLimit),
        this.list.slice(this.listLimit, this.list.length)
      ]
    },
  },
  components: {
    NewSongItem
  }
}
</script>

<style scoped lang="less">
  .list-wrap {
    display: flex;
    width: 100%;
    margin: 10px 0 50px;
    .list {
      width: 50%;
      border: 1px solid #ebeced;
    }
  }
</style>