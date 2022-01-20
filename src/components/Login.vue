<template>
  <div class="container-div">
    <img
      src="https://cdn.nuawoman.com/global/img/header/NuaLogo2021-TM.png"
      alt=""
      class="logo"
    />
    <h2>Login</h2>
    <input
      type="text"
      v-model="email"
      placeholder="Enter Email"
      class="login-input-fields"
    />
    <br />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
      class="login-input-fields"
    />
    <br />
    <button @click="login" class="login-button">Login</button><br />
    New User, please go to <router-link to="/signup">Sign-up</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
        email: "",
        password: "",
    };
  },
  methods:{
      async login(){
          let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
          console.log(result);
          if(result.status === 200 && result.data.length > 0){
              console.log(result.data[0])
              localStorage.setItem('user-info', JSON.stringify(result.data[0]))
              this.$router.push({name: 'Home'});
          } else{
              alert('Please enter right crediential')
          }  
      }
  },
  mounted(){
      let user = localStorage.getItem('user-info')
      if(user){
          this.$router.push({name: 'Home'})
      }
  }
};
</script>


