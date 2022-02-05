<template>
  <div class="card">
    <div class="card-header">
      Job Title: {{jobdetails.job_title}}
    </div>
    <div class="card-body">
      <p class="card-text">Created Time: {{jobdetails.created_at}}</p><br><br>
      <p class="card-text">Deadline: {{jobdetails.deadline}}</p><br><br>
      <h5 class="card-text">Salary: {{jobdetails.salary}}</h5><br><br>
      <h5>Stacks: </h5><p v-for="get_stack in jobdetails.stacks" :key="get_stack.stacks" class="card-text">{{get_stack}} ,  </p><br><br>
      <h5>External Ref: </h5><a target="_blank" :href="jobdetails.external_ref" class="card-text">{{jobdetails.external_ref}}</a><br><br>
      <h5>From Url: </h5><a target="_blank" :href="jobdetails.from_url" class="card-text">{{jobdetails.from_url}}</a><br><br>
    </div>
  </div>

</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';
import { useRoute } from 'vue-router';


export default class Jobdetails extends Vue {
  jobdetails = [];

  beforeCreate() {
    const route = useRoute();
    const slug = route.params.slug;
    const id = route.params.id;
    console.log(slug);
    console.log(id);


    axios.get( `${process.env.VUE_APP_BASE_URL}/api/company/`+slug+`/job-circulars/`+id).then(res => {
      this.jobdetails = res['data']
      console.log(res['data'])

    })
  }

}
</script>
<style scoped>
p,h5{
  display: inline;
}

</style>

