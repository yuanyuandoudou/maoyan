<template>
  <header class='ii'>
      <div><img src="../assets/img-maoyan/maoyan.png" alt="22"></div>
      <div><span v-if='this.$router.app.$route.name !=="moviedetail"'>发现最新最热电影</span><span v-else>领取50元电影票</span><span>打开App&gt;</span></div>
  </header>
</template>

<script>
export default {
    name:'MyHeaders'
}
</script>

<style lang='less' scoped>
*{
    padding:0;
    margin:0;
}
.ii{
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    display: flex;
    z-index: 5;
    background: #ffffff;
    justify-content: space-between;
    div:nth-of-type(1){
        padding-left: .2667rem;
    }
     div:nth-of-type(2){
        padding-right: .2667rem;
    }
     div:nth-of-type(2) span:nth-of-type(1){
         font-size: .3733rem;
         color:#666666;
         margin-right: .2667rem;
         font-weight: 620;
    }
    div:nth-of-type(2) span:nth-of-type(2){
         font-size: .4267rem;
         color:#B37e7e;
         font-weight: 700;
    }
}
img{
    height: 1.3333rem;
    width: auto;
}
</style>