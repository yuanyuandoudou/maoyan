<template>
  <div class='jj'>
      <div><router-link to="/maoyan"><p class='iconfont icon-dianying'></p>电影/影院</router-link></div>
      <div><router-link to="/video"><p class='iconfont icon-shipin-'></p>视屏</router-link></div>
      <div><router-link to="/shortvideo"><p class='iconfont icon-paishipin'></p>小视屏</router-link></div>
      <div><router-link to="/show"><p class='iconfont icon-xinglika'></p>演出</router-link></div>
      <div><router-link to="/me"><p class='iconfont icon-guanyanren'></p>我的</router-link></div>
  </div>
</template>

<script>
export default {
    name:'MyFooter'
}
</script>

<style lang='less' scoped>
body{
    padding:0;
    margin:0;
}
.jj{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background:white;
    text-align: center;
    
}
.jj p{
  margin-bottom: .08rem;
  font-size: .3733rem;
}
a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-active {
      color: #EE3F3E;
    }
  }
</style>