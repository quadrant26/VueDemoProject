<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.url">
        <img :src="item.img" alt="" v-lazy="item.img">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default (){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding:15px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex:auto;
  }
  .recommend-item img{
    width: 65px;
    margin-bottom: 5px;
  }
</style>
