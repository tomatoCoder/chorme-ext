/*
 * @Description: 对指定网页进行插入内容
 * @Author: qingyang
 * @Date: 2021-04-15 09:21:38
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-15 09:46:30
 */
import {
    Message,
    MessageBox
   } from 'element-ui';
   // element的字体文件无法通过打包加载，所以另外通过cdn来加载样式
   let element_css = document.createElement('link');
   element_css.href = 'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css'
   element_css.rel = "stylesheet"
   document.head.append(element_css)
   MessageBox.alert('这是一段内容', '标题名称', {
    confirmButtonText: '确定',
    callback: action => {
    Message({
     type: 'info',
     message: `action: ${ action }`
    });
    }
   })