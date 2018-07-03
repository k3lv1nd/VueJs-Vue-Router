<template>
    <div class="about">
        <h1>You are Logged in as  {{user}}.</h1>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        name: 'about',
        data () {
                return {
                    name: 'User',
                    city: 'Nairobi, Kenya'
                }
            },
            computed: {
                getCounter() {
                    return this.$store.getters.getCounter;
                },
                reloads (){
                    return this.$store.getters.getReload;
                },
                ...mapGetters({
                    user: 'user'
                })
            },
        methods : {
            getLoggeninUser(){
                return this.$store.user
            }
        },
            created: function(){
                this.$store.commit('increment');
            },
            created: function(){
            this.$store.commit('addReload');
        }


    }
</script>