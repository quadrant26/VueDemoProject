<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
    </ul>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from "network/home";

  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommendView from './childComponents/HomeRecommendView'
  import FeatureView from './childComponents/FeatureView'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView
    },
    data (){
      return {
        result: null,
        banners: [],
        recommends: []
      }
    },
    created (){
      // 1. 请求多个数组
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-bottom: 44px;
  }
  .home-nav{
    text-align: center;
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left:0;
    right:0;
    z-index: 10;
  }
</style>
