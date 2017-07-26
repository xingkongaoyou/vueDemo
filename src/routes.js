/*
* @Author: Administrator
* @Date:   2017-07-26 21:44:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-26 21:54:05
*/

'use strict';
// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        }
    ]
})