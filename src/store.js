import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import state from "@/store/state.js";
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";


export default new Vuex.Store({
    state,
    mutations,
    actions
});
