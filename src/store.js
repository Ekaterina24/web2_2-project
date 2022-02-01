import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        categories: null
    },
    getters: {
        CATEGORIES: state => state.categories
    },
    mutations: {
        SET_CATEGORIES: (state, info) => {
            state.categories = info
        }
    },

    actions: {
        GET_CATEGORIES({ commit }) {
            axios
                .get('http://demo-api.vsdev.space/api/categories')
                .then(response => commit('SET_CATEGORIES', response.data));
        }
    }
})

export default store;
