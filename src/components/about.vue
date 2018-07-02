<template>
    <div class="about">
        <h1>this is the about page</h1>
               
    </div>
</template>

<script>
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