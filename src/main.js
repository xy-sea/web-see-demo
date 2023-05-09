import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';

import webSee from '@websee/core';
import performance from '@websee/performance';
import recordscreen from '@websee/recordscreen';

Vue.use(webSee, {
  dsn: 'http://localhost:8083/reportData',
  apikey: 'abcd',
  silentWhiteScreen: true, // 开启白屏检测
  skeletonProject: true, // 项目有骨架屏
  repeatCodeError: true, // 开启错误上报去重
  silentXhr: false, // 取消监听xhr请求报错
  silentFetch: false, // 取消监听fetch请求报错
  userId: '123',
  handleHttpStatus(data) {
    let { url, response } = data;
    // code为200，接口正常，反之亦然
    let { code } = typeof response === 'string' ? JSON.parse(response) : response;
    if (url.includes('/getErrorList')) {
      return code === 200 ? true : false;
    } else {
      return true;
    }
  }
});
webSee.use(performance); // 安装性能插件
webSee.use(recordscreen, { recordScreentime: 20 }); // 安装录屏插件

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false;

setTimeout(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app');
}, 3000);
