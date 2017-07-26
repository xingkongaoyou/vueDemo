/*
* @Author: Administrator
* @Date:   2017-07-26 21:44:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-26 21:55:57
*/

'use strict';
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import './assets/styles/base.css'
//import './assets/sass/reset.sass'//报错暂时不用sass
Vue.config.debug = true;//开启错误提示

new Vue({
        router,
        el: '#appIndex',
        render: h => h(App)
})
