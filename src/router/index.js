import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UploadImg from '@/components/uploadImg'
import SwiperAndTop from '@/Test/swiperAndTop'
import EchartsDom from '@/Test/echarts'
import CubeEffect from '@/Test/cubeffect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/uploadImg',
      name: 'UploadImg',
      component: UploadImg
    },
    {
      path: '/swiperAndTop',
      name: 'swiperAndTop',
      component: SwiperAndTop
    },
    {
      path: '/echartsDom',
      name: 'echartsDom',
      component: EchartsDom
    },
    {
      path: '/cubeEffect',
      name: 'cubeEffect',
      component: CubeEffect
    }
  ]
})
