<template>
<div>
<router-view></router-view>
  <MyFooter class='daohang'></MyFooter>
  </div>
</template>

<script>
import MyFooter from '../components/Myfooter.vue'
export default {
name:'MaoYan',
components:{
    MyFooter
},

}

</script>

<style lang='less'>
.daohang{
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>