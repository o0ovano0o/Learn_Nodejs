import AcountService from '@/services/module/acount.services'

const state = {
    SignUpstatus: '',
    LogInstatus: '',
    acount: {
        email: '',
        username: '',
        password: ''
    }
}

const getters = {
    SignUpstatus: state => state.SignUpstatus,
    LogInstatus: state => state.LogInstatus

}

const mutations = {
    SignUp: (state, payload) => {
        state.SignUpstatus = payload.status
    },
    LogIn: (state, payload) => {
        state.LogInstatus = payload.status
    }

}

const actions = {
    SignUp: async({ commit }, payload) => {
        try {
            let result = await AcountService.signUp(payload)
            commit('SignUp', result.data)
        } catch (e) {
            console.log(e)
        }
    },
    LogIn: async({ commit }, payload) => {
        try {
            let result = await AcountService.logIn(payload)
            commit('LogIn', result.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}