import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/views/Container/Container.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {path: '/', component: Container, meta: {title: '首页'}},
    ]
})