<template>
<div>
  <MyHeader class='top1'></MyHeader>
  <MyHeaders class='top2'></MyHeaders>
  <MovieTop class="tt"></MovieTop>
    <router-view />
    </div>
 
</template>

<script>
import MovieTop from '../../components/Movietop.vue'
import MyHeader from '../../components/Myheader1.vue'
import MyHeaders from '../../components/Myheader2.vue'
export default {
name:'MyMovie',
components: {
  MovieTop,
  MyHeader,
  MyHeaders
}
}
</script>

<style lang='less'>
.tt{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top:2.6667rem;
        z-index: 5;

}
.top1{
  position: fixed;
  top:0;
  left:0;
}
.top2{
  position: fixed;
  top: 1.1733rem;

  left:0;
}
</style>
