<template>
<div class="job-list">
  <div class="order">
  <p>Ordered by {{ order }}</p>
  </div>
  <ul>
    <li v-for="job in orderedJobs" :key="job.id">
    <h2>{{ job.title }} in {{ job.location}}</h2>
    <div class="salary">
      <p>{{ job.salary }} BDT</p>

    </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloremque ducimus ea earum error fuga harum inventore ipsa, itaque minus mollitia nulla quam qui, quia sint suscipit tempore veritatis voluptatibus!
        </p>
      </div>
    </li>
  </ul>
</div>
</template>






<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import Job from '@/types/job'
import OrderTerm from "@/types/OrderTerm";


export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
    setup(props) {
      const orderedJobs = computed(() =>{
        return [...props.jobs].sort((a: Job, b: Job) =>{
          return a[props.order] > b[props.order] ? 1 : -1
        })
      })

      return { orderedJobs }
    }



})
</script>


<style>
.job-list{
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul{
  padding: 0;
}
.job-list li{
  list-style-type: none;
  background: white;
  padding: 16px;
  border-radius: 4px;
}
.job-list h2{
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}

.salary img{
  width: 30px;
}
.salary p{
  color: brown;
  font-weight: bold;
  margin: 10px 4px;
}

.order p{
  font-weight: bold;
  color: red;
}
</style>
