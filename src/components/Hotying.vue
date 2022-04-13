<template>
<div>
    <p class='title'>最受好评电影</p>
  <div class='heng'> 
      <div v-for='item in topsc' :key='item.id' class='nice'>
          <div><img :src='item.img' /></div>
          <h5 class='title'>{{item.nm}}</h5>
           <span>观众评分{{item.sc}}</span>
      </div>
  </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:'HotYing',
    data(){
        return {
            hotmovi:[],
            topsc:[]
            }
    },
    mounted(){
        setTimeout(()=>{
            this.hotmovi = this.$parent.hotmov
            this.topsc = this.MySort()
        },1500)
          
    },
    methods:{
        MyFilter(){
            return this.hotmovi.filter((ele)=>{
                return ele.sc !== 0
            })
        },
          MySort(){
            return this.MyFilter().sort((a,b)=> {return b.sc-a.sc})
        },
      
    },
    computed: {  
        
    }
}
</script>

<style lang='less'>
.title{
font-size: .3733rem;
margin-left: .1333rem;
}
.nice{
    margin:0 .1333rem 0 .1333rem;
    position: relative;
}
.heng{
    display: flex;
    overflow-x: scroll;

}
.heng::-webkit-scrollbar{
    display: none;
}
.heng img{
    width: 2.2667rem;
    height: 3.0667rem;
}
.heng h5{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 2.2rem;
    margin-top: .0533rem;
}
.nice span{
    position: absolute;
    white-space: nowrap;
    top:2.55rem;
    left: .2667rem;
    color:#faaf00;
    font-size: 11px;
    font-weight: 600;
}
</style>