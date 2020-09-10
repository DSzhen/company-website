import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import ContactUs from '@/views/ContactUs/ContactUs.vue'
import ExhibitionOfWorks from '@/views/ExhibitionOfWorks/ExhibitionOfWorks.vue'
import FangKuaiWangZheDetail from '@/views/WorksDetail/FangKuaiWangZheDetail.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {path: '/', component: Home, name:'Home', meta: {title: '首页'}},
        {path: '/ContactUs', component: ContactUs, name:'ContactUs', meta: {title: '联系我们'}},
        {path: '/ExhibitionOfWorks', component: ExhibitionOfWorks, name:'ExhibitionOfWorks', meta: {title: '作品展示'}},
        {path: '/FangKuaiWangZheDetail', component: FangKuaiWangZheDetail, name:'FangKuaiWangZheDetail', meta: {title: '果果游世界的详情页'}},
    ]
})