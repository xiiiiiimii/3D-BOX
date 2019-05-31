<template>
<div>
  <div class="h1000"></div>
  <div class="swiper-container swiper_con">
    <ul class="navlist" :class="{'isFixed': isFixed}">
      <li class="navli" v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)" :key="index"><i>{{item.name}}</i>
      </li>
    </ul>
    <div class="swiper-wrapper">
      <!-- 第一个swiper -->
      <div class="h1000 swiper-slide" ref="viewBox" style="height:3000px">1111</div>
      <!-- 第二个swiper -->
      <div class="h1000 swiper-slide" style="height:3000px">2222</div>
      <!-- 第二个swiper -->
      <div class="h1000 swiper-slide" style="height:3000px">333</div>
    </div>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper'

export default {
  name: 'swiper',
  data () {
    return {
      isFixed: false,
      navList: [
        {name: '选项1'},
        {name: '选项2'},
        {name: '选项3'}
      ],
      nowIndex: 0
    }
  },
  components: {
  },
  mounted () {
    var that = this
    that.mySwiper = new Swiper('.swiper-container', {
      initialSlide: 0,
      autoplay: false,
      keyboardControl: true,
      autoHeight: true,
      observer: true,
      observeParents: true,
      on: {
        slideChangeTransitionStart: function () {
          that.nowIndex = that.mySwiper.activeIndex
        }
      }
    })
    // this.getList();
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('.swiper_con').offsetTop
      if (scrollTop > offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    tabClick (index) {
      this.nowIndex = index
      this.mySwiper.slideTo(index, 0, false)
    }
  },
  created (id) {

  }
}
</script>
<style>
  .swiper_con{
    width:100%;
    margin-bottom:40px;
    padding-top: 40px;
    position:relative;
    background: cornflowerblue;
  }
  .navlist{
    width:100%;
    height:40px;
    line-height: 40px;
    border-bottom:1px solid rgba(151,151,151,0.1);
    background: bisque;
    padding: 0;
    margin: 0;
    position: absolute;
    top:0;
    left:0;
  }
  .navli{
    padding:0px 10px;
    text-align:center;
    float:left;
    margin:0 1.2rem;
  }
  .navli i{
    font-style: normal;
    font-size: 16px;
  }
  .activeT{
    color:#00ba6b;
    border-bottom: 2px solid #00ba6b;
  }
  .choosegrand{
    position:absolute;
    top:-3px;
    right:0;
  }
  .show{
    display:block;
  }
  .none{
    display:none;
  }
  .isFixed{
    position: fixed;
    top:0;
    z-index: 999;
  }
  .h1000{
    height:200px;
    padding-top: 90px;
  }
</style>
