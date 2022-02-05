<template>

  <div>
    <Postpage></Postpage>

  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Postpage from '@/components/Postpage.vue';

@Options({
  components: {
    Postpage,
  },
})
export default class Home extends Vue {}
</script>
