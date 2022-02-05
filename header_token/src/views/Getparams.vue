<template>
  <Getparams></Getparams>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Getparams from '@/components/Getparams.vue';

@Options({
  components: {
    Getparams,
  },
})
export default class Get extends Vue {}
</script>
