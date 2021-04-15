/*
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-04-14 15:59:42
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-15 11:28:14
 */
import Vue from "vue";
import AppComponent from "./App/App.vue";
import { Button } from 'element-ui';
Vue.use(Button)
Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
