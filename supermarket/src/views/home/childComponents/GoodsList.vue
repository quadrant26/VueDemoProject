<template>
  <div>
    <grid-view>
      <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods-item="item"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    props: {
      goodsList: {
        type: Array,
        default (){
          return []
        }
      }
    },
    components: {
      GridView,
      GoodsListItem
    }
  }
</script>

<style scoped>

</style>
