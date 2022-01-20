<template>
  <div>
    <Header />
    <h1 style='text-align: center'>Add Restaurant</h1>
    <form action="" class="add-restaurant-form">
      <input type="text" placeholder="Enter Name" v-model='restaurant.name'>
      <input type="text" placeholder="Enter Address" v-model='restaurant.address'>
      <input type="text" placeholder="Enter Contact" v-model='restaurant.contact'>
      <button class="add-restaurant-button" @click="add">Add New Restaurant</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { uuid } from 'vue-uuid';
import Header from "./Header.vue";


export default {
  name: "AddRestaurant",
  components: {
    Header,
  },
  data(){
    return {
      restaurant:{
        id: '',
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods:{
    async add(e){
      e.preventDefault();
      this.restaurant.id = uuid.v1();
      let res = await axios.post('http://localhost:3000/restaurant', this.restaurant);
      if(res.status === 201){
        alert(`Restaurant ${res.data.name}added Successfully`)
      }
    }
  }
};
</script>
