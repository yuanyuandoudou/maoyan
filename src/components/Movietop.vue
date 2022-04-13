<template>
  <header class='ii'>
      <div><router-link to='/address'>深圳▽</router-link></div>
      <div>
      <h2><router-link to="/maoyan/movie/hotmovie">热映</router-link></h2>
      <h2><router-link to="/maoyan/movie/cinema">影院</router-link></h2>
      <h2><router-link to="/maoyan/movie/waitmovie">待映</router-link></h2>
      <h2><router-link to="/maoyan/movie/classicalmovie">经典电影</router-link></h2>
      </div>
      <div><span class='iconfont icon-fangdajing'></span></div>
  </header>
</template>

<script>
export default {
    name:'MovieTop'
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
    div:nth-of-type(1)
    {
        font-size: .4rem;
        width: 1.6533rem;
        color:#666666;
    }
    div:nth-of-type(3){
          width: 1.2rem;
          color:#f03d37;
        span{
            font-size: .5333rem;
            font-weight: 700;
        }
    }
    div:nth-of-type(2){
        width: 6.4rem;
        display: flex;
        justify-content: space-around;
        h2{
            font-size: .4rem;
        }
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