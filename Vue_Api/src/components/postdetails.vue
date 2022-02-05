<template>
<div>

  <table border="1px">
    <tr>
      <td>Title</td>
      <td>Body</td>
    </tr>
    <tr>
      <td>{{ postdetails.title}}</td>
      <td>{{ postdetails.body}}</td>
    </tr>
  </table>
</div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default class Postdetails extends Vue {
  postdetails = []

  beforeCreate() {
    const route = useRoute();
    const id = route.params.id;
    console.log(id);
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(response => {
          // this.abouts = response['data']
          this.postdetails = response['data']
          console.log(response['data'])
        }
    )
  }
}

</script>
