<template>
  <h1>Post method</h1>
  <input type="text" name="email" v-model="email"/><br><br>
  <input type="password" name="password" v-model="password"/><br><br>
  <button v-on:click="addUser()" >Add User</button>

</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';
import { useRoute } from 'vue-router';
export default class Postdata extends Vue {
  email: any;
  password: any;
  data() {
    return{
      email:'',
      password:'',
    }
  }
  addUser(){
    axios.post('http://localhost:3000/posts',{
      email: this.email,
      password: this.password,
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
  });
  }

}
</script>

<style scoped>

</style>
