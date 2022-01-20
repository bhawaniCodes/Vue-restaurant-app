<template>
  <div>
    <Header />
    <h1 style='text-align: center'>Update Restaurant</h1>
    <form action="" class="update-restaurant-form">
      <input type="text" placeholder="Enter Name" v-model='restaurant.name'>
      <input type="text" placeholder="Enter Address" v-model='restaurant.address'>
      <input type="text" placeholder="Enter Contact" v-model='restaurant.contact'>
      <button class="update-restaurant-button" @click="update">Update Restaurant</button>
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
    async update(e){
      e.preventDefault();
      console.log(`http://localhost:3000/restaurant/${this.id}`)
      let res = await axios.put(`http://localhost:3000/restaurant/${this.restaurant.id}`, this.restaurant);
      if(res.status === 200){
        alert(`Restaurant ${res.data.name} updated Successfully`)
      }
      this.$router.push({name: 'Home'})
    }
  },
  async mounted(){
    // console.log( this.$route.params.id);
    let idd = this.$route.params.id;
    let res = await axios.get(`http://localhost:3000/restaurant/${idd}`);
    this.restaurant.id = res.data.id;
    this.restaurant.name = res.data.name;
    this.restaurant.address = res.data.address;
    this.restaurant.contact = res.data.contact;
  }
};
</script>