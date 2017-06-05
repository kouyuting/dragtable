import Vue from 'vue'
import Router from 'vue-router'
import classify from '@/pages/classify'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'classify',
            component: classify
        }
    ]
})
