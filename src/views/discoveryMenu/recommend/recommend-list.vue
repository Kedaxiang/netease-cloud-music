<template>
  <div class="list-wrap">
    <ListItem v-for="item in list"
              :key="item.id"
              :img="item.picUrl"
              :name="item.name"
              :desc="item.copywriter"
    />
  </div>
</template>

<script>
import ListItem from './recommend-list-item'
import Axios from 'axios'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    Axios.defaults.baseURL = 'http://localhost:3000'
    Axios({
      url: '/personalized?limit=10'
    }).then(res => {
      this.list = res.data.result
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>