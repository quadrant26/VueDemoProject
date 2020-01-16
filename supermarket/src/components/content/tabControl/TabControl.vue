<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index === currentIdnex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default (){
          return []
        }
      }
    },
    data (){
      return {
        currentIdnex: 0
      }
    },
    methods: {
      tabClick (index){
        this.currentIdnex = index;

        this.$emit('getTabControl', index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
