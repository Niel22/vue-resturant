<template>
    <AppHeader />
    <h1>Hello {{ name }}, welcome to home page</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">{{ success }}</p>

    <table v-if="resturants?.length > 0" border="1">
        <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(resturant, index) in resturants" :key="index+1">
                <td>{{ index + 1 }}</td>
                <td>{{ resturant.name }}</td>
                <td>{{ resturant.contact }}</td>
                <td>{{ resturant.address }}</td>
                <td>
                    <router-link :to="{name: 'resturant.update', params : {id : resturant.id}}">Edit</router-link> 
                    <button @click="deleteRestaurant(resturant.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>

    <p v-else>No Resturant Found</p>
</template>

<script>
import axios from 'axios';
import AppHeader from '../partials/AppHeader.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader
    },
    data(){
        return {
            name: '',
            user: {},
            resturants: [],
            error: '',
            success: ''
        }
    },
    mounted(){
        if(!this.checkAuth()){
            this.$router.push({name: 'signin'});
        }
        this.name = this.user.name;
        this.fetchAllResturants();
        
    },
    computed:{
        getApi(){
            return process.env.VUE_APP_API_URL
        }
    },
    methods: {
        async fetchAllResturants(){
            console.log(this.getApi);
            const result = await axios.get(`${this.getApi}resturants`);
            this.resturants = result.data;
        },
        checkAuth(){
            let user = localStorage.getItem('auth');
            if(!user){
                return false
            }
            this.user = JSON.parse(user);
            return true;
        },
        async deleteRestaurant(id){
            try{
                const resturant = await axios.delete(`${this.getApi}resturants/${id}`);

                if (resturant.status === 200) {
                    this.success = "Resturant Deleted";
                    this.resturants = this.resturants.filter(resturant => resturant.id !== id);
                }
            }catch(error){
                this.error = error.message
            }
        }
    }
}
</script>

<style>

</style>