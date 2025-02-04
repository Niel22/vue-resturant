<template>
    <AppHeader />
    <h1>Update Resturant</h1>
    <p style="color: red;">{{ error }}</p>
    <form class="add" @submit.prevent="update">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="text" v-model="contact" placeholder="Enter contact">
        <input type="text" v-model="address" placeholder="Enter address">
        <button type="submit">Update</button>
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
            id: this.$route.params.id
        }
    },
    mounted(){
        if(!this.checkAuth()){
            this.$router.push({name: 'signin'});
        }

        this.getResturant();
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
        async getResturant() {
            try {
                const resturant = await axios.get('http://localhost:3000/resturants/' + this.id );

                this.name = resturant.data.name;
                this.contact = resturant.data.contact;
                this.address = resturant.data.address;
                return true;
            } catch (error) {
                console.log(error.message);
                this.$router.push({name: 'home'});
            }
        },
        async update(){
            try{
                if (!this.name || !this.contact || !this.address) {
                    this.error = "All fields are required";
                    return;
                }

                const resturant = await axios.put('http://localhost:3000/resturants/'+ this.id, {
                    name: this.name,
                    contact: this.contact,
                    address: this.address,
                });

                if (resturant.status !== 200) {
                    this.error = "Problem Occured";
                }
                this.$router.push({ name: 'home' });
                

            }catch(error){
                this.error = error.message;
            }
        }
    }
}
</script>