<template>
  <div>
    <MyHeaders></MyHeaders>
    <div v-for='item in detail' :key="item.id" :style='{background:item.showStateButton.color}' class='moviede'>
    <div class='movdeta'>
        <div class='tutu'><img :src="item.img" alt="1" /> <span class='iconfont icon-bofang'></span></div>
        <div class='mode-right'>
          <div class='denm'>{{item.nm}}</div>
          <div class='kind'>
            <div v-for='cat in item.cat' :key='cat.id' class='action'><span>{{cat}}</span><span v-if='cat !== kindcat'>/</span></div>
            <img src='	https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/movie-tag-2DIMAX.png' v-if='item.ver.indexOf("IMAX") !== -1' class='de-imax' />
          </div>
           <div class='kind'>
            <div v-for='sta in item.star' :key='sta.id' class='action'><span>{{sta}}</span><span v-if=' sta!== star'>/</span></div>
          </div>
          <div class='shangyin'><span>{{item.pubDesc}} / {{item.dur}}分钟</span></div>
          <div class='like-w'><span class='iconfont icon-aixin'></span>想看</div>
        </div>
      
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeaders from '../../components/Myheader2.vue'
export default {
name:'MovieDetail',
components: {
  MyHeaders
},
data(){
    return {detail:'',urldata:'',kindcat:'',star:''}
},
mounted(){  
   this.urldata=this.$route.params.userid
   axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4',{ct: '深圳',ci: 30,channelId: 4}).then(res=>{
            this.detail = (res.data.data.hot).filter((item)=>{
              return item.id==this.urldata
            })
          this.detail[0].cat = this.detail[0].cat.split(',')
          this.kindcat = this.detail[0].cat[this.detail[0].cat.length-1]
          this.detail[0].star = this.detail[0].star.split(',')
          this.star = this.detail[0].star[this.detail[0].star.length-1]
        })
}
}
</script>

<style lang='less'>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.moviede{
  height: 100vh;
  width: 100%;
  padding:.56rem .4267rem;
}
.movdeta{
  display: flex;
  .tutu{
     width: 2.6667rem;
      height: 3.68rem;
    position: relative;
    img{
      width: 2.6667rem;
      height: 3.68rem;
    }
  .iconfont{
    position: absolute;
    bottom: .08rem;
    left: .08rem;
    color:azure;
    font-size: large;
  }
  }
}
.kind{
    display: flex;
    align-items: center;
  span{
    font-size: .32rem;
    color:#ffffff;
  }
 
}
.mode-right{
  padding-left: .2667rem;
}
.denm{
  width: 5.4933rem;
  font-size: .5333rem;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: .4rem;
}
.de-imax{
  width: 1.0667rem;
  height: .3733rem;
}
.action{
  span{
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;

  }
}
.shangyin{
  span{
    font-size: .32rem;
  color:#ffffff;

  }
}
.like-w{
    display: flex;
    align-items: center;
    background: hsla(0,0%,100%,.35);
    color: #ffffff;
    border-radius: 0.08rem;
    font-size: .38rem;
    width: 47.61904762%;
    height: 1rem;
    justify-content: center;
    margin-top:.1333rem;
}
</style>