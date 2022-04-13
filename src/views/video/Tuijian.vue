<template>
  <div class='video-tuijian'>
      <div v-for='(item,index) in shiping' :key="index">
      <video :src="item.video.url" class='video-tuijian-video' controls></video>
        <div class='video-tuijian-sanlian'>
            <span class='iconfont icon-dianzan'> {{item.upCount}}</span>
            <span class='iconfont icon-xiaoxi'> {{item.commentCount}}</span>
            <span class='iconfont icon-fenxiang'> {{item.shareCount}}</span>
                </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'TuiJian',
data(){
    return {
        shiping:[]
    }
},
mounted(){
    axios.get('./json/video.json').then(res=>{
        this.shiping = res.data
    })
}
}
</script>

<style lang='less'>
.video-tuijian{
    width: 100%;
    height: 100vh;
}
.video-tuijian-video{
    width: 100%;
    height: auto;
}
.video-tuijian-sanlian{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    span{
        margin: .1333rem .2667rem .1333rem .2667rem;
    }
}
</style>