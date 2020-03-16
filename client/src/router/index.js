import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import Dashboard from "../components/Dashboard"
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/login',
            name: 'login',
            component: LogIn
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})