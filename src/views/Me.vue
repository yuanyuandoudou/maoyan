<template>
  <div>
    <MyHeader></MyHeader>
    <div class='my-tou'><span class='iconfont icon-touxiang'></span></div>
    <div class='my-mid'>
      <div class='my-ding'>
        <p class='my-ding-top'>我的订单</p>
        <div class='my-ding-xia'>
          <div class='my-ding-left'><span class='iconfont icon-dianying1'></span></div>
          <div class='my-ding-right'><span class='iconfont icon-24gf-bag' ></span></div>
        </div>
      </div>
      <div class='my-bom'>
        <div class='my-bom-top'><span>优惠券</span><span class='iconfont icon-zhankai1'></span></div>
        <div class='my-bom-bom'><span>折扣卡</span><span class='iconfont icon-zhankai1'></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/Myheader1.vue'
export default {
name:'MySelf',
components:{
  MyHeader
}
}
</script>

<style lang='less' scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
.my-tou{
  width: 100%;
  height: 30vh;
  background:#E14C50;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont{
    color:white;
    font-size: 2.1333rem;
    
  }
}
.my-mid{
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
  padding-top:.2667rem;

}
.my-ding{
  width: 100%;
  height: 4rem;
  padding-top:.5333rem;
  background:#ffffff;
  .my-ding-top{
    width: 100%;
    text-align: center;
    font-size: .3733rem;
    
}
.my-ding-top::after{
  content:' ————';
  color:#ececec;
  font-size: small;
}
.my-ding-top::before{
  content:'———— ';
  color:#ececec;
  font-size: small;
}
.my-ding-xia{
  width: 100%;
  display: flex;
  margin-top:.5333rem;
  justify-content: space-around;
  .my-ding-left{
    width: 1.3333rem;
    height:1.3333rem;
    border-radius: 50%;
    background: #FD6062;
    text-align: center;
    line-height: 1.3333rem;
    span{
      font-size: .7rem;
      color:white;
}
}

.my-ding-right{
    width: 1.3333rem;
    height:1.3333rem;
    border-radius: 50%;
    background: #46D5C1;
    text-align: center;
    line-height: 1.3333rem;
    span{
      font-size: .7rem;
      color:white;
    }
}
}
}
.my-bom{
  margin-top: .4rem;
  background:#ffffff;
  width: 100%;
  height: 1.6rem;
  .my-bom-top{
    width: 95%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    margin:auto;
    font-size: .4rem;
    line-height: .8rem;
    border-bottom: 1px solid #f4f4f4;
  }
   .my-bom-bom{
    width: 95%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    margin:auto;
    font-size: .4rem;
    line-height: .8rem;

  }
}
</style>
