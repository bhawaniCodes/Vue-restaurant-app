<template>
  <div>
    <Header />
    <div class="container-div">
      <h1>Hello {{ user }}, welcome to Home</h1>
      <RestauCard :data="restaurants" :deleteRestaurant="deleteRestaurant" />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import RestauCard from "./RestauCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    RestauCard,
  },
  data() {
    return {
      user: "",
      restaurants: [],
    };
  },
  methods: {
    async deleteRestaurant(idd) {
      let res = await axios.delete(`http://localhost:3000/restaurant/${idd}`);
      if(res.status === 200){
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      if (user) this.user = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let res = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = res.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>