import Vue from "vue";
import AppComponent from "./App/App.vue";
import { Button, Message } from 'element-ui';
Vue.use(Button)
Vue.use(Message);
Vue.prototype.$message = Message;
Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
