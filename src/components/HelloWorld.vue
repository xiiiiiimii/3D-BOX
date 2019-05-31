<template>
  <v-touch v-on:swipeleft="swipeLeft" v-on:swiperight="swipeRight" style="touch-action:pan-y!important;">
    <!--<div class="portal myDiv">-->
      <!--&lt;!&ndash;<div class="pic4 ml100">444</div><br>&ndash;&gt;-->
      <!--<div class="pic2">222</div><div class="pic1">1</div><div class="pic5">5</div><br>-->
      <!--&lt;!&ndash;<div class="pic3 ml100">333</div>&ndash;&gt;-->
    <!--</div>-->
    <div class="warp">
      <div class="cure">
        <div class="div1">Front</div>
        <!--<div class="div2">Back</div>-->
        <div class="div3">Left</div>
        <div class="div4">
          RightRightRightRightRi
        </div>
        <!--<div class="div5">Top</div>-->
        <!--<div class="div6">Bottom</div>-->
      </div>
    </div>
  </v-touch>
</template>

<script>
</script>

<style>
  .portal div{
    width:100px;
    height:100px;
    border:1px solid #000;
    display: inline-block;
    background: #fff;
  }
  .ml100{
    margin-left: 103px;
  }
  .pic2{
    transform:rotateY(-90deg);
    transform-origin:right;
  }
  .pic3{
    transform:rotateX(90deg);
    transform-origin:top;
  }
  .pic4{
    transform:rotateX(-90deg);
    transform-origin:bottom;
  }
  .pic5{
    transform:rotateY(-90deg);
    transform-origin:left;
  }
  .pic6{
    transform:translateZ(-100px);
  }

  @keyframes mySec{
    0%{transform:rotateX(0deg) rotateY(0deg);}
    /*50%{transform:rotateX(230deg) rotateY(-20deg) rotateZ(-90deg);}*/
    100%{transform:rotateX(0deg) rotateY(180deg);}
  }
  .myDiv{
    animation:mySec 13s infinite;
    transform-style:preserve-3d;
    /*perspective:1000px;*/
  }
</style>
<style>
  html {
    /*background: linear-gradient(#66FF99 0%,#00FFFF 80%); !* 背景色渐变 *!*/
    opacity: .8; /* 设置透明度 */
    height: 100%;
  }
  .warp {
    margin-top: 200px;
  }
  .cure {
    width: 200px;
    height: 200px;
    position: relative; /*定位，使正方体六张图保持在一个水平面，父元素设置相对定位，设置定位必须设置宽高，不然为0*/
    margin: auto;
    transform-style: preserve-3d; /* 实现3d功能必用 */
    animation: rotate 3s; /*动画：动画名称(与下面@keyframes中名称一致) 动画执行时长 循环次数(这里设置无限)*/
  }
  @keyframes rotate{ /*启动动画*/
    from{
      transform: rotateX(0deg) rotateY(0deg); /**/
    }
    to{
      transform: rotateX(0deg) rotateY(90deg);
    }
  }
  .cure>div {
    width: 100%;
    height: 100%;
    overflow:auto;
    background: #333;
    opacity: .9;
    position: absolute; /*子元素依靠父元素设置绝对定位，同样必须设置宽高*/
    text-align: center;
    color: #fff;
    line-height: 200px;
    font-size: 50px;
  }

  /* 正方体实现 */
  .div1 {
    transform: translateZ(100px); /* 沿着Z轴向前100像素 */
  }
  .div2 {
    transform: translateZ(-100px); /* 沿着Z轴向后100像素 */
  }
  .div3 {
    transform: rotateY(-90deg) translateZ(100px); /* 沿着Y轴旋转90度(左侧面),在沿着Z轴向左平移100像素 */
  }
  .div4 {
    transform: rotateY(90deg) translateZ(100px); /* 沿着Y轴旋转90度(右侧面),在沿着Z轴向右平移100像素 */
  }
  .div5 {
    transform: rotateX(90deg) translateZ(100px); /* 沿着X轴旋转90度(顶层面),在沿着Z轴向上平移100像素 */
  }
  .div6 {
    transform: rotateX(90deg) translateZ(-100px); /* 沿着X轴旋转90度(底层面),在沿着Z轴向下平移100像素 */
  }

  /* 鼠标经过cure时向外扩张100px,属性值依据上面正方体实现执行与编写*/
  .cure:hover .div1 {
    transform: translateZ(200px);
  }
  .cure:hover .div2 {
    transform: translateZ(-200px);
  }
  .cure:hover .div3 {
    transform: rotateY(90deg) translateZ(-200px);
  }
  .cure:hover .div4 {
    transform: rotateY(90deg) translateZ(200px);
  }
  .cure:hover .div5 {
    transform: rotateX(90deg) translateZ(200px);
  }
  .cure:hover .div6 {
    transform: rotateX(90deg) translateZ(-200px);
  }
</style>
