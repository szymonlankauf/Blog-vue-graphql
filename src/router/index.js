import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/admin/SignUp'
import LogIn from '@/components/admin/LogIn'
import Users from '@/components/admin/Users'
import UserDetails from '@/components/admin/UserDetails'
import AddPost from '@/components/admin/AddPost'
import Posts from '@/components/admin/Posts'
import Home from '@/components/Home'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
        },
        {
            path: '/admin/posts/new',
            name: 'AddPost',
            component: AddPost
        },
        {
            path: '/admin/posts',
            name: 'Posts',
            component: Posts
        },
        {
            path: '/:slug',
            name: 'SinglePost',
            component: SinglePost,
            props: true
        }
    ]
})
