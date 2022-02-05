<template>
  <div v-for="(get_list,index) in Getparams.results" :key="index">
    <router-link :to="`/detailspage/`+ get_list.slug">
      <div class="card mt-3">
        <div class="card-header">
          {{ get_list.slug }}
        </div>
      </div>
    </router-link>
  </div>


</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';


export default class Nextpage extends Vue {
  Getparams = []

  beforeCreate() {
    axios.get( `${process.env.VUE_APP_BASE_URL}/api/companies?_limit=20&_start=30`, {
    }).then(res => {
      console.log(res)
      this.Getparams = res['data']
    });
  }


}


</script>
<style scoped>

</style>

