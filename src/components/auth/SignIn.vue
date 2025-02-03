<template>
    <img alt="vue logo" class="logo" src="../../assets/login.jpeg">
    <h1>Sign In</h1>
    <div class="register">
        <input type="email" v-model="email" placeholder="Enter your email" />
        <p style="color: red;" v-if="error">{{ error }}</p>
        <input type="password" v-model="password" placeholder="Enter your password" />
        <p style="color: red;" v-if="error">{{ error }}</p>
        <button @click="signIn">Sign Up</button>
    </div>
    <p>You done have an account yet? <router-link :to="{ name: 'signup'}">Create Account</router-link></p>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignIn',
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    mounted(){
        let user = localStorage.getItem('auth');
        if(user){
            this.$router.push({name: 'home'});
        }
    },
    methods: {
        async signIn() {
            try {

                const user = await axios.get('http://localhost:3000/users?email=' + this.email);
                if (user.data.length === 0) {
                    this.error = 'Incorrect email or password';
                    return;
                }

                if (this.password !== user.data[0].password) {
                    this.error = 'Incorrect email or password';
                    return;
                }

                alert('User logged in');
                console.log(user.data[0]);
                localStorage.setItem('auth', JSON.stringify(user.data[0]));
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}
</script>

<style>

</style>