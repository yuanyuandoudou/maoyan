<template>
  <div class='wamo'>
    <div>
      <div class='qidai'>近期最受期待</div>
      <div class='zuiai'>
      <div v-for='item in expect'  :key="item.id" class='zuiai-box'>
          <img :src="item.img" alt="221">
          <div class='zuiai-nm'>{{item.nm}}</div>
          <div class='zuiai-sj'>{{(item.comingTitle).substr(0,item.comingTitle.length-2)}}</div>
          <span class='iconfont icon-aixin'></span>
          <span class='zuiai-wish'>{{item.wish}}人想看</span>
      </div>
    </div>
</div>
<div class='yushou'>
    <div v-for='(item,index) in waitmo' :key='index' >
      <div class='yushou-cz'>{{index}}</div>
      <div v-for='i in item' :key='i.id' class='yushou-movie'>
        <div class='yushou-img'> <img :src="i.img" alt="222"></div>
        <div class='yushou-mid'>
        <div class='yushou-nm'>{{i.nm}}</div>
        <div class='yushou-wish'>{{i.wish}}</div>
        <div class='yushou-star'>{{i.star}}</div>
        <div class='yushou-rt'>{{i.rt}}上映</div>
        </div>
       <div class='yushou-kan'><span v-if='i.showStateButton'>预售</span><span v-else class='yushou-xiang'>想看</span></div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {waitmo:[],expect:[]}
  },
name:'WaitMovie',
mounted(){
  let newObj = {}
  axios.get('./json/order.json').then(res=>{
    this.waitmo = res.data
    this.waitmo.forEach((item)=>{
      if(newObj[item.comingTitle]){
        newObj[item.comingTitle].push(item)
      }else{
        newObj[item.comingTitle] = []
        newObj[item.comingTitle].push(item)
      }
    })
    this.waitmo = newObj

  })
  axios.get('./json/presentmoive.json').then(res=>{
    this.expect = res.data
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
.wamo{
    margin-top:4.2rem;
    padding: .32rem .4rem;
    .qidai{
      font-size: .3733rem;
      margin-bottom: .32rem;
    }
}

.zuiai{
    display: flex;
    overflow-x: scroll;
  .zuiai-box{
    width: 2.2667rem;
    margin-right: .2667rem;
    position: relative;
    img{
      width: 2.2667rem;
      height: 3.0667rem;
    }
    .zuiai-nm{
      width: 2.2667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#222222;
      margin-bottom: .08rem;
      font-size: .3467rem;
      font-weight: bold;
    }
    .zuiai-sj{
      font-size: .32rem;
      color:#999999;
    }
    .iconfont{
      display: block;
      text-align: center;
      line-height: .8rem;
      width: .8rem;
      height: .8rem;
      background: rgba(18, 18, 18, 0.4);
      color:aliceblue;
      position: absolute;
      top:.0;
      left: 0;
    }
    .zuiai-wish{
      display: block;
      position: absolute;
      width: 2.2667rem;
      top: 2.5333rem;
      left: 0;
      text-align: center;
      color:#faaf00;
      font-weight: 600;
    }
  }
}
.zuiai::-webkit-scrollbar{
    display: none;
}
.yushou{
  .yushou-cz{
    padding-top:.32rem;
    color:#333333;
    font-size: .3733rem;
  }
  .yushou-movie{
    padding-top:.32rem;
    padding-bottom:.32rem;
    display: flex;
    border-bottom: 1px solid #ccc;
      img{
         width: 1.7067rem;
         height: 2.4rem;
      }
      .yushou-nm{
        font-size: .4533rem;
        color:#333333;
        font-weight: 700;
        margin-bottom:.1867rem;
      }
  }
}
.yushou-mid{
  width: 5.84rem;
  height: 2.4rem;
}
.yushou-img{
  width: 1.7067rem;
  height: 2.4rem;
}
.yushou-wish{
  color:#faaf00;
    font-size: .4rem;
}
.yushou-wish::after{
    content:'人想看';
    color:#666666;
    font-size: .3467rem;
  }
  .yushou-star{
    font-size: .3467rem;
    color:#666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top:.13rem;
  }
  .yushou-rt{
    color:#666666;
    font-size: .3467rem;
  }
  .yushou-kan{
    width: 1.44rem;
    height: 2.4rem;
  display: flex;
  align-items: center;
  span{
      display: block;
      width: 1.44rem;
      height: .7467rem;
      text-align: center;
      font-size: .3467rem;
      color:white;
      font-weight: 500;
      border-radius:.27rem;
      background: #3c9fe6;
      line-height: .7467rem;
  }
   .yushou-xiang{
    background: #faaf00;
  }
  }

</style>