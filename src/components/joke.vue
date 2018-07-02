<script>
    export default {
        data() {
            return {
                id: this.router.params.id,
                joke: {}
            }
        },

        computed: {

        },

        watch: {

        },

        methods: {
            getJokeDetails: function () {
                axios.get('url', id)
                    .then( ({data}) => {

                        this.joke = data;

                    }, () => {
                        //raise
                    });
            }
        },

        mounted() {
            this.getJokeDetails();
        },

        created() {

        },

        beforeCreated() {

        },

        afterCreated() {

        }
    }
</script>

<template>
    <div>

    </div>
</template>