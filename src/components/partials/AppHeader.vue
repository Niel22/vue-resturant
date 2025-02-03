<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Resturant</a>
        <a href="#">Upate Resturant</a>
        <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        logout(){
            localStorage.removeItem('auth');
            this.$router.push({name: 'signin'});
        }
    }
}
</script>

<style>

</style>