import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
    jokes: [],
    loading: false,
    user:''

};

const getters = {
    jokes: state => state.jokes,
    user: state=>state.user
};

const mutations = {
    GET_JOKES(state, data) {

        state.loading = true;

        axios.get('http://api.icndb.com/jokes/random/10')
            .then( ({ data }) => {
                state.jokes = data.value;

            }, () => {

            })
    },
    ADD_USER(state, name){
        state.user = name
    }
};

const store = new Vuex.Store({
    state, getters, mutations
});

export default store;