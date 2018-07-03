<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex';

    export default {

        computed: {
            ...mapGetters({
                jokes: 'jokes',
                loading: 'loading',
                user: 'user'
            })
        },

        methods: {
            getJokes: function () {
               this.$store.commit('GET_JOKES');
            },
            addUser: function () {
                if(this.name != '') {
                    this.$store.commit('ADD_USER', this.name)
                }

            }
        },


        mounted() {
            this.getJokes();
        }
    }
</script>

<template>
    <div class="api">
        <h1>This is the api demo page</h1>
        <div id="app">
            <header>
                <span>Handling Ajax Request with Axios in Vue</span><br>
                <label>Enter your Username</label>
                <input v-model="name" type="text">
                <button @click="addUser">Login</button>
            </header>
            <main>
                <h2>Click the button to get Random jokes</h2>
                <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>

                <div v-if="loading">
                    <img src="../assets/logo.png"/>
                    Loading.....
                </div>

                <div class="wrapper">
                    <div class="row">
                        <div v-for="joke in jokes" :key="joke.id">
                            <div class="col-md-4 cards">
                                <table border="1px">
                                    <tr>
                                        <th>{{ joke.id }}</th>
                                        <td>{{ joke.joke }}</td>
                                        <td>
                                            <router-link :to="{ name: 'jokes', params: {id:joke.id}}">
                                                View joke
                                            </router-link>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </div>
</template>
