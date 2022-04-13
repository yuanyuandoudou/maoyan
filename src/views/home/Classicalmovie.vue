<template> 
 <div class='classical-top'>
      <div v-for='item in hotmov' :key='item.id' class='container' @click="godetail(item.id)">
          <div>
              <img :src="item.img" alt="11">
          </div>
          <div class='bor'>
          <div class='text'>
              <div class='nm'><span>{{item.nm}}</span><img src='https://s0.meituan.net/bs/myfe/canary/file/touchnode/images/dpmmweb/hot-tab/img/base64/v2dimax.png' v-if='item.ver.indexOf("IMAX") !== -1' class='imax'></div>
              <div class='cheng'><div v-if='item.sc!==0'><span>观众评</span>{{item.sc}}</div>
              <div v-else><span>暂无评分</span></div></div>
              <div class='star'>{{item.desc}}</div>
              <div class='info'>{{item.showInfo}}</div>
          </div>
          <div class='tic'>
              <span v-if='item.globalReleased'>购票</span>
              <span v-else>预售</span>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'ClassicalMovie',
data(){
        return {hotmov:[]}
    },
    mounted(){
        axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4',{ct: '深圳',ci: 30,channelId: 4}).then(res=>{
            this.hotmov = res.data.data.hot
        })
    },
    methods: {
        godetail(id){
            this.$router.push('/moviedetail/'+id)
        }
    },
    
}
</script>

<style lang='less'>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
.classical-top{
  margin-top:4rem;
}
.ka {
    display: flex;
    align-items: center;
    img{
    width: .4rem;
    height: .3733rem;
}}
.cinema{
    margin-top:5.2667rem;
}
.table{
    display: flex;
    margin-bottom: .0533rem;
    div{
        margin-right: .08rem;
         height: .4533rem;

    }
    .tui{
        border:1px solid #589daf;
        color:#589daf;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;

    }
    .chi{
        border:1px solid #ff9900;
        color:#ff9900;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;
    }
}
.cinema .top1{
    width: 100%;
    height: 1.0667rem;
    line-height: 1.0667rem;
    position: fixed;
    top:4rem;
    display: flex;
    background: #ffffff;
    z-index: 5;
    justify-content: space-around;
}
.ting{
    display: flex;
    .ting-d{
        border:1px solid #589daf;
        color:#589daf;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;
    }
}
.promotion{
    display: flex;
}
.cinema .cinema-nm{
    width: 100%;
        line-height: .46rem;
    font-size: .4267rem;
    color: #000;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: .1067rem;
    margin-top: .3467rem;
    span{
        font-size: .48rem;
        color:#f03d37;
        font-weight: normal;
    }
    span::after{
        content:'元起';
        font-size:.32rem;
    }
}
.cinema .addr{
    font-size: .3467rem;
    color:#666666;
        text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: .0533rem;
}
.cinema-1{
    padding-bottom:.4rem;
    padding-left: .2133rem;
    border-bottom: 1px solid rgb(232, 231, 231);
}
</style>
