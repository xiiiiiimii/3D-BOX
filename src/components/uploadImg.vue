
<template>
  <div>
    <input id="upload_file" type="file" accept='image/*' name="file"  @change="fileChange($event)"/>
    <div class="image-item space" @click="showActionSheet()">
      <div class="image-up"></div>
    </div>

    <div class="upload_warp">
      <div class="upload_warp_img">
        <div class="upload_warp_img_div" v-for="(item,index) in imgList" :key="index">
          <div class="upload_warp_img_div_top">
            <img src="http://114.115.162.39/static/image/x.png" class="upload_warp_img_div_del" @click="fileDel(index)">
          </div>
          <img :src="item.file.src" style="display: inline-block;">
        </div>
        <div class="upload_warp_left" id="upload_warp_left" @click="fileClick()" v-if="this.imgList.length < 6">
          <!--<img src="../assets/upload.png">-->
        </div>
      </div>

    </div>

    <div class="upload_warp_text">
      <span>选中{{imgList.length}}张文件，共</span>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
export default {
  name: 'cameras-and-albums',
  data () {
    return {
      imgList: [],
      datas: new FormData(),
      files: 0,
      size: 0
    }
  },
  methods: {
    fileChange (param) {
      console.log(param)
    },
    showActionSheet () {},
    fileClick () {},
    fileDel () {}
  }
}
</script>
<style>
  .uploadImg{
  }
</style>
