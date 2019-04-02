import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/admin/SignUp'
import LogIn from '../components/admin/LogIn'
import Users from '../components/admin/Users'
import UserDetails from '../components/admin/UserDetails'

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
        },
        {
            path: '/login',
            name: 'Login',
            component: LogIn
        },
        {
            path: '/admin/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/admin/users/:id',
            name: 'UserDetails',
            component: UserDetails,
            props: true
        }
    ]
})
