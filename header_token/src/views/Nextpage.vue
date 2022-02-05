<template>
  <Nextpage></Nextpage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Nextpage from '@/components/Nextpage.vue';

@Options({
  components: {
    Nextpage,
  },
})
export default class Next extends Vue {}
</script>
