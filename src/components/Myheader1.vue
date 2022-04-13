<template>
  <header class='hd'>
      <div class='hd-left'><span v-if='this.$router.app.$route.name =="login"'></span></div>
      <div v-if='this.$router.app.$route.name !=="me"' class='hd-mid'>猫眼电影</div>
      <div v-else class='hd-mid'>我的</div>
      <div class='hd-right'><span class='iconfont icon-zhankai'></span></div>
  </header>
</template>

<script>
export default {
    name:'MyHeader'
}
</script>

<style lang='less' scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.hd{
    width: 100%;
    height: 1.1733rem;
    line-height: 1.1733rem;
    text-align: center;
    display: flex;
    z-index: 5;
    justify-content: space-between;
    background: #E34A4C;
 

    .hd-left{
        width: 15%;
    }
    .hd-right
    {
        width: 15%;
        padding-left: .5333rem;
        .iconfont{
        font-size: 0.8rem;
        color:#FFFFFF;
        font-weight: 800;
    }
    }
    
    .hd-mid{
        margin:auto;
        width: 70%;
        font-size: .48rem;
        color:#FFFFFF;
        
    }
}
</style>