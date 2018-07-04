import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = {
    jokes: [],
    loading: false,
    user:'',
    details: {}

};

const getters = {
    jokes: state => state.jokes,
    user: state=>state.user,
    details: state=>state.details,
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
    },
    ADD_DETAILS(state, details){
        state.details=details
    }
};

const store = new Vuex.Store({
    state, getters, mutations
});

export default store;