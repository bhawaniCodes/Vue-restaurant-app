<template>
  <div class="container-div">
    <img
      src="https://cdn.nuawoman.com/global/img/header/NuaLogo2021-TM.png"
      alt=""
      class="logo"
    />
    <h2>Sign Up</h2>
    <input
      type="text"
      v-model="signUpData.name"
      placeholder="Enter Name"
      class="register-input-fields"
    />
    <br />
    <input
      type="text"
      v-model="signUpData.email"
      placeholder="Enter Email"
      class="register-input-fields"
    />
    <br />
    <input
      type="password"
      v-model="signUpData.password"
      placeholder="Enter Password"
      class="register-input-fields"
    />
    <br />
    <button @click="signUp" class="signup-button">Sign Up</button><br />
    Already registered, please go to
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from "axios";
import { uuid } from "vue-uuid";

export default {
  name: "SignUp",

  data() {
    return {
      signUpData: {
        id: "",
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async signUp() {
      this.signUpData.id = uuid.v1();
      const result = await axios.post(
        "http://localhost:3000/users",
        this.signUpData
      );
      console.log(result);
      if (result.status === 201) {
        alert("successfully registered");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

