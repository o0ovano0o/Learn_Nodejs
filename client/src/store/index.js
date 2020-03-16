import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Acount from "./module/acount.store"

export default new Vuex.Store({
    modules: {
        Acount,
    }
});