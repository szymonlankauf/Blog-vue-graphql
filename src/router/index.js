import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/admin/SignUp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
        },
        {
            path: '/signup',
            name: 'Signup',
            component: SignUp
        }
    ]
})
