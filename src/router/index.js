/*
 * @Author: your name
 * @Date: 2020-09-11 09:03:33
 * @LastEditTime: 2020-10-28 17:55:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \company-website\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import ContactUs from '@/views/ContactUs/ContactUs.vue'
import ExhibitionOfWorks from '@/views/ExhibitionOfWorks/ExhibitionOfWorks.vue'
import FangKuaiWangZheDetail from '@/views/WorksDetail/FangKuaiWangZheDetail.vue'
import GuoGuoYouShiJieDetail from '@/views/WorksDetail/GuoGuoYouShiJieDetail.vue'
import FangKuaiPrivacyPolicy from '@/views/WorksDetail/FangKuaiPrivacyPolicy.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {path: '/', component: Home, name:'Home', meta: {title: '首页'}},
        {path: '/ContactUs', component: ContactUs, name:'ContactUs', meta: {title: '联系我们'}},
        {path: '/ExhibitionOfWorks', component: ExhibitionOfWorks, name:'ExhibitionOfWorks', meta: {title: '作品展示'}},
        {path: '/FangKuaiWangZheDetail', component: FangKuaiWangZheDetail, name:'FangKuaiWangZheDetail', meta: {title: '方块王者的详情页'}},
        {path: '/GuoGuoYouShiJieDetail', component: GuoGuoYouShiJieDetail, name:'GuoGuoYouShiJieDetail', meta: {title: '果果游世界的详情页'}},
        {path: '/FangKuaiPrivacyPolicy', component: FangKuaiPrivacyPolicy, name:'FangKuaiPrivacyPolicy', meta: {title: '方块王者的隐私政策'}},
    ]
})