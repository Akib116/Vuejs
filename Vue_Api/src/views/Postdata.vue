<template>
  <div>
    <Postdata></Postdata>
  </div>
</template>
<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import Postdata from '@/components/Postdata.vue'

@Options({
  components: {
    Postdata,
  },
})
export default class Home extends Vue {}
</script>
