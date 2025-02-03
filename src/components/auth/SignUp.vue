<template>
    <img alt="vue logo" class="logo" src="../../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name" />
        <input type="email" v-model="email" placeholder="Enter your email" />
        <input type="password" v-model="password" placeholder="Enter your password" />
        <button @click="signUp">Sign Up</button>
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
.logo {
  width: 100px;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>