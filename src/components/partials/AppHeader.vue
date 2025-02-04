<template>
    <div class="nav">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'resturant.add'}">Add Resturant</router-link>
        <!-- <router-link :to="{name: 'resturant.update'}">Update Resturant</router-link> -->
        <router-link to="#" @click="logout">Logout</router-link>
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