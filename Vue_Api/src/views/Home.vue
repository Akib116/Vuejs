<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
  <HomePage></HomePage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from '@/components/Home.vue';


@Options({
  components: {
  
    HomePage,
  },
})
export default class Home extends Vue {}
</script>
