<template>
  <div class="swiper-container swiper_con">
    <div class="swiper-wrapper">
      <!-- 第一个swiper -->
      <div class="swiper-slide box">1111</div>
      <!-- 第二个swiper -->
      <div class="swiper-slide box">
        <div class="box2">
          222222222222
        </div>
        <div class="box2-2" @click="abc()">
          222
        </div>
      </div>
      <!-- 第二个swiper -->
      <div class="swiper-slide box">333</div>
    </div>
  </div>
</template>
<script>
  // import echarts from 'echarts'
  import Swiper from 'swiper'

  export default {
    name: 'echartsDom',
    data () {
      return {
      }
    },
    components: {
    },
    created () {
    },
    mounted () {
      var that = this
      that.mySwiper = new Swiper('.swiper-container', {
        effect: 'cube',
        initialSlide: 0,
        autoplay: false,
        keyboardControl: true,
        autoHeight: true,
        observer: true,
        observeParents: true,
        on: {
          slideChangeTransitionStart: function () {
            console.log(23)
          }
        }
      })
    },
    methods: {
      abc () { alert(234) }
    }
  }
</script>
<style>
  .swiper-wrapper{
    width:100%;
    height:100%;
  }
  .swiper-container{
    height:100%;
  }
  .box{
    width:100%; height:100%;
    overflow: auto;
    background-color: cornflowerblue;
  }
  .box2{
    height: 100px;
    overflow: auto;
    background-color: bisque;
  }
  .box2-2{
    height: 10000px;
    background-color: #3f9685;
  }
</style>
