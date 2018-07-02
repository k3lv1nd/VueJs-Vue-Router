import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
    jokes: [],
        loading: false
};

const getters = {
    jokes: state => state.jokes,
};

const mutations = {
    GET_JOKES(state, data) {

        state.loading = true;

        axios.get('http://api.icndb.com/jokes/random/10')
            .then( ({ data }) => {
                state.jokes = data.value;

            }, () => {

            })
    }
};

const store = new Vuex.Store({
    state, getters, mutations
});

export default store;