<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-vue-swiper :banner="banner"></home-vue-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="titles" @getTabControl="tabClick"></tab-control>
    <goods-list :goods-list="showGoodsList"></goods-list>

  </div>
</template>

<script>
  import HomeVueSwiper from './childComponents/HomeVueSwiper'
  import HomeRecommendView from './childComponents/HomeRecommendView'
  import FeatureView from './childComponents/FeatureView'
  import GoodsList from './childComponents/GoodsList'

  import TabControl from 'components/content/tabControl/TabControl'
  import NavBar from 'components/common/navbar/NavBar'

  import {getHomeMultidata, getHomeData} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeVueSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data (){
      return {
        result: null,
        banner: [],
        recommends: [],
        titles: ["流行", "新款", "精选"],
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: 'pop',
      }
    },
    created (){
      //
      this.getMultidata();

      //
      this.getHomeData('pop');
      this.getHomeData('new');
      this.getHomeData('sell');
    },
    computed: {
      showGoodsList() {
        return this.goodsList[this.currentType].list
      }
    },
    methods: {
      tabClick (index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      /**
       * 网络请求相关方法
       */
      getMultidata(){
        getHomeMultidata().then( res => {
          this.banner = res.data.banner
          this.recommends = res.data.subnav
        })
      },
      getHomeData (type){
        getHomeData(type, this.goodsList[type].page).then( res => {
          const goodsList = res.data.list;
          this.goodsList[type].list.push(...goodsList)
          this.goodsList[type].page += 1
        })
      }
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

  .tab-control{
    position: sticky;
    top:44px;
  }
</style>
