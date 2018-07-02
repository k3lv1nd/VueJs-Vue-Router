<script></script>
<template>
    <div class="navigation">
        <div>
            <router-link :to="{path: '/'}">Home</router-link>
        </div>
        <div>
            <router-link :to="{name: 'About'}">About us</router-link>
        </div>
        <div>
            <router-link :to="{name: 'departments'}">departments</router-link>
        </div>
        <div>
           Storyline
        </div>
        <div>
            Contacts
        </div>
        <div>
            Team
        </div>
        <div>
            Services
        </div>
    </div>
</template>
<style>
    .navigation {
        display: flex;
        justify-content: space-between;
        margin-top: -60px;
        background: #0f9152;
        padding: 10px;
    }

</style>