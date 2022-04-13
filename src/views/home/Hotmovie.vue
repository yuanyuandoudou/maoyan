<template> 
 <div>
     <HotYing class='hoty'></HotYing>
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
import HotYing from '../../components/Hotying.vue'
// import EventBus from '../../Bus.js'
import 'vuex'

export default {
name:'HotMovie',
data(){
        return {hotmov:[]}
    },
    components: {
        HotYing
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
.hoty{
    margin-top:4.2rem;
}
.star{
        overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .3467rem;
}
.container{
    display: flex;
    align-items: center;
    margin-left: .2667rem;
}
img{
    width: 1.7067rem;
    height: 2.4rem;
}
.imax{
    width: 1.1467rem;
    height: .3733rem;
}
.cheng{ color:#faaf00;
font-size: .4rem;
font-weight: 700;
    span{
    color:#666666;
       font-size: .3467rem;
       font-weight: normal;
       margin-right:.08rem ;
    }
}
.nm{
    width: 5.84rem;
    font-size: .4533rem;
    color: #333333;
    font-weight: 700;
}
.info{
    font-size: .3467rem;
}
.bor{
    width: 7.6267rem;
    height: 3.04rem;
    display: flex;
    padding-left: .2133rem;
    border-bottom: 1px solid #ccc;
    padding-right: 0;
    align-items: center;
}
.tic{
    display: flex;
    align-items: center;
}
.tic span{
    display: block;
    width: 1.44rem;
    height: .7467rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    white-space: nowrap;
    font-size: .26rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 0.4rem;
}
.text{
    width: 5.84rem;

}
</style>