<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',


};
</script>

<style>

#app{
  text-align: center;
  color: #2c3e50;
  
}

body{
  margin: 0;
  padding: 0;
}

.register-input-fields, .login-input-fields, .add-restaurant-form input, .update-restaurant-form input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 10px;
  border: 1px solid skyblue;
}

.signup-button, .login-button, .add-restaurant-button, .update-restaurant-button{
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 20px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}

.logo{
  margin: auto;
  width: 80px;
  text-align: center;
}

.container-div{
  margin: auto;
  text-align: center;
  margin-top: 30px;
}
</style>
