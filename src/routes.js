import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddRestaurant from './components/AddRestaurant'
import UpdateRestaurant from './components/UpdateRestaurant'
import Router from 'vue-router';
import Vue from 'vue';


Vue.use(Router);

const routes = [
    {name: 'Home', component: Home, path: '/'},
    {name: 'SignUp', component: SignUp, path: '/signup'},
    {name: 'Login', component: Login, path: '/login'},
    {name: 'AddRestaurant', component: AddRestaurant, path: '/add-restaurant'},
    {name: 'UpdateRestaurant', component: UpdateRestaurant, path: '/update-restaurant/:id'},
]

export default new Router({
    routes
})
