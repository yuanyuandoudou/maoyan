<template>
  <div>
    <MyHeaders></MyHeaders>
    <MyHeader></MyHeader>
    <VideoTop></VideoTop>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '../components/Myheader1.vue'
import MyHeaders from '../components/Myheader2.vue'
import VideoTop from '../components/Videotop.vue'

export default {
name:'MyVideo',
components:{
  MyHeader,
  MyHeaders,
  VideoTop
}
}
</script>

<style>

</style>
