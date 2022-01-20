<template>
    <ul class="header-links">
        <router-link to='/'>Home</router-link>
        <router-link to='/add-restaurant'>Add Restaurant</router-link>
        <li @click='logout'>Logout</li>
    </ul>
</template>

<script>

export default {
    name: 'Header',
    methods:{
        logout(){
            localStorage.removeItem('user-info');
            this.$router.push({name: 'Login'})
        }
    }
}

</script>

<style scoped>
.header-links{
    background: skyblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    height: 4rem;
    font-size: 1.5rem;
    
}

.header-links > *{
    padding: 1rem;
    text-decoration: none;
    color: black;
    
}

.header-links >:hover{
    color: white;
    background: black;
    /* padding: 1rem; */
    cursor: pointer;
}

</style>