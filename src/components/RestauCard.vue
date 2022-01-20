<template>
  <div>
    <div class="restaurant-card">
      <div v-for="item in data" :key="item.id">
        <p> Restaurant Name:  <b>{{ item.name }} </b> </p>
        <p> Restaurant Address:  <b>{{ item.address }}</b> </p>
        <p> Restaurant Ph. Number:  <b>{{ item.contact }}</b> </p>
        <router-link class="update-res-button" :to="'/update-restaurant/'+item.id">Update Restaurant</router-link>
        <button class="delete-res-button" @click="deleteRestaurant(item.id)">Delete Restaurant</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "RestauCard",
  props: {
    data: Array,
    deleteRestaurant: Function
  },
  methods:{
    update(){
      this.$router.push({name: "UpdateRestaurant"})
    }
  }
};
</script>

<style scoped>
.restaurant-card {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.restaurant-card div {
  border: 1px solid black;
  min-width: 19rem;
  margin: 1rem 3rem;
  padding: .5rem;
}

.update-res-button, .delete-res-button{
  padding: .2rem 1rem;
  background: skyblue;
  border-radius: 2px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.308);
  text-decoration: none;
  color: black;
}

.update-res-button:hover, .delete-res-button:hover{
  background: rgb(66, 66, 66);
  color: white;
}
.update-res-button{
  padding: .22rem 1rem;
}
</style>
