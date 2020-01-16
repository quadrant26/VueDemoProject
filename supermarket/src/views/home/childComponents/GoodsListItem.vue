<template>
  <div class="goods" @click="itemClick">
    <img :src="goodsItem.goods_img" :key="goodsItem.goods_id" v-lazy="getImg" alt="">
    <div class="goods-info">
      <p>{{goodsItem.goods_name}}</p>
      <span class="price">{{goodsItem.shop_price}}</span>
      <span class="collect">{{goodsItem.stock}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default (){
          return {}
        }
      }
    },
    computed: {
      getImg() {
        return this.goodsItem.img || this.goodsItem.goods_img || this.goodsItem.show.img
      }
    },
    methods: {
      itemClick (){
        // 1. 获取id
        const goods_id = this.goodsItem.goods_id;

        // 2. 跳转到详情页面
        this.$router.push({path: '/detail', query: {goods_id}})
      },
      imgLoad (){
        this.$bus.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
