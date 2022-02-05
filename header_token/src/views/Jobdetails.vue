<template>
  <Jobdetails></Jobdetails>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Jobdetails from '@/components/Jobdetails.vue';

@Options({
  components: {
    Jobdetails,
  }
})
export default class Home extends Vue {}
</script>
