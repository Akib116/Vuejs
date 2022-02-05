<template>
  <div>
    <h1>Post Page</h1>
  </div>
  <table border="1px">
    <tr>
      <td>ID</td>


    </tr>

    <tr v-for="post_list in posts" :key="post_list.id">
      <td><button><a v-bind:href="'/post/'+post_list.id">{{ post_list.id }}</a></button></td>


    </tr>

  </table>





</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';

export default class AboutPage extends Vue {



  posts = []

  beforeCreate() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
          this.posts = response['data']
          console.log(this.posts)
        }
    )
  }
}

</script>
<style scoped>
</style>
