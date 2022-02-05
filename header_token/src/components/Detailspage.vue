<template>

  <div class="card">
    <div class="card-header">
      Company Name: {{detailspage.name}}
    </div>
    <div class="card-body">
      <h5 class="card-text">Address: {{detailspage.address}}</h5><br><br>
      <p class="card-text">Email: {{detailspage.contact_email}}</p><br><br>
      <h5>Stacks: </h5><p v-for="get_stack in detailspage.stacks" :key="get_stack.stacks" class="card-text">{{get_stack.name}},  </p><br><br>
      <a target="_blank" :href="detailspage.facebook_url">{{ detailspage.facebook_url }}</a><br><br>
      <a target="_blank" :href="detailspage.linkedin_url" class="card-text">{{detailspage.linkedin_url}}</a><br><br>
      <h5>Web: </h5><a target="_blank" :href="detailspage.web" class="card-text">{{detailspage.web}}</a><br><br>
      <p class="card-text">Thana: {{detailspage.thana}}</p><br><br>
      <p class="card-text">Total Active Job: {{detailspage.total_active_job}}</p>

    </div>
  </div>
  <br><br>


  <div v-for="(get,index) in jobDetails" :key="index" class="card">
    <router-link :to="'/jobdetails/'+get.company.slug+`/job-circulars/`+get.id">
      <div class="card mt-3">
        <div class="card-header">Job Title: {{get.job_title}}</div>
      </div>
    </router-link>
    <div class="card-body">
      <p class="card-text">Created Time: {{get.created_at}}</p><br><br>
      <p class="card-text">Deadline: {{get.deadline}}</p><br><br>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue} from 'vue-class-component';
import axios from 'axios';
import { useRoute } from 'vue-router';


export default class Detailspage extends Vue {
  detailspage = [];
  jobDetails = [];

  beforeCreate() {
    const route = useRoute();
    const slug = route.params.slug;
    console.log(slug);


    axios.get( `${process.env.VUE_APP_BASE_URL}/api/company/`+slug).then(res => {
      this.detailspage = res['data']
      console.log(res['data'])

    });

    axios.get( `${process.env.VUE_APP_BASE_URL}/api/company/`+slug+`/job-circular`).then(res => {
      this.jobDetails = res['data']
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

