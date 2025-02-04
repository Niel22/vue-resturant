<template>
    <AppHeader />
    <h1>Add Resturant</h1>
    <p style="color: red;">{{ error }}</p>
    <form class="add" @submit.prevent="create">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="text" v-model="contact" placeholder="Enter contact">
        <input type="text" v-model="address" placeholder="Enter address">
        <button type="submit">Create</button>
    </form>
</template>

<script>
import axios from 'axios';
import AppHeader from '../partials/AppHeader.vue';

export default {
    name: "AddResturant",
    components: {
        AppHeader
    },
    data(){
        return {
            user: {},
            name: '',
            contact: '',
            address: '',
            error: ''
        }
    },
    computed:{
        getApi(){
            return process.env.VUE_APP_API_URL
        }
    },
    mounted(){
        if(!this.checkAuth()){
            this.$router.push({name: 'signin'});
        }
    },
    methods: {
        checkAuth(){
            let user = localStorage.getItem('auth');
            if(!user){
                return false
            }
            return true;
        },
        async create(){
            if(!this.name || !this.contact || !this.address){
                this.error = "All fields are required";
                return;
            }

            const resturant = await axios.post(`${this.getApi}resturants`, {
                name: this.name,
                contact: this.contact,
                address: this.address
            });
            if(resturant.status !== 201){
                this.error = "Problem Occured";
            }
            this.$router.push({name: 'home'});
        }
    }
}
</script>