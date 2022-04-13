<template>
  <header class='ii'>
      <h2><router-link to="/video/tuijian">推荐</router-link></h2>
      <h2><router-link to="/video/yugao">预告片</router-link></h2>
      <h2><router-link to="/video/jiedu">热片解读</router-link></h2>
      <h2><router-link to="/video/talkmovie">说电影</router-link></h2>
      <h2><router-link to="/video/yule">娱乐</router-link></h2>
  </header>
</template>

<script>
export default {
    name:'VideoTop'
}
</script>

<style lang='less' scoped>
*{
    padding:0;
    margin:0;
}
.ii{
    width: 100%;
    height: 1.3333rem;
    line-height: 1.3333rem;
    display: flex;
    text-align: center;
    background:#ffffff;
        justify-content: space-around;
        h2{
            font-size: .4rem;
        }
    }

a{
    text-decoration: none;
    color:#666666;
    &.router-link-exact-active{
        display: block;
        height: 1.2rem;
        color:#333333;
        font-weight: 700;
        font-size: .4533rem;
        border-bottom:3px solid #f03d37;
       transition: border-bottom ease-in  0.3s;
    }
}
</style>