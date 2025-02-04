<template>
    <AppHeader />
    <h1>Update Resturant</h1>
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
    name: "UpdateResturant",
    components: {
        AppHeader
    },
    data(){
        return {
            user: {},
            name: '',
            contact: '',
            address: '',
            error: '',
        }
    },
    mounted(){
        if(!this.checkAuth()){
            this.$router.push({name: 'signin'});
        }

        this.getResturant().then(found => {
            if(!found){
                this.$router.push({name: 'home'});
            }
        })
    },
    methods: {
        checkAuth(){
            let user = localStorage.getItem('auth');
            if(!user){
                return false
            }
            this.user = JSON.parse(user);
            return true;
        },
        async getResturant(){
            try{
                const resturant = await axios.get('http://localhost:3000/resturants?id='+this.$route.params.id);
            if(resturant.data.length === 0){
                return false;
            }

            this.name = resturant.data[0].name;
            this.contact = resturant.data[0].contact;
            this.address = resturant.data[0].address;
            return true;
        }catch(error){
            console.log(error.message);
        }
        }
    }
}
</script>