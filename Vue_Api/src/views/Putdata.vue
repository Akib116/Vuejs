<template>
  <div>
   <Putdata></Putdata>
  </div>
</template>
<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import Putdata from '@/components/Putdata.vue'

@Options({
  components: {
    Putdata,
  },
})
export default class Home extends Vue {}
</script>
