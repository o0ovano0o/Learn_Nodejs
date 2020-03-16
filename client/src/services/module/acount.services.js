/* eslint-disable new-cap */
import Api from '@/services'

export default {
    signUp(user) {
        return Api().post('register', user)
    },
    logIn(user) {
        return Api().post('login', user)
    }
}