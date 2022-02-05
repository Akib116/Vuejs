<template>
  <div>
    <h1>Get User Info</h1>
    <button type="button" class="btn btn-danger" v-on:click="getUser()">Get User</button>
    </div>
    <table  class="table">
      <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Stack</th>
      <th scope="col">Profile Picture</th>
      <th scope="col">Resume</th>
    </tr>
      </thead>
      <tbody>
    <tr>
      <th scope="row">{{Gettoken.name}}</th>
      <td>{{Gettoken.email}}</td>
      <td>{{Gettoken.phone}}</td>
      <td>{{Gettoken.address}}</td>
      <td v-for="get_list in Gettoken.stacks" :key="get_list.stacks">{{get_list}}</td>
      <td><a :href="Gettoken.profile_picture" class="link-primary">Profile Picture</a></td>
      <td><a :href="Gettoken.cv" class="link-primary">CV</a></td>
    </tr>
      </tbody>
  </table>

  <fa icon="apple-alt" />
  <i class="fa fa-bath" aria-hidden="true"></i>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';


export default class Gettoken extends Vue {
  Gettoken=[]

  token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFraWIiLCJleHAiOjE3Mjk1MTA0OTd9.q7vDuAB-oIclOa_QfNbZUqrkSEDnmj2p2uqzzI-id8k"
  getUser() {
    axios.get(`${process.env.VUE_APP_BASE_URL}/api/user`, {
      headers: {
        'Authorization': `Bearer ${this.token}`,
      }

    }).then(res => {
      this.Gettoken=res['data']
      console.log(this.Gettoken)
    })
  }
}


</script>
<style scoped>
</style>

