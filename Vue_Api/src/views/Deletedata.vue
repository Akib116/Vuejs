<template>
  <div>
    <Deletedata></Deletedata>
  </div>
</template>
<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import Deletedata from '@/components/Deletedata.vue'

@Options({
  components: {
    Deletedata,
  },
})
export default class Home extends Vue {}
</script>
