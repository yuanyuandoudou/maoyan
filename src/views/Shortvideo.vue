<template>
  <div>
    <MyHeaders></MyHeaders>
    <MyHeader></MyHeader>
    <div class='shortvideo'>
      <div v-for='item in shortvo' :key='item.id' class='shortvideo-box'>
        <video :src="item.video.url"></video>
        <div class='shortvideo-title'>{{item.title}}</div>
        <div class='shortvideo-span'>
          <span class='iconfont icon-guanyanren' id='touxiang'>&nbsp;&nbsp;猫眼电影</span>
          <span class='iconfont icon-dianzan' id='dianzan'>{{item.upCount}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MyHeader from '../components/Myheader1.vue'
import MyHeaders from '../components/Myheader2.vue'
import axios from 'axios'

export default {
name:'MyShortVideo',
components:{
  MyHeader,
  MyHeaders
},
data(){
  return {
    shortvo:[]
  }
},
mounted(){
      axios.get('./json/shortvideo.json').then(res=>{
        this.shortvo = res.data
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
.shortvideo{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .shortvideo-box{
    width: 49.5%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: .1333rem;
    position: relative;
    video{
      width: 100%;
      height: auto;
    }
    .shortvideo-span{
      width: 100%;
      color:#ffffff;
    #touxiang{
      position: absolute;
      z-index: 5;
      left: .2667rem;
      bottom: .4rem;
    }
    #dianzan{
      position: absolute;
      z-index: 5;
      right: .5rem;
      bottom: .4rem;

    }
    }
   
  }
}
.shortvideo-title{
  position: absolute;
  z-index: 5;
  width: 100%;
  left: 0;
  bottom: 1.3333rem;
  height: 1.1467rem;
  padding-left: .1333rem;
  padding-right: .1333rem;
  overflow-wrap: wrap;
  color:#ffffff;
  font-size: .4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}
</style>
