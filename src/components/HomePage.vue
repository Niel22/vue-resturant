<template>
    <h1>Hello User, welcome to home page</h1>
</template>

<script>
export default {
    name: 'HomePage',
    mounted(){
        let user = localStorage.getItem('auth');
        if(!user){
            this.$router.push({name: 'signup'});
        }
    }
}
</script>

<style>

</style>