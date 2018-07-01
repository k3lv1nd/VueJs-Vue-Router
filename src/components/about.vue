<template>
    <div class="about">
        <h1>this is the about page</h1>
        <p v-text="new Date()"></p>
    </div>
</template>

<script>
    export default{
        name: 'about'

    }
</script>