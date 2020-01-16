<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide v-for="(item, index) in banner" data-goodsid="item.goods_id" :key='item.goods_id' class="swiper-item">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "HomeVueSwiper",
    data (){
      return {
        swiperOption: {
          // 参数选项,显示小点
          pagination: {
            el: '.swiper-pagination'
          },
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          // delay:1000
        }
      }
    },
    props: {
      banner: {
        type: Array,
        default (){
          return []
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .wrapper{
    overflow:hidden;
    width: 100%;
    padding-top: 44px;
    font-size: 0;
  }
  .swiper-item, .swiper-item img{
    width:100%
  }
</style>
