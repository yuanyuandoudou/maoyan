<template>
  <div>
    <div class='zuijinfang'>定位城市</div>
    <div  class='citynear-top-ding'>
      <div class='citynear-ding'>深圳</div>
      </div>
    <div class='zuijinfang'>最近访问城市</div>
    <div  class='citynear-top'>
      <div v-for='(item,index) in usedcity' :key="index">
        <div v-if='usedcity.length !==0' class='citynear-zui'>{{item}}</div>
      </div>
    </div>
        <div class='zuijinfang'>热门城市</div>
        <div  class='hotnear-top'>
        <div v-for='(item,index) in hotcity' :key="index">
        <div class='citynear-zui'>{{item}}</div>
      </div>
    </div>
      <van-index-bar :index-list="indexList">
          <template  v-for='(item,index) in addlist'>
            <van-index-anchor :key="index" :index='item.initial' />
            <van-cell v-for='(i,ind) in item.list' :key='index+"-"+ind' :title="i.name" @click='goHome(i.name)' />
          </template>
  </van-index-bar>

  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor } from 'vant';
import axios from 'axios'

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
 name:'MyAddress',
 data(){
     return {
      addlist:[],usedcity:[],
     indexList:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
     hotcity:['武汉','北京','广州','深圳','天津','西安','南京','杭州','成都','重庆','贵阳','荆州']
     }
 },
 mounted(){
     axios.get('./json/city.json').then(res=>{
         this.addlist = res.data.city
     })
    this.usedcity = JSON.parse(localStorage.getItem('nearcity'))
    
 },
 methods:{
   goHome(name){
     console.log(name)
     var citydata = JSON.parse(localStorage.getItem('nearcity')) || []
     if(citydata.indexOf(name) == -1){
       if(citydata.length == 3){
        citydata.pop()
        citydata.unshift(name)
       }else{
          citydata.unshift(name)
       }
     }
     localStorage.setItem('nearcity',JSON.stringify(citydata))
   }
 }
}
</script>

<style lang='less' scoped>
*{
  box-sizing: border-box;
}
.citynear-top{
  display: flex;
  width: 100%;
  background: #F4F4F4;
  padding-bottom:.2333rem;
.citynear-zui{
    background: #fff;
    width: 2.6667rem;
    height: .88rem;
    margin-top: 0.3rem;
    margin-left: .3733rem;
    margin-right: .4rem;
    padding: 0 .1067rem;
    border: 0.02rem solid #e6e6e6;
    border-radius: 0.06rem;
    line-height: .88rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  font-size: .3733rem;
  }
}
.citynear-top-ding{
  display: flex;
  width: 100%;
  background: #F4F4F4;
  padding-bottom:.2333rem;
  .citynear-ding{
    background: #fff;
    width: 2.6667rem;
    height: .88rem;
    margin-top: 0.3rem;
    margin-left: .3733rem;
    padding: 0 .1067rem;
    border: 0.02rem solid #e6e6e6;
    border-radius: 0.06rem;
    line-height: .88rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  font-size: .3733rem;
  }
}
.hotnear-top{
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #F4F4F4;
  padding-bottom:.2333rem;
  .citynear-zui{
    background: #fff;
    width: 2.6667rem;
    height: .88rem;
    margin-top: 0.3rem;
    margin-left: .3733rem;
    padding: 0 .1067rem;
    border: 0.02rem solid #e6e6e6;
    border-radius: 0.06rem;
    line-height: .88rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  font-size: .3733rem;
  }
}
.zuijinfang{
  width: 100%;
  padding-left: 0.3rem;
  height: .8rem;
  line-height: .8rem;
  background: #EBEBEB;
  font-size: .3733rem;
}
</style>