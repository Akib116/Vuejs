<template>
      <div class="app">
        <header>
          <div class="order">
            <button @click="handleClick('title')">order by title</button>
            <button @click="handleClick('salary')">order by salary</button>
            <button @click="handleClick('location')">oder by location</button>
          </div>
        </header>
      <JobList :jobs="jobs" :order="order"></JobList>
      </div>
</template>

<script lang="ts">

import { defineComponent, reactive,toRefs,ref } from 'vue';
import JobList from "./components/JobList.vue";
import Job from './types/job'
import OrderTerm from './types/OrderTerm'
import orderTerm from "./types/OrderTerm";

export default defineComponent({
  name: 'App',
  components: {
    JobList
  },
  setup(){
    const jobs=ref<Job[]>([
      {title: 'farmer story', location: 'lon lon ranch', salary: 30000, id: '1'},
      {title: 'fisherman', location: 'long beach', salary: 40000, id: '2'},
      {title: 'Boatman', location: 'lost woods', salary: 35000, id: '3'},
      {title: 'prison guard', location: 'lake hylis', salary: 37000, id: '4'},
      {title: 'qurryman', location: 'vally', salary: 38000, id: '5'},
      {title: 'football player', location: 'gerudo', salary: 50000, id: '6'},
    ])

    const order =ref<OrderTerm>('title')

    const handleClick =(term: orderTerm) => {
      order.value=term
    }



    return {jobs, handleClick, order}
  },

});
</script>

<style>
header{
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button{
  margin: 0 10px;
  color: #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
