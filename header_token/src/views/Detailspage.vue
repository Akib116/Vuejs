<template>
  <Detailspage></Detailspage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Detailspage from '@/components/Detailspage.vue';

@Options({
  components: {
    Detailspage,
  },
})
export default class Home extends Vue {}
</script>
