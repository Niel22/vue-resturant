<template>
    <div>
        <img alt="vue logo" class="logo" src="/assets/img/logo.png">
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter your name" />
            <input type="email" v-model="email" placeholder="Enter your email" />
            <input type="password" v-model="password" placeholder="Enter your password" />
            <button @click="signUp">Sign Up</button>
        </div>
        <p>Already have an account? Login here <router-link :to="{ name: 'signin'}">Login</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    mounted(){
        let user = localStorage.getItem('auth');
        if(user){
            this.$router.push({name: 'home'});
        }
    },
    methods: {
        async signUp()
        {
            try{

                const existingUser = await axios.get('http://localhost:3000/users?email='+this.email);
                if(existingUser.data.length > 0){
                    alert('Email already taken');
                    return;
                }

                let result = await axios.post('http://localhost:3000/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                
                if(result.status === 201)
                {
                    alert('User registered');
                    localStorage.setItem('auth', JSON.stringify(result.data));
                    this.$router.push({name: 'home'});
                }
                
            }catch(error)
            {
                console.log(error.message);
            }

        }
    }

}
</script>

<style>

</style>