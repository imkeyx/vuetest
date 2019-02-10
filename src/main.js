// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
/*
vue-awesome-swiper是一个vue轮播图插件，
引入它然后引入它的css文件
*/
/*
如果同一个url使用次数很多，可以在webpack.base.conf.js修改
配置项，修改resolve可以对常用的路径修改别名，比方说
src/assets/styles这个路径经常用，就可以对这个路径进行别名操作
简写成styles就可以了
*/
/*
fastclick是修正移动端点击链接时可能延时300毫秒才执行的问题，
通过NPM下载这个文件，引用这个文件，
然后fastclick.attach(document.body)就能解决这个问题
*/

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
