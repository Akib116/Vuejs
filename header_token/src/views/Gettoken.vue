<template>
  <Gettoken></Gettoken>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Gettoken from '@/components/Gettoken.vue';

@Options({
  components: {
    Gettoken,
  },
})
export default class Get extends Vue {}
</script>
