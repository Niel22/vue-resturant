<template>
    <AppHeader />
    <h1>Hello User, welcome to home page</h1>
</template>

<script>
import AppHeader from './partials/AppHeader.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader
    },
    mounted(){
        let user = localStorage.getItem('auth');
        if(!user){
            this.$router.push({name: 'signin'});
        }
    },
}
</script>

<style>

</style>