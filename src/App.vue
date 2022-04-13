<template>
  <div id="app">
    <!-- <MyHeader class='top1'></MyHeader>
    <MyHeaders class='top2'></MyHeaders> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import MyFooter from './components/Myfooter.vue'
// import MyHeader from './components/Myheader1.vue'
// import MyHeaders from './components/Myheader2.vue'

export default {
  name:'App',
  components:{
    // MyFooter,
    // MyHeader,
    // MyHeaders
  }
}

</script>
<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
// .top1{
//   position: fixed;
//   top:0;
//   left:0;
// }
// .top2{
//   position: fixed;
//   top: 1.1733rem;

//   left:0;
// }
// .cen{
//   margin-top:2.6667rem;
// }
// .bottom{
//   position: fixed;
//   left: 0;
//   bottom: 0;
// }
</style>
