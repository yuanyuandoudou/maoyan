<template>
  <div class='pagediu'>
      <div class='pagediu-tou'><img src="../assets/img-maoyan/maoyantou.jpg" alt="222"></div>
      <div class='pagediu-mi'>
        <div class='pagediu-tu'><img src="../assets/img-maoyan/maoyanshi.jpg" alt="222"></div>
        <div class='baoqian'>(T ^ T)&nbsp;&nbsp;抱歉，迷路了'</div>
        <div class='anniu' @click="backm"><u>返回首页</u></div>
        <div class='zidonfan'>{{daojishi}}秒后自动返回首页</div>
      </div>
      

  </div>
</template>

<script>

export default {
    name:'DiuShi',
    data(){
        return {daojishi:5}
    },
    methods:{
        backm(){
        this.$router.replace('/')
        }
    },
    mounted(){
       var timer = setInterval(()=>{
           this.daojishi--
           if(this.daojishi == 0){
               this.$router.replace('/maoyan')
               clearInterval(timer)
           }
        },1000)
    }
}
</script>

<style lang='less'>
.pagediu{
    width: 100%;
    height: 100vh;
    background: #EFEFEF;
}
.pagediu-tou img{
    width: 100%;
    height: auto;
}
.pagediu-mi{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        height: 5.4933rem;
        width: 5.4933rem;
    }
}
.anniu{
    color:#551a8b;
    font-size: .4533rem;
}
.baoqian{
    font-size: .4533rem;
    color:#000000;
}
.zidongfan{
    font-size: .3467rem;
    color:#000000;
}
</style>