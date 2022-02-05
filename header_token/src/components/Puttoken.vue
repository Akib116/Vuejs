<template>
  <h1>Put Data</h1>
  <h5>Name: <input type="text" name="name" v-model="name"/></h5><br><br>
  <h5>Phone: <input type="phone" name="phone" v-model="phone"/></h5><br><br>
  <h5>Address: <input type="address" name="address" v-model="address"/></h5><br><br>

  <button v-on:click="addUser()" >Add User</button>

</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';
export default class Puttoken extends Vue {
  name: any;
  phone: any;
  address: any;
  data() {
    return {
      name: '',
      phone: '',
      address: '',
    }
  }
  token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFraWIiLCJleHAiOjE3Mjk1MTA0OTd9.q7vDuAB-oIclOa_QfNbZUqrkSEDnmj2p2uqzzI-id8k"
  addUser(){
    axios.put(`${process.env.VUE_APP_BASE_URL}/api/user`, {
      name:this.name,
      phone:this.phone,
      address: this.address,

    },
        {headers: {
      'Authorization': `Bearer ${this.token}`,
    }
        })
        .then(function (response){
          console.log(response);
        })
  }

}
</script>

<style scoped>

</style>

