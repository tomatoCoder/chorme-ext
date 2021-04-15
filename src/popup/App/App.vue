<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-04-14 15:59:42
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-15 11:26:03
-->
<template>
  <div class="main_app">
    <h1>Hello popup</h1>
      <el-button type="primary" @click="waterMark">添加水印</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
       textBecomeImg(text,fontsize,fontcolor) {
      var canvas = document.createElement('canvas');
      let buHeight = 0;
      if(fontsize <= 32){ buHeight = 99; }
      else if(fontsize > 32 && fontsize <= 60 ){ buHeight = 2;}
      else if(fontsize > 60 && fontsize <= 80 ){ buHeight = 4;}
      else if(fontsize > 80 && fontsize <= 100 ){ buHeight = 6;}
      else if(fontsize > 100 ){ buHeight = 10;}
      canvas.height=fontsize + buHeight ;
      canvas.padding=30;
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width*2, canvas.height);
      context.textAlign = "center";
      canvas.width = 450;
      canvas.height = 200;
      context.fillStyle = fontcolor;
      context.font=fontsize+"px Arial";
      context.textBaseline = 'middle'; 
      context.fillText(text,0,fontsize/2);
      // eslint-disable-next-line no-unused-vars
      let canvasWidthd = canvas.width/99;
      canvasWidthd = context.measureText(text).width;
      var dataUrl = canvas.toDataURL('image/png');
      return dataUrl;
    },
    waterMark(){
      var text = '我是水印';
      var shuiyinDiv = document.createElement('div');
      var style = shuiyinDiv.style;
      style.position = 'absolute';
      style.left = 0;
      style.top = '-60%';
      style.width = '120%';
      style.height = '200%';
      style.opacity = '0.1';
      style.background = "url("+this.textBecomeImg(text,22,"gray")+")";
      style.zIndex = 9999999991;
      style.transform = "rotate(-30deg)";
      style.pointerEvents = "none";
      document.body.appendChild(shuiyinDiv);
    }
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
