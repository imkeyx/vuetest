// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
/*
如果同一个url使用次数很多，可以在webpack.base.conf.js修改
配置项，修改resolve可以对常用的路径修改别名，比方说
src/assets/styles这个路径经常用，就可以对这个路径进行别名操作
简写成styles就可以了
*/

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
