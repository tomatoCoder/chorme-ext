/*
 * @Description: 对指定网页进行插入内容
 * @Author: qingyang
 * @Date: 2021-04-15 09:21:38
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-15 09:46:30
 */
  const waterMark = (option)=> {
    let id = 'Watermark';
    if (document.getElementById(id) !== null) {
      document.body.removeChild(document.getElementById(id));
    }
    //创建一个画布
    let can = document.createElement('canvas');
    //设置画布的长宽
    can.width =  option.width || 200;
    can.height = option.height || 160;
    let cans = can.getContext('2d');
    cans.rotate(-20 * Math.PI / 180); // 旋转角度
    cans.font ="30px Arial"; // 设置字体大小
    cans.fillStyle = 'rgb(0, 0, 0, 0.15)'; // 设置填充绘画的颜色、渐变或者模式
    cans.textAlign = 'left'; // 设置文本内容的当前对齐方式
    cans.textBaseline = 'Middle'; // 设置在绘制文本时使用的当前文本基线
    cans.fillText(option.text, can.width / 8 - 25, can.height / 2); // 输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置
    let div = document.createElement('div');
    div.id = id;
    div.style.pointerEvents = 'none';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = document.documentElement.clientWidth + 'px';
    div.style.height =  document.documentElement.clientHeight + 'px';
    div.style.fontWeight = 'lighter';
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
    div.style.zIndex = '0';
    document.body.appendChild(div);
  }
  
window.onload=function(){
    waterMark({
        text:'name12313',
        width:300,
        height:300
    })
}